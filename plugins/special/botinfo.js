exports.run = {
   usage: ['tnc', 'info'],
   hidden: ['botinfo'],
   category: 'special',
   async: async (m, {
      client,
      args,
      command
   }) => {
      if (command == 'info' || command == 'botinfo') return client.reply(m.chat, info(), m)
      if (command == 'tnc') return client.sendMessage(m.chat, tnc(), m, {
         largeThumb: false
      })
   },
   error: false,
   cache: true,
}

let info = () => {
   return `➠ User, group, and chat data will be deleted automatically if no activity is detected for 7 days (database cleaning) hence this bot does not in any way collect or interfere with user data.

➠ Bot must be ADMIN in the groups added else it will leave. 

➠ Don't spam, pause each command usage for ${global.cooldown} seconds.

➠ Do not make voice or video calls. if you do it will be blocked.

➠ Don't be toxic to bots because you will get sanctions in the form of being banned and blocked Thus some country codes are automatically blocked.

➠ Don't search & create adult content (+18), eg: make stickers from nude photos or search for nudes and related adult content.

➠ Bot or it's owner are not responsible for the data sent by the bot,-

➠ Spammers will be permanently banned.

➠ If bot does not respond then number may have been banned or there are other technical issues and errors.

➠ All Terms & Conditions are subject to change at any time without prior notice.

This bot was created and developed with the purpose of enjoying WhatsApp as well as *learning*.
   
It uses Baileys library and Heroku server. Database was handled via MongoDb and Heroku Postgress`
}

