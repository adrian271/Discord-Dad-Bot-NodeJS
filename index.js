'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
console.clear();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  console.log(`${message.author.tag} said: "${message.content}"`);

  if (message.content === 'ping') {
    message.channel.send('pong');
  }

  if (message.content.includes('nerd')) {
    if (message.author.bot) return;
    message.channel.send(
      'Did someone say nerd? You must be referring to Jillian or Olivia 🤓'
    );
  }
});
client.login('');
