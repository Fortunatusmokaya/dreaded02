exports.run = {
   usage: ['everyone'],
   hidden: ['tagall'],
   use: 'text (optional)',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      participants
   }) => {
      try {
client.sendReact(m.chat, '😡', m.key)
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Hello everyone, admin has tagged you in ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.reply(m.chat, `🗣️ *HELLO EVERYONE*\n\n*“${message}”*\n${readmore}\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   admin: true,
   group: true
}
