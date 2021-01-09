"use strict";
const Discord = require("discord.js");
const client = new Discord.Client();

const smudgePhotos = [
  "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/61065002_697175840685735_4212031425359961145_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=mZZyiBob-gIAX8sNlCH&tp=1&oh=7e71e3568861838692ab294b0dc75030&oe=6022A568",
  "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/67321024_2469250949960964_1243076453009857475_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=FG31m2KLXZ4AX-hIGSW&tp=1&oh=ea24f956a97a9df6070b82fe3ee56001&oe=6021B426",
  "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/125199884_201615981370451_2923961995956763516_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=ydDtTXarTn0AX_aP-gP&tp=1&oh=cff0aa2429839d06cb4fc6cbefc1bffe&oe=6022631C",
  "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/81468910_513500579284947_1350290838638585959_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=r4Z0x43Za5gAX-DJi3i&tp=1&oh=f68603711da49f6d70c83a2486940c1d&oe=60215DC3",
  "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/60528227_841641446201578_2709185304126345950_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=UQX6N2uB3W8AX8ZjpG6&tp=1&oh=2e9286aa9a0d95e739fe22cd0d82c94e&oe=6024C0AA",
];

console.clear();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  console.log(`${message.author.tag} said: "${message.content}"`);

  if (message.content === "ping") {
    message.channel.send("pong");
  }

  if (message.content.toLowerCase().includes("smudge")) {
    let photo = Math.floor(Math.random() * smudgePhotos.length);
    message.channel.send(smudgePhotos[photo]);
  }

  if (message.content.includes("nerd")) {
    if (message.author.bot) return;
    message.channel.send(
      "Did someone say nerd? You must be referring to Jillian or Olivia 🤓"
    );
  }
});
client.login(process.env.DISCORD_DAD_BOT);
