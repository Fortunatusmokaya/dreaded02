exports.run = {
   usage: ['demote', 'kick', 'promote'],
   use: 'mention or reply',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
client.sendReact(m.chat, '😡', m.key)
      let number = m.quoted ? m.quoted.sender : m.mentionedJid.length != 0 ? m.mentionedJid[0] : isNaN(text) ? text.replace(/[()+\s-]/g, '') + '@s.whatsapp.net' : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `Tag or mention someone. 🗿 -_-`), m)
      if (await client.onWhatsApp(number).length == 0) return client.reply(m.chat, Func.texted('bold', ` Number given is not registered on WhatsApp.`), m)
      try {
         let mention = number.replace(/@.+/g, '')
         let users = m.isGroup ? participants.find(u => u.id == number) : {}
         if (!users) return client.reply(m.chat, Func.texted('bold', ` @${mention} is not in this group. 🗿 -_-`), m)
         if (number  == client.user.id.split(':')[0] + 's.whatsapp.net') return client.reply(m.chat, Func.texted('bold', `??`), m)
         if (command == 'kick') return client.groupParticipantsUpdate(m.chat, [number], 'remove')
         if (command == 'demote') return client.groupParticipantsUpdate(m.chat, [number], 'demote')
         if (command == 'promote') return client.groupParticipantsUpdate(m.chat, [number], 'promote')
      } catch (e) {
      	console.log(e)
      	client.reply(m.chat, global.status.error, m)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}
