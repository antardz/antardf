const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561336954327662606")
setInterval(function() {
channel.send(`antar antar antar antar antar`);
}, 30)
})

client.login(process.env.BOT_TOKEN);