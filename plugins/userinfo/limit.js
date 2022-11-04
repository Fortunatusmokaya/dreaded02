exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
   }) => {
      let user = global.db.users[m.sender]
      if (user.limit < 1) return client.reply(m.chat, `🚩 Your bot usage has reached the limit and will be reset at 00.00\n\nTo get more limits, contact owner to add you to a premium plan! Send *${isPrefix}owner*`, m)
      client.reply(m.chat, `🎊 Limit : [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nTo get more limits contact owner to add you to a premium plan! Send *${isPrefix}owner*` : ''}`, m)
   },
   error: false
}
