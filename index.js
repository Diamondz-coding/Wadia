const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmarTQ.TurUIci06Lju-ovxz9HTB88YxbY';

var PREFIX = '?';
bot.on('ready', () =>{
  console.log('This Bot Is Online!')
bot.on('message', message=>{
  let args = message.content.substring(PREFIX.length).split(' '); x
  switch(args[0]){

  case 'clear':
  if(!args[1]) {
    return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134" ')
  }
       if(args[1]){
       message.channel.bulkDelete(args[1]);
     }
  break;

  case "roll":
  var result = Math.floor(Math.random() * 8);
  if(!args[1]){
     message.reply("What Do You Want Me To Roll I Dont Read Minds! :triumph:")
  }
  if(args[1] === "dice")
  {
    message.reply(result)
  }
  case "about":

if(!args[1])
{
  message.reply("Who Do You Want To Know About?")
}
  break;

  case "hello":
       message.reply("Hello My Friend!")
  break;

}    }) })

  bot.login(process.env.token);
