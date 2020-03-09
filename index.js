const Discord = require("discord.js");
const bot = new Discord.Client();




const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmZxSA.nV3IOqulLp_rn8uZdVnPc1jCtLQ';

var PREFIX = '?';

bot.on('ready', () =>{
    console.log('This Bot Is Online!')
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(' ');
    
    switch(args[0]){

        case "memes":
                        
                    
                    
                        message.channel.send("My Favourite Memes!\n Number 1: Rick Roll \n Number 2: Friday \n Number 3: Doge \n Number 4: Crab Rave \n And Last But Not Least: Robbie Rotton!") * 3
                    break;
                    
                    case 'clear':
                    if(!args[1]) return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134" ')
                    message.channel.bulkDelete(args[1]);
                    
                    break;
                    case   'help':
                     message.reply(":mailbox_with_mail:. Whoooosh! I Sent You All The Wadia Command In A DM! :smile:")   
                     message.author.send("All Commands; '?about' - learn about Wadia,\n '?info version' - Stay up to date of what version Wadia Is on!,\n '?clear [amount]' - Delete conversations with Wadia!, \n '?memes' - Everyone deserves an opinion, listen to what memes Wadia LOVES!, \n 'who [person in server]' - Get To Know The Members with the who command!")

                        break;

                        case 'clear':
                            if(!args[1]) return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134" ')
                            message.channel.bulkDelete(args[1]);
                            
                            break;


        
        
       
         
                        
    
    }
})






bot.login(process.env.token);
