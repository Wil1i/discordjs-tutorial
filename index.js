const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

// username = > testBot
// tag => testBot#2232

bot.on("ready", () => {
  console.log(`Bot ${bot.user.tag} is now online`);
});

bot.on("messageCreate", (message) => {
  if (message.author.bot || !message.content.startsWith(config.bot.prefix))
    return;

  const messageArry = message.content.split(" ");
  const cmd = messageArry[0].toLowerCase();

  if (cmd.startsWith(`${config.bot.prefix}youtube`)) {
    message.channel.send(
      `${message.author} https://www.youtube.com/c/codewilliams`
    );
  } else if (cmd.startsWith(`${config.bot.prefix}insta`)) {
    message.channel.send(
      `${message.author} https://www.instagram.com/shayan._.williams`
    );
  }
});

bot.login(config.bot.token);
