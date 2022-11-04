exports.run = {
   usage: ['runtime'],
   hidden: ['run', 'active', 'alive'],
   category: 'special',
   async: async (m, {
      client
   }) => {
       client.sendReact(m.chat, '😡', m.key)
      let _uptime = process.uptime() * 1000
      let uptime = Func.toTime(_uptime)
      client.reply(m.chat, Func.texted('bold', `Bot Active Always 🗿:  ${uptime} `), m)
   },
   error: false
}
