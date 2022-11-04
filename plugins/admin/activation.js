exports.run = {
   usage: ['mute'],
   use: '0 / 1',
   category: 'admin tools',
   async: async (m, {
      args,
      isPrefix,
      command
   }) => {
      let gc = global.db.groups[m.chat]
      let opt = [0, 1]
      let rows = [{
         title: 'True',
         rowId: `${isPrefix + command} 1`,
         description: ``
      }, {
         title: 'False',
         rowId: `${isPrefix + command} 0`,
         description: ``
      }]
      if (!args || !args[0] || !opt.includes(parseInt(args[0]))) return client.sendList(m.chat, '', ` *Current status* : [ ${gc.mute ? 'True' : 'False'} ]`, '', 'Tap!', [{ rows }], m)
      if (parseInt(args[0]) == 1) {
         if (gc.mute) return client.reply(m.chat, Func.texted('bold', `Previously muted.`), m)
         gc.mute = true
         client.reply(m.chat, Func.texted('bold', `Bot has gone offline in this group. It will not respond to any commands. 🗿 -_-`), m)
      } else if (parseInt(args[0]) == 0) {
         if (!gc.mute) return client.reply(m.chat, Func.texted('bold', ` Previously unmuted.`), m)
         gc.mute = false
         client.reply(m.chat, Func.texted('bold', `Bot is back online in this group. 🗿 -_-`), m)
      }
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}
