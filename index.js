//discord const
const Discord = require('discord.js');
const client = new Discord.Client();

//command files folder setup
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

const prefix = '!'

require('dotenv').config();


client.once('ready', () => {
    console.log('The bot is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'card'){
        client.commands.get('card').execute(message, args);
    } else if (command === 'help' || command === 'commands'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'link' || command === 'url'){
        client.commands.get('link').execute(message, args);
    }
});

client.login(process.env.DISCORD_TOKEN);