const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options')


const token = '8966990126:AAEqehfyPLePamCHWNxgOO1LOa6gVEo3dxw';

const bot = new TelegramApi(token, {
    polling: true
});

const chats = {}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'},{text: '2', callback_data: '2'},{text: '3', callback_data: '3'}],
            [{text: '4', callback_data: '4'},{text: '5', callback_data: '5'},{text: '6', callback_data: '6'}],
            [{text: '7', callback_data: '7'},{text: '8', callback_data: '8'},{text: '9', callback_data: '9'}],
            [{text: '0', callback_data: '0'}]
        ]
    })
}

const againOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Грати ще раз!', callback_data: '/again'}],

        ]
    })
}

const startGame = async (chatId) => {
     await bot.sendMessage(chatId, 'Я загадую цифру від 0 до 9, а тобі потрібно відгати її!')
        const randomNumber = Math.floor(Math.random() * 10)
        chats[chatId] = randomNumber
        await bot.sendMessage(chatId, 'Відгадай', gameOptions)
}

const start = () => {
    bot.setMyCommands([
    {command: '/start', description: 'Початкове вітання'},
    {command: '/info', description: 'Отримати інформацію про користувача'},
    {command: '/game', description: 'Гра "Вгадай цифру!"'},
])


bot.on('message', async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id

    if(text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
          return bot.sendMessage(chatId, `Welcome to Yura Zhukevych Channel`) 
    }
    if(text === '/info') {
        return bot.sendMessage(chatId, `Your name ${msg.from.first_name} ${msg.from.last_name}`)
    }
    if(text === '/game') {
        return startGame(chatId)
    }
    return bot.sendMessage(chatId, 'Я тебе не розумію, спробуй ще раз!')
    
});
bot.on('callback_query', msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === '/again') {
        return startGame(chatId)
    }

    if(data === chats[chatId]) {
        return bot.sendMessage(chatId, `Вітаю, ти відгадав цифру ${chats[chatId]}`, againOptions)
    } else {
        return bot.sendMessage(chatId, `Нажаль ти не відгадав, бот загадав цифру ${chats[chatId]}`, againOptions)
    }
})
}

start()
