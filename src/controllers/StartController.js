'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

module.exports = class StartController extends TelegramBaseController {
  startHandler ($) {
    $.sendMessage('Hi, my name is Hoppy Frog')
  }

  get routes () {
    return {
      'start': 'startHandler'
    }
  }
}
