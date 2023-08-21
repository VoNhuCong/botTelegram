# botTelegram

Nhận tin nhắn của người nhắn sau đó gửi lại một phản hồi

# to get Acces token

find BotFather and chat
/newbot
enter your chat_bot_name

# to runing

cmd: nodemon ./src/index.js

# to build docker

Docker build -t bottelegram .

# to run docker

docker run -dp 127.0.0.1:3000:3000 bottelegram

# to run with volume

docker run -v myvolume:/usr/src/app/resources -p 3000:3000 telegrambot

docker run -v D:/workspace:/usr/src/app/resources -p 3000:3000 telegrambot
