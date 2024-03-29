const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");


module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red_light)
        .setTitle("User Info")
        .setThumbnail(bot.user.displayAvatarURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setFooter(`Requested by ${message.author.username}`, message.guild.iconURL);

    message.channel.send({ embed: uEmbed });
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "!userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui", "userinfo"]
}
