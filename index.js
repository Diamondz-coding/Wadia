const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.Xmahdw.hIT3h76npAtvQSVrwGe997qKW_0';

var PREFIX = '?';


bot.on('ready', () =>{
    console.log('This Bot Is Online!')
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(' ');
    
    switch(args[0]){

       

        
}
})
bot.login(process.env.token)