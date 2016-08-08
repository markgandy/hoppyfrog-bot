'use strict'

const Telegram = require('telegram-node-bot')
const tg = new Telegram.Telegram(process.env.HOPPYFROG_BOT_TOKEN)
const PingController = require('./controllers/PingController')
const StartController = require('./controllers/StartController')

tg.router
    .when(['ping'], new PingController())
    .when(['start'], new StartController())
