const { Client, Intents, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const prefix = config.bot.prefix;
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
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

  if (cmd == `${prefix}embed`) {
    const myEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("That's description")
      .setTitle("That's title")
      .setFooter(
        "That's footer",
        "https://yt3.ggpht.com/ytc/AKedOLRU-jr1r3QcPbiUn6Cu5_vReMAtf0VySaojH91veg=s900-c-k-c0x00ffffff-no-rj"
      )
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRU-jr1r3QcPbiUn6Cu5_vReMAtf0VySaojH91veg=s900-c-k-c0x00ffffff-no-rj"
      )
      .setImage(
        "https://yt3.ggpht.com/ytc/AKedOLRU-jr1r3QcPbiUn6Cu5_vReMAtf0VySaojH91veg=s900-c-k-c0x00ffffff-no-rj"
      )
      .setAuthor(
        "That's author",
        "https://yt3.ggpht.com/ytc/AKedOLRU-jr1r3QcPbiUn6Cu5_vReMAtf0VySaojH91veg=s900-c-k-c0x00ffffff-no-rj",
        "https://www.youtube.com/c/codewilliams"
      )
      .addField("Field Name", "Field Value")
      .addField("Field 2", "Field Value 2", true);
    const myEmbed2 = new MessageEmbed().setDescription("that's 2 embed");
    message.channel.send({ content: "Salam", embeds: [myEmbed, myEmbed2] });
  }
});

bot.login(config.bot.token);
