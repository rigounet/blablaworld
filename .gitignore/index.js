const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NDQ3NzA0MTg3OTcxODI5NzYx.DeLcjA.-U3Qek28CospqcPnL9hZsoBkjzw");

client.on("ready", () => {
	console.log("Bot lancé");
});

client.on("ready", () => {
	client.user.setPresence({ game: { name: `en developpement`, type: 0 } });
});

client.on('guildMemberAdd',member => { 
  member.addRole('438317744136388619').catch(console.error);
});

client.on("message", message => {
	if (message.content === "//émojis") {
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
		message.channel.send(emojiList);
	}
	if (message.content === "//co") {
		message.channel.send(`Il y a ${message.guild.members.size} membres ici !`);
	}
});

client.on("ready", () => {
  let channel = client.channels.get('438320073506291713');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
}
});

client.on("message", (message) => {
    if (message.content.startsWith("//ban")) {
    if (message.member.roles.some(r=>["MANAGER", "Administration", "Graphiste"].includes(r.name)) ) { 
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage("Membre bannis :point_right: :dash:");
    } else {
      return message.reply("Tu n'as pas les perms pour ban un membre :stuck_out_tongue_winking_eye:");
    }
    } else if (message.content.startsWith("//kick")) {
    if (message.member.roles.some(r=>["MANAGER", "Administration", "Graphiste"].includes(r.name)) ) { 
      let kickMember = message.guild.member(message.mentions.users.first());
      message.guild.member(kickMember).kick();
      message.channel.sendMessage("Membre kické :point_right: :dash:");
    } else {
      return message.reply("Tu n'as pas les perms pour kick un membre :stuck_out_tongue_winking_eye:");
    }
   }
});

client.on('message', function(message) {
    if (message.content == "//effacer") {
        if (message.member.roles.some(r=>["MANAGER", "Administration", "Graphiste"].includes(r.name)) ) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on("message", (message) => {
  if(message.content.startsWith("//floss")){
        var random = Math.floor(Math.random() * 12) + 1;
            if(random == '1'){
              const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media0.giphy.com/media/l1Kdd0BBLS3uYK9TW/giphy.gif")
              message.channel.send({embed})
            } else if(random == '2'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media3.giphy.com/media/3ohs4ch1PEpGwJTM4M/giphy.gif")
              message.channel.send({embed})
            } else if(random == '3'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media1.giphy.com/media/3op5Txe6mc36sGbwOs/giphy.gif")
              message.channel.send({embed})
            } else if(random == '4'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media3.giphy.com/media/l378wW1RvW91EgFhu/giphy.gif")
              message.channel.send({embed})
            } else if(random == '5'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media3.giphy.com/media/3oFzmquWMZ0BLq6pAk/giphy.gif")
              message.channel.send({embed})
            } else if(random == '6'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media1.tenor.com/images/e8bc98bc96d9028544478b05e78c65d7/tenor.gif")
              message.channel.send({embed})
            } else if(random == '7'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media.giphy.com/media/l46C6d6JaAzE8yDtK/giphy.gif")
              message.channel.send({embed})
            } else if(random == '8'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://78.media.tumblr.com/879be93601f1523fe38433820119d363/tumblr_own8sa01341uj4v06o2_400.gif")
              message.channel.send({embed})
            } else if(random == '9'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://thumbs.gfycat.com/UnsungSoftArmyworm-size_restricted.gif")
              message.channel.send({embed})
            } else if(random == '10'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://thumbs.gfycat.com/BitesizedUnfitElephantseal-size_restricted.gif")
              message.channel.send({embed})
            } else if(random == '11'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media1.tenor.com/images/722b77d2c6a3103b076a33fc6e77a3f8/tenor.gif")
              message.channel.send({embed})
            } else {
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("https://media.tenor.com/images/dd19e7a9eecc27bac5bfdbe053f8a5df/tenor.gif")
              message.channel.send({embed})
            }
}
});

client.on("message", (message) => {
  if(message.content.startsWith("//killfortnite")){
        var random = Math.floor(Math.random() * 7) + 1;
            if(random == '1'){
              const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " et à fait un TOP 1 ***GG*** :gun:")
              .setImage("https://thumbs.gfycat.com/SilentNastyBanteng-max-1mb.gif")
              message.channel.send({embed})
            } else if(random == '2'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://thumbs.gfycat.com/MeanBraveHart-size_restricted.gif")
              message.channel.send({embed})
            } else if(random == '3'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://thumbs.gfycat.com/LameWeeGander-max-1mb.gif")
              message.channel.send({embed})
            } else if(random == '4'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://thumbs.gfycat.com/NewConcernedBlowfish-size_restricted.gif")
              message.channel.send({embed})
            } else if(random == '5'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://i.kinja-img.com/gawker-media/image/upload/s--NMclPJM5--/c_scale,f_auto,fl_progressive,q_80,w_800/qiljzvqzpjcpidnwopgv.gif")
              message.channel.send({embed})
            } else if(random == '6'){
            	 const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://thumbs.gfycat.com/FoolishBewitchedAntbear-max-1mb.gif")
              message.channel.send({embed})
            } else {
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setDescription(":trophy: **" + message.author.username + "** à tué " + message.mentions.users.first() + " :gun:")
              .setImage("https://thumbs.gfycat.com/RealisticIllGadwall-max-1mb.gif")
              message.channel.send({embed})
            }
}
});

client.on("message", (message) => {
  if(message.content.startsWith("//worms")){
        var random = Math.floor(Math.random() * 8) + 1;
            if(random == '1'){
              const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("https://m.popkey.co/c27b93/De0KV.gif")
              message.channel.send({embed})
            } else if(random == '2'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("https://i.imgur.com/BVvxt.gif")
              message.channel.send({embed})
            } else if(random == '3'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("http://static.tumblr.com/qbypfuo/BMAm9f2a7/preist_doing_the_worm.gif")
              message.channel.send({embed})
            } else if(random == '4'){
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("http://media.tumblr.com/tumblr_ljc40skBlw1qdsxzr.gif")
              message.channel.send({embed})
            } else if(random == '5'){
               const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("http://gif-finder.com/wp-content/uploads/2015/10/Worm-dance.gif")
              message.channel.send({embed})
            } else if(random == '6'){
               const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6Ap6GfNBCxxfvXEc6L4veH94rfypkjL-tYW0spOekTpbm47Z")
              message.channel.send({embed})
            } else if(random == '7'){
               const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Worms ! :bug:`)
              .setImage("https://benignhumor.files.wordpress.com/2013/06/worm.gif")
              message.channel.send({embed})
            } else {
                const embed = new Discord.RichEmbed()
              .setColor(0x4c5e9b)
              .setTitle(`${message.author.username} à dansé le Floss ! :tada:`)
              .setImage("http://fat.gfycat.com/YawningInsidiousCapeghostfrog.gif")
              message.channel.send({embed})
            }
}
});
