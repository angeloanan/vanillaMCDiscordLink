/**
 * A regex for Minecraft server stdout, exporting the time, the logging level and the server message
 * @type {RegExp}
 */
exports.lineParser = /\[[\d:]+\] \[([^/]+)\/([^\]]+)\]: ([\S ]+)/

/**
 * A regex for detecting if a server message is a player logging in
 * @type {RegExp}
 */
exports.loginParser = /([\w]+)\[[\d./:]+\] logged in with entity id \d+ at \([\d.,\- ]+\)/

/**
 * A regex for detecting if a server message is a player logging out
 * @type {RegExp}
 */
exports.logoutParser = /([\w]+) left the game/

/**
 * A regex for detecting if a server message is a dying player
 */
exports.deathParser = /([A-Za-z]+ (?:was|walked|drowned|suffocated|experienced|removed|blew|fell|went|burned|tried|discovered|got|starved|fell|pummeled|died|withered) ?[\S ]*)/ // https://minecraft.gamepedia.com/Health

/**
 * A regex for detecting if a server message is a disconnected player
 * @type {RegExp}
 */
exports.lostConnectionParser = /([\S]+) lost connection: [\S ]+/

/**
 * A regex for detecting if a server message is a message sent by the player
 * @type {RegExp}
 */
exports.messageParser = /<([\w]+)> ([\S\t ]*)/
