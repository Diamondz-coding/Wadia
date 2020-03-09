const Discord = require("discord.js");
const bot = new Discord.Client();






const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmZxSA.nV3IOqulLp_rn8uZdVnPc1jCtLQ';

var PREFIX = '?';

bot.on('ready', () =>{
    console.log('This Bot Is Online!')
})

bot.on('message', message=>{ // allows bot to read any messages amde by people
    
    let args = message.content.substring(PREFIX.length).split(' '); // defies the length of the prefix
    
    switch(args[0]){

        // Start of 'Fun commands':

        case "memes":
                        
                    
                    
                        message.channel.send("My Favourite Memes!\n Number 1: Rick Roll \n Number 2: Friday \n Number 3: Doge \n Number 4: Crab Rave \n And Last But Not Least: Robbie Rotton!") * 3
                    break;
                    
                    case 'CLEAR':
                    if(!args[1]) return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134" ')
                    message.channel.bulkDelete(args[1]);
                    
                    break;
                    
                

                        case 'clear':
                            if(!args[1]) return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134" ')
                            message.channel.bulkDelete(args[1]);
                            
                            break;

                            case "roll":
                                
                            
                            var numbers = [1, 2, 3, 4, 5, 6, 7]
                            var dice = Math.floor(Math.random() * numbers.length)
                            
                                


                                
                                    if(args[1] === "dice"){
                                    message.author(dice)
                                    }
                                    if(!args[1]){ 
                                        
                                        message.reply("What Do You Want Me To Roll; I Cant Read Minds! :triumph:")
                                    }
                                    
                                
                             

                        



        
        
       
         
                        
    
    }
})






bot.login(process.env.token);
