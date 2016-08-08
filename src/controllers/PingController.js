'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

module.exports = class PingController extends TelegramBaseController {
  pingHandler ($) {
    $.sendMessage('pong')
  }

  get routes () {
    return {
      'ping': 'pingHandler'
    }
  }
}
