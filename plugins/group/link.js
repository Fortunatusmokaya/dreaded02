exports.run = {
   usage: ['link'],
   hidden: ['getlink', 'gclink', 'linkgc', 'invite', 'grouplink', 'linkgroup'],
   category: 'group',
   async: async (m, {
      client
   }) => {
client.sendReact(m.chat, '😡', m.key)
      await client.reply(m.chat, 'https://chat.whatsapp.com/' + (await client.groupInviteCode(m.chat)), m)
   },
   group: true,
   botAdmin: true
}
