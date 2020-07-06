module.exports = {
    name: 'card',
    description: "card lookup command",
    execute(message, args){
        const fs = require('fs');
        const rawdata = fs.readFileSync(__dirname + '/cards.json');
        const cards = JSON.parse(rawdata)
        const Discord = require('discord.js')

        if(!cards[args[0]]){
            message.channel.send('Card is not recognised. (note that the bot uses only accepts an uppercase S. Use !help for info');
        }
        else {
            //message.channel.send('**' + args[0] + '**: ' + cards[args[0]].name + '\n' +'' + cards[args[0]].rps);
            const embed = new Discord.MessageEmbed()
            .setTitle(args[0] + ': ' + cards[args[0]].name)
            .addField('Type:', cards[args[0]].type + " card")
            .addField('Rock/Paper/Scissors: ', cards[args[0]].rps)
            .addField('Power:', cards[args[0]].power)
            .addField('Max power stack:', cards[args[0]].stack)
            .setColor(0xcb0063)
            message.channel.send(embed)
        }
    }
};