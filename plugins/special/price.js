exports.run = {
   usage: ['premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Contact Owner to give you a premium plan for free, send *${isPrefix}owner* to get contact.`, m)
   },
   error: false,
   cache: true,
   location: __filename
}
