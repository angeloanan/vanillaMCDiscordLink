const { spawn } = require('child_process')
const fetch = require('node-fetch')
const Discord = require('discord.js')
const config = JSON.parse(require('fs').readFileSync('./config.json'))

const mcWebhook = new Discord.WebhookClient(config.webhook.id, config.webhook.secret, config.clientOptions)
const mcBot = new Discord.Client(config.clientOptions)

const loginParser = /([\w]+)\[[\d./:]+\] logged in with entity id \d+ at \([\d., ]+\)/
const logoutParser = /([\w]+) left the game/
const deathParser = /([A-Za-z]+ (?:was|walked|drowned|suffocated|experienced|removed|blew|fell|went|burned|tried|discovered|got|starved|fell|pummeled|died|withered) ?[\S ]*)/ // https://minecraft.gamepedia.com/Health
const lostConnectionParser = /([\S]+) lost connection: [\S ]+/
const lineParser = /\[[\d:]+\] \[([^/]+)\/([^\]]+)\]: ([\S ]+)/
const messageParser = /<([\w]+)> ([\S\t ]*)/
// const meParser = /\* h/
// const sayParser = /a/

let players = []

const mcServer = spawn('java', ['-Xms128M', '-Xmx1024M', '-XX:+UseG1GC', '-jar', `${config.directory}\\server.jar`, 'nogui'], { cwd: config.directory })

// Bot ready
mcBot.once('ready', async () => {
  console.log('Discord mcBot/RDY : Bot is listening on channelID ' + config.messageChannel)
  mcBot.user.setActivity('0 players', { type: 'WATCHING' })
})

// Handles any data on server console out (stdout)
mcServer.stdout.on('data', (chunk) => {
  let out = lineParser.exec(chunk.toString())
  console.log(`${out[1]}/${out[2]}: ${out[3]}`)

  handleMessage([out[1], out[2], out[3]])
})

// Handles message in Discord
mcBot.on('message', (msg) => {
  if (msg.author.bot) return
  if (msg.system) return

  if (msg.channel.id === config.messageChannel) {
    console.log(`Discord mcBot/MSG : <${msg.author.username}#${msg.author.discriminator}> ${msg.cleanContent}`)
    let username = msg.author.username + '#' + msg.author.discriminator
    let message = msg.cleanContent.replace('\n', ' ')
    let extra = msg.attachments.size > 0 ? ',{"text":" (Attachment included)","color":"dark_gray","italic":true}' : ''

    mcServer.stdin.write(`tellraw @a ["",{"text":"<${username}> ","color":"blue"},{"text":"${message}","color":"none"}${extra}]\n`)
  }
})

mcBot.on('error', async (err) => {
  console.log(`\n\n\nERROR\n${err.name}: ${err.message}\n${err.stack}\n\n\n`)
})

// Handles CTRL + C (Server saving)
process.on('SIGINT', async () => {
  mcServer.stdin.write('stop\n')

  await mcServer.on('exit', (code, sig) => {
    console.log(`MCSERVER Exited: ${code} | ${sig}`)
    console.log(`NodeJS will exit now...`)
    process.exit()
  })
})

process.on('SIGTERM', async () => {
  mcServer.stdin.write('stop\n')

  await mcServer.on('exit', (code, sig) => {
    console.log(`MCSERVER Exited: ${code} | ${sig}`)
    console.log(`NodeJS will exit now...`)
    process.exit()
  })
})

/**
 * Handles message and sends webhook
 * @param {string} a Thread
 * @param {string} b Part
 * @param {string} c Message
 */
async function handleMessage (a, b, c) {
  if (!b && !c) { [a, b, c] = a } // hack

  if (a === 'Server thread' && b === 'INFO') {
    if (loginParser.test(c)) { // Login message
      let username = loginParser.exec(c)[1]
      updatePresence('i', username)
      return mcWebhook.send(`${username} joined the server.`)
    }

    if (logoutParser.test(c)) { // Logout message
      let username = logoutParser.exec(c)[1]
      updatePresence('o', username)
      return mcWebhook.send(`${username} left the server.`)
    }

    if (lostConnectionParser.test(c)) { return } // Hack, deathParser triggers if message is 'An existing connection was forcibly closed...'

    switch (c.substr(0, 1)) {
      case '<': // Message
        let [, username, message] = messageParser.exec(c)
        getUUID(username).then(uuid => {
          mcWebhook.send(message, { username: username, avatarURL: `https://crafatar.com/avatars/${uuid}`, disableEveryone: true })
        })
        break

      case '[': // Say (OP Only?)
        break

      case '*': // Me
        break

      default:
        if (deathParser.test(c)) { // Death message, last because this is not refined and unsafe
          let message = deathParser.exec(c)[0]
          return mcWebhook.send(message + '. Press F everyone!')
        }
        break
    }
  }
}

/**
 * Searches the UUID of a username. Returns UUID of Steve if not found
 * @param {string} username Username to search
 * @returns {string} UUID of username
 */
async function getUUID (username) {
  let body = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
  if (body.status === 204) {
    return '8667ba71b85a4004af54457a9734eed7'
  } else {
    let json = await body.json()
    return json.id
  }
}

/**
 * Updates the bot status by adding or removing usernames to an array
 * @param {string} io Input or Output
 * @param {string} username Username to I/O
 */
async function updatePresence (io, username) { // TODO: Use numbers instead. Duh.
  switch (io) {
    case 'i':
      players.push(username)
      break
    case 'o':
      players.pop()
      break
  }
  mcBot.user.setActivity(players.length + ' players', { type: 'WATCHING' })
}

mcBot.login(config.botToken)
