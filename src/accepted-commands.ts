const { MessageEmbed } = require('discord.js');
//
const acceptedCommands: any = {
	ping(message: any) {
		message.channel.send('pong');
	},
	avatar(message: any) {
		message.delete();
		message.reply(message.author.displayAvatarURL());
	},
	today(message: any) {
		message.delete();
		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);
		const timeday = new MessageEmbed()
      .setTitle('Today is')
      .setColor(0xff0000)
      .setDescription(today.toDateString());
    message.channel.send(timeday);
	}
}
//
export default function runCommand (message: any) {
	try {
		const command = message.content
		const mensagem = acceptedCommands[command]
		return mensagem(message)
	}
	catch(err) {
		return err;
	}
}
//
module.exports;