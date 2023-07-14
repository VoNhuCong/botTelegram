console.log("telegram bot");
// Require the node-telegram-bot-api module
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("polling_error", console.log);

bot.onText(/^\/start/, function (msg, match) {
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    };
    bot.sendMessage(msg.chat.id, "How can we contact you?", option).then(() => {
        bot.once("contact", (msg) => {
            var option = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
                    "keyboard": [[{
                        text: "My location",
                        request_location: true
                    }], ["Cancel"]]
                }
            };
        })
    })

});

bot.on('message', (message) => {
    let chat_id = message.from.id;
    if (message.contact) {
        // import to db include: chat_id and phone_number
        console.log("get contact: ", message.contact.phone_number);
    }
    console.log("get contact: ", message);
});

function sendMessage(chat_id, message) {
    bot.sendMessage(chat_id, message);
}

module.exports = {
    sendMessage
}