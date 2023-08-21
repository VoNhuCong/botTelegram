const fs = require("fs");
const filePath = "./resources/data.txt";

console.log('Bot listening');

// Require the node-telegram-bot-api module
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (message) => {
    let chat_id = message.from.id;
    console.log("check chat_id: ", chat_id);
    writeStringTofile("xin chao, toi la Vo Nhu Cong");
    bot.sendMessage(chat_id, "xin chao, toi la Vo Nhu Cong");
});

let writeStringTofile = function (text) {
    fs.writeFile(filePath, text, (err) => {
        if (err) {
            console.log("File written pheeu");
            console.error(err);
        } else {
            console.log("File written successfully.");
        }
    });
}