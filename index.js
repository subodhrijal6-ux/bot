const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'babal.play.hosting',
  port: 25988,
  username: 'MyBot123',
  auth: 'offline'
})

bot.on('spawn', () => {
  console.log('Bot connected!')
})

bot.on('error', console.log)
