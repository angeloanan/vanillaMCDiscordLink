<!-- <p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p> -->

<h3 align="center">Vanilla Minecraft - Discord Link</h3>

<!-- <div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div> -->

---

<p align="center">Connecting Discord chat with vanilla Minecraft server.<br></p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project links a Discord channel with a vanilla Minecraft server.  
This project runs the server as a child process, collects messages by player and sends them to Discord. It also sends messages from Discord to Minecraft players by using `/tellraw`!

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You need to rename the server .jar file to `server.jar` (TODO: Customizability)  
You will also need a Discord Bot which have access to the selected channel with Webhook ready.

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
