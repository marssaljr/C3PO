'use strict';
//
import runCommand from './accepted-commands';
const { Client } = require('discord.js');
//
const token = "TOKEN_IRADO_AQUI_JAAAJ";
const client = new Client();
try { 
  client.login(token);
  }
catch {
  console.error('TOKEN_INVALID, maybe you should try without .env ;>)');
}
//
client.on('ready', () => {
  console.log('[Ok] - Read...');
});
client.on ('message', (message: any) =>  {
  const user = message.author.username;
  const server = message.channel.guild.name;
  const region = message.channel.guild.region;
  const msg = message.content;
  console.log(`${user} [${server} - ${region}] : ${msg}`)
  
  try {
	  runCommand(message)
  }
  catch (err) {
    console.log(err)
  }
});