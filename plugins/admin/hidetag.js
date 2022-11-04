exports.run = {
   usage: ['hidetag'],
   use: 'text',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      participants
   }) => {
client.sendReact(m.chat, '😡', m.key)
      let users = participants.map(u => u.id)
      await client.reply(m.chat, text, null, {
         mentions: users
      })
   },
   admin: true,
   group: true
}
