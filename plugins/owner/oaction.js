exports.run = {
   usage: ['dismiss', 'waste', 'admin@'],
   use: 'mention or reply',
   category: 'owner tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      let number = m.quoted ? m.quoted.sender : m.mentionedJid.length != 0 ? m.mentionedJid[0] : isNaN(text) ? text.replace(/[()+\s-]/g, '') + '@s.whatsapp.net' : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `Mention or reply target`), m)
      if (await client.onWhatsApp(number).length == 0) return client.reply(m.chat, Func.texted('bold', ` Number not registered on WhatsApp.`), m)
      try {
         let mention = number.replace(/@.+/g, '')
         let users = m.isGroup ? participants.find(u => u.id == number) : {}
         if (!users) return client.reply(m.chat, Func.texted('bold', ` @${mention} is not in group. 🗿`), m)
         if (number  == client.user.id.split(':')[0] + 's.whatsapp.net') return client.reply(m.chat, Func.texted('bold', `??`), m)
         if (command == 'waste') return client.groupParticipantsUpdate(m.chat, [number], 'remove')
         if (command == 'dismiss') return client.groupParticipantsUpdate(m.chat, [number], 'demote')
         if (command == 'admin@') return client.groupParticipantsUpdate(m.chat, [number], 'promote')
      } catch (e) {
      	console.log(e)
      	client.reply(m.chat, global.status.error, m)
      }
   },
   group: true,
   owner: true,
   admin: false,
   botAdmin: true
}
