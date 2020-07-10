module.exports = {
    name: 'link',
    description: "sends list of url's to different Monster Club related things",
    execute(message, args){
        const Discord = require('discord.js');
        
        if(args[0] === 'mc' || 'monsterclub'){
            const mcEmbed = new Discord.MessageEmbed()
                .setTitle('The Monster Club Corporation')
                .setURL('https://www.themonsterclubcorporation.com/')
                .setColor(0xcb0063);
                message.channel.send(mcEmbed);
        } 
        else if(args[0] === 'shop' || 'store') {
            const storeEmbed = new Discord.MessageEmbed()
                .setTitle('The Monster Club Corporation Shop')
                .setURL('https://www.themonsterclubcorporation.com/shop/')
                .setColor(0xcb0063);
                message.channel.send(StoreEmbed);
        }
        else if(args[0] === 'merch'){
            const merchEmbed = new Discord.MessageEmbed()
                .setTitle('Monster Club Merchandise - Pharoah Tom')
                .setURL('https://pharoahtomscollections.com/collections/monster-club')
                .setColor(0xcb0063);
                message.channel.send(merchEmbed);
        }
    }
}
