/* eslint-env jest */

const { deathParser } = require('../regex')

describe('Minecraft Gamepedia Deaths', () => {
  // Arrows
  it('Arrow 1', () => {
    const message = 'Player was shot by Arrow'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  it('Arrow 2 - Entity', () => {
    const message = 'Player was shot by Skeleton'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
  it('Arrow 3 - Player w/ Named Bow', () => {
    const message = 'Player was shot by AngeloUwU by using [CustomBowName]'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
  it('Cactus 1', () => {
    const message = 'Player was pricked to death'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  it('Cactus 2 - Escaping', () => {
    const message = 'AngeloUwU walked into a cactus whilst trying to escape Angelo'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
  // Dragon's Breath

  it('Dragon breath 1', () => {
    const message = 'Player was roasted in dragon breath'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  it('Dragon breath 2 - Player Action', () => {
    const message = 'Player was roasted in dragon breath by Angelo'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  // Drowned

  it('Drowned 1', () => {
    const message = 'Player drowned'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
  it('Drowned 2 - Escaping', () => {
    const message = 'Player drowned whilst trying to escape Angelo'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  // Elytra

  it('Elytra 1', () => {
    const message = 'Player experienced kinetic energy'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  it('Elytra 2 - Escaping', () => {
    const message = 'Player experienced kinetic energy whilst trying to escape Angelo'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  // Explosions
  it('Explosion 1', () => {
    const message = 'Player blew up'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
  it('Explosion 2 - Player Action', () => {
    const message = 'Player was blown up by Angelo'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  it('Explosion 3 - Player w/ Weapon', () => {
    const message = 'Player was blown up by Angelo using [YourNamedSomething]'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })

  // Intentional Game Design
  // TODO: Figure out the exact message

  it('Intentional Game Design 1', () => {
    const message = 'Player was killed by Sleeping In the Nether'
    expect(deathParser.exec(message)).toEqual(expect.arrayContaining([message]))
  })
})

/*
Falling
[player] hit the ground too hard
Appears only if the player is killed by a short fall, Ender Pearl damage, or riding an entity that died due to fall damage.
[player] hit the ground too hard whilst trying to escape [player/mob]
[player] fell from a high place ‌[Java and Bedrock editions only]
Caused by a fall greater than 5 blocks.
[player] fell off a ladder
[player] fell off some vines
[player] fell out of the water
[player] was doomed to fall
[player] was doomed to fall by [mob/player]
[player] was doomed to fall by [mob/player] using [weapon]
[player] fell too far and was finished by [mob/player]
[player] fell too far and was finished by [mob/player] using [weapon]
Type /gamerule falldamage false to disable fall damage.‌[Java and Bedrock editions only]
Falling blocks
[player] was squashed by a falling anvil
[player] was squashed by a falling anvil whilst fighting [player/mob]
[player] was squashed by a falling block
This message appears if the player is killed by a custom falling block other than an anvil that is modified to inflict damage
[player] was squashed by a falling block whilst fighting [player/mob]
Fatal poison effect‌[Bedrock Edition only] / Instant Damage
[player] was killed by magic
Fire
[player] went up in flames
This message appears if the player died while in the source of the fire (unless the game rule firedamage has been set to false‌[Java and Bedrock editions only]
[player] burned to death
*This message appears if the player died while on fire, but not in the source (unless the game rule firedamage has been set to false‌[Java and Bedrock editions only]
[player] walked into fire whilst fighting [player/mob]
[player] was burnt to a crisp whilst fighting [player/mob]
Firework rockets
[player] went off with a bang
[player] went off with a bang whilst fighting [player/mob]
Lava
[player] tried to swim in lava
[player] tried to swim in lava to escape [player/mob]
Lightning
[player] was struck by lightning
[player] was struck by lightning whilst fighting [player/mob]
Magma Block
[player] discovered the floor was lava
[player] walked into danger zone due to [player/mob]
Players and mobs
[player] was slain by [player/mob]
[player] was slain by [player/mob] using [weapon]
Caused by kills using a renamed weapon.
[player] was fireballed by [player/mob]
[player] was fireballed by [player/mob] using [weapon]
[player] was stung to death‌[Java Edition only]
Caused by being killed by a bee.
[player] was stung to death by [player/mob]‌[Java Edition only]
Potions of Harming
[player] was killed by magic
Happens when the potion is shot from a dispenser, by drinking it, or with /effect
[player] was killed by even more magic
[player] was killed by [player/mob] using magic
[player] was killed by [player/mob] using [weapon]
Caused by witches, guardians, evokers, ranged attacks by the ender dragon and kills using a splash potion
death.attack.magic.player
Untranslated death message.[2]
A glitched death message happens when the player is attacked by a non-magical mob, then killed by magic.
May happen if the player gets shot with a tipped arrow of Harming.
Starving
[player] starved to death
Caused if hunger bar is at 0 and the resulting hunger damage leads to death. This can occur only in hard or hardcore
[player] starved to death whilst fighting [player/mob]
Suffocation
[player] suffocated in a wall
Happens if the player took suffocation damage from their head being in a block.
[player] suffocated in a wall whilst fighting [player/mob]
[player] was squished too much
Happens if the player took suffocation damage from the maxEntityCramming gamerule.
[player] was squashed by [player/mob]
Sweet Berry Bushes
[player] was poked to death by a sweet berry bush
[player] was poked to death by a sweet berry bush whilst trying to escape [player/mob]
Caused if a player moves around in a sweet berry bush.
Thorns enchantment
[player] was killed trying to hurt [player/mob]
Can be caused by a mob if it is able to wear armor, and can also occur while fighting guardians
[player] was killed by [weapon] trying to hurt [player/mob]
Trident
[player] was impaled by [player/mob]
[player] was impaled by [player/mob] with [weapon]
Void
[player] fell out of the world
Also shown if the player is killed by the /kill command. ‌[Java Edition only]
[player] didn't want to live in the same world as [player/mob]‌[Java Edition only]
Appears when a mob/player pushes someone into the void or when a player uses /kill after being attacked by a mob or player.
Wither effect
[player] withered away
[player] withered away whilst fighting [player/mob]
Other
[player] was pummeled by [player/mob]
This message would appear when killed by a snowball, an egg, a wither skull or an ender pearl
This message is not possible to see in the case of snowballs, chicken eggs, and ender pearls, because they do not cause damage to players hit by them.
This message appears only when the wither kills a player with a wither skull's impact.
[player] was pummeled by [player/mob] using [weapon]
[player] died
Appears when /kill is used on named mob/player.‌[Bedrock Edition only]
Appears only in the en_us.json file.‌[Java Edition only]
[player] died because of [player/mob]
Appears only in the en_us.json file.‌[Java Edition only]
[player] was slain by small fireball
Appears when the player died from a fire charge shot from a dispenser.
Actually, message was too long to deliver fully. Sorry! Here's stripped version: [message]
Appears if the death message is too long to fit in chat.[verify]
*/
