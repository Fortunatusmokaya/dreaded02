exports.run = {
   usage: ['afk'],
   use: 'reason (optional)',
   category: 'group',
   async: async (m, {
      client,
      text
   }) => {
      try {
client.sendReact(m.chat, '😡', m.key)
         let user = global.db.users[m.sender]
         user.afk = +new Date
         user.afkReason = text
         let tag = m.sender.split`@` [0]
         return client.reply(m.chat, Func.texted('bold', `🤫 @${tag} Is now in AFK!`), m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   group: true
}
