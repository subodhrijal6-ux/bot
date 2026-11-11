const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP',
  port: 25565,
  username: 'MyBot123',
  auth: 'offline'
})

bot.on('spawn', () => {
  console.log('Bot connected!')
})

bot.on('error', console.log)
