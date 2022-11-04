exports.run = {
   usage: ['bc', 'bcgc'],
   use: 'text or reply media',
   category: 'owner',
   async: async (m, {
      client,
      text,
      command
   }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         let chatJid = Object.entries(global.db.chats).filter(([jid, _]) => jid.endsWith('.net')).map(([jid, _]) => jid)
         let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
         let groupJid = await (await groupList()).map(v => v.id)
         const id = command == 'bc' ? chatJid : groupJid
         if (id.length == 0) return client.reply(m.chat, Func.texted('bold', ` Error, ID does not exist.`), m)
         if (text) {
            for (let jid of id) {
               await Func.delay(1500)
               await client.sendMessageModify(jid, text, null, {
                  title: 'Dreaded Bot (🗿)',
                  thumbnail: await Func.fetchBuffer('https://telegra.ph/file/f3dc45f92333124b5da2f.jpg'),
                  largeThumb: true,
                  url: 'https://github.com/Fortunatusmokaya',
                  mentionedJid: command == 'bcgc' ? await (await client.groupMetadata(jid)).participants.map(v => v.id) : []
               })
            }
            client.reply(m.chat, Func.texted('bold', `Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else if (/image\/(webp)/.test(mime)) {
            for (let jid of id) {
               await Func.delay(1500)
               let media = await q.download()
               await client.sendSticker(jid, media, null, {
                  packname: global.db.setting.sk_pack,
                  author: global.db.setting.sk_author,
                  mentions: command == 'bcgc' ? await (await client.groupMetadata(jid)).participants.map(v => v.id) : []
               })
            }
            client.reply(m.chat, Func.texted('bold', `Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else if (/video|image\/(jpe?g|png)/.test(mime)) {
            for (let jid of id) {
               await Func.delay(1500)
               let media = await q.download()
               await client.sendFile(jid, media, '', q.text ? '📢 B R O A D C A S T\n\n' + q.text : '', null, null,
                  command == 'bcgc' ? {
                     contextInfo: {
                        mentionedJid: await (await client.groupMetadata(jid)).participants.map(v => v.id)
                     }
                  } : {})
            }
            client.reply(m.chat, Func.texted('bold', ` Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else client.reply(m.chat, Func.texted('bold', ` Media / text not found or media is not supported.`), m)
      } catch (e) {
         client.reply(m.chat, Func.texted('bold', ` Media / text not found or media is not supported.`), m)
      }
   },
   owner: true
}
