const Discord = require("discord.js");
const bot = new Discord.Client();




const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmZp8Q.ECBh6X3F1Zi9-LX_Y14AY5U13FU';

var PREFIX = '?';



bot.on('ready', () =>{
    console.log('This Bot Is Online!')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(' ');

    switch(args[0]){



         case  'about':
            message.reply("Hi, I'm Wadia V3 Created By Diamondz! Type '?help' For A List Of Commands! ")
                break;

                case 'fuck':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;

                    case 'FUCK':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;

                    case 'shit':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'SHIT':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'nigga':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'NIGGA':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'nigger':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'NIGGER':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'dick':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'DICK':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'dickhead':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'DICKHEAD':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'gay':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'GAY':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'yoyo':
                    message.channel.send("/tts Do Not Use That Profanity!")

                    break;
                    case 'fuck':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;
                    case 'fuck':
                    message.reply("Do Not Use That Profanity!  https://tenor.com/view/watch-your-profanity-funny-gif-5600117")

                    break;


                case 'CLEAR':
                    if(!args[1]) return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134"')
                    message.channel.bulkDelete(args[1]);
                    break;

                    case 'info':
                        if(args[1] === '?version'){
                            message.author.send('Version 1.0.5')
                        }
                else {

                    message.reply("Invalid Args!")
                    }

                    case 'who':
                    if (args[1] === "wave"){
                        message.channel.send({embed: {

                            title: "Wave",
                            url: "https://www.google.co.uk/?gws_rd=ssl",
                            color: "#ff0000",
                            description: "Wave Is Liam!",
                            name: "Fields",
                                Value: "Bitch"
                            }})}
                                break;

                                case 'who':
                                    if (args[1] === "diamondz"){

                                    message.channel.send({embed: {
                                        title: "Diamondz",
                                        url: "https://www.google.co.uk/?gws_rd=ssl",
                                        color: "#ff0000",
                                        description: "Diamondz Is Jayden"



                                    }})}
                                    break;

                                    case 'who':
                                        if (args[1] === "wadia"){
                                        message.channel.send({embed: {
                                            title: "Wadia",
                                            url: "https://www.google.co.uk/?gws_rd=ssl",
                                            color: "#000000",
                                            description: "Wadia Was Created By Diamondz On The 08/03/2020"

                                        }})}
                                        break;








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
                    case 'embed':
                        message.channel.sendEmbed


    }
                    })



bot.login(process.env.token);
