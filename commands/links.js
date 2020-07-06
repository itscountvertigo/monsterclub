module.exports = {
    name: 'link',
    description: "sends list of url's to different Monster Club related things",
    execute(message, args){
        const Discord = require('discord.js');
        
        switch(args[0]){
            case 'mc' || 'monsterclub':
                const embed = new Discord.MessageEmbed()
                .setTitle('The Monster Club Corporation')
                .setURL('https://www.themonsterclubcorporation.com/')
                .setColor(0xcb0063);
                message.channel.send(embed);
                break;
            
            case 'shop' || 'store':
                const embed = new Discord.MessageEmbed()
                .setTitle('The Monster Club Corporation Shop')
                .setURL('https://www.themonsterclubcorporation.com/shop/')
                .setColor(0xcb0063);
                message.channel.send(embed);
                break;

            case 'merch':
                const embed = new Discord.MessageEmbed()
                .setTitle('Monster Club Merchandise - Pharoah Tom')
                .setURL('https://pharoahtomscollections.com/collections/monster-club')
                .setColor(0xcb0063);
                message.channel.send(embed);
                break;
        }
    }
}