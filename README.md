<!-- <p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p> -->

<h3 align="center">Vanilla Minecraft - Discord Link</h3>

<div align="center">

  [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fangeloanan%2FvanillaMCDiscordLink.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fangeloanan%2FvanillaMCDiscordLink?ref=badge_shield)
  [![GitHub Issues](https://img.shields.io/github/issues/angeloanan/vanillaMCDiscordLink.svg)](https://github.com/angeloanan/vanillaMCDiscordLink/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/angeloanan/vanillaMCDiscordLink.svg)](https://github.com/angeloanan/vanillaMCDiscordLink/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">Connecting Discord chat with vanilla Minecraft server.<br></p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../master/TODO.md)
- [Contributing](../master/CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project links a Discord channel with a vanilla Minecraft server. Every time an in-game user chatted, the chat will be sent to the selected Discord Channel. And vice versa, every time a Discord user send a message on the selected channel, the message will be sent into the game by using `/tellraw`!

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have NodeJS installed (use latest if possible)  
You will also need a Discord Bot which have access to the selected channel with Webhook ready.  
You need to rename the server .jar file to `server.jar` (TODO: Customizability)  

### Installing

1. Clone the repository

```bash
> git clone https://github.com/angeloanan/vanillaMCDiscordLink.git
```

2. Install dependencies

```bash
> npm install
```

3. Edit the config (Rename `sampleConfig.json` to `config.json`)

4. Run it

```bash
> node .
```

## 🎈 Usage <a name="usage"></a>

Sending a message in the Minecraft server will send a message on Discord.  
Vice versa, sending a message on Discord will send a message in the Minecraft server!

## 🚀 Deployment <a name = "deployment"></a>

### UNTESTED / BE CAREFUL

To deploy this project, simply set up a process manager that runs the app.

Example: Using PM2, you will run

```sh
> pm2 start .
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Discord.js](https://discord.js.org/) - Discord API

## ✍️ Authors <a name = "authors"></a>

- [@angeloanan](https://github.com/angeloanan) - Idea & Initial work

See also the list of [contributors](https://github.com/angeloanan/vanillaMCDiscordLink/graphs/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) plugin for reference
