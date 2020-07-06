module.exports = {
    name: 'help',
    description: "tells user the available commands",
    execute(message, args){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField("!card [card number (eg 'S0-01')]", 'Gives information on specific card (name, type, rock/paper/scissors, how much power, how much it can stack, etc.). It only works if the S is uppercase.')
        .addField('!help or !commands', 'Shows available commands.')
        .addField('!link [shop/store, mc/monsterclub, OR merch] or !url [shop/store, mc/monsterclub, OR merch]', 'Pick between shop/store, mc/monsterclub, or merch. Will answer with link there.')

        .setColor(0xcb0063)

        message.channel.send(embed);
    }
}