const Discord = require('discord.js');
const bot = new Discord.Client();
//const commando = require('discord.js-commando');
//const bot = new commando.Client();

//bot.registry.registerGroup('random', 'Random');
//bot.registry.registerGroup('dm');
//bot.registry.registerDefaults();
//bot.registry.registerCommandsIn(__dirname + "/commands");
bot.on('ready', () => {
    console.log('Rias-Senpai');
    bot.user.setGame('High School DxD');
    bot.channels.get('382448682596958209')/*.sendMessage('wait fuck what the fuck is this')*/;
    bot.users.get('190344356614373376')/*.sendMessage('https://www.youtube.com/user/PJGoomba')*/;
    bot.users.get('272981100312264714').sendMessage('lolipop bot');
});


bot.on('message', (message) => {
    var late = Math.floor(Math.random() * 14) + 1;

    if(message.content == 'rias') {
        message.channel.startTyping(true);
        setTimeout(function(){
            message.channel.sendMessage('gremory');
        }, 2000)
        message.channel.stopTyping(true);
    }
    
    if(message.content =='boi this boi jitter') {
        bot.users.get('190344356614373376').sendMessage('I\'m gonna suck your c0ck :3');
    }
    
    if(message.content.toLocaleLowerCase().startsWith("i love rias")) {
        if(late === 14) {
            setTimeout(function() {
                message.author.send('just wanted to let you know ily too bby, sorry for the late response >.<');
            }, 60000);
            
        } else {
            setTimeout(function() {
                message.author.send('ily too bby');
            }, Math.floor(Math.random() * 4000));
        }
        
        
    }

    if(message.content.toLocaleLowerCase().startsWith('r!insult')) {
        var insult = Math.floor(Math.random() * 6) + 1;
            
            if(insult === 1) {
                message.channel.sendMessage(message.author + ' ' + 'likes flat chested lolis.');
            }

            if(insult === 2) {
                message.channel.sendMessage(message.author + ' ' + 'likes NTR.');
            }

            if(insult === 3) {
                message.channel.sendMessage(message.author + ' ' + 'likes Akeno.');
            }

            if(insult === 4) {
                message.channel.sendMessage(message.author + ' ' + 'likes the "old man" and "ugly bastard" tags.');
            }
            if(insult === 5) {
                message.channel.sendMessage(message.author + ' ' + 'is a piece of weeaboo garbage that talks to waifu bots all day.');
            }
            if(insult === 6) {
                message.channel.sendMessage(message.author + ' ' + 'prefers Emilia over Rem. Trash.');
            }
        
    }

    if (message.channel.type === "dm" && message.author.id != bot.user.id && message.author.id !== "356876780054773777") {
        bot.users.get("356876780054773777").send("", {
            "embed": {
                description: message.content,
                timestamp: message.createdAt,
                footer: {
                    text: message.author.id
                },
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }
        });

}
});



bot.login('MzgyNDQ3MjA2OTQ4NTM2MzIw.DPWrEw.W-0rURFy_p_fGxkd89QyrmfIw0k');