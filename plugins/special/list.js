const moment = require('moment-timezone')
moment.tz.setDefault('Africa/Nairobi').locale('id')
exports.run = {
   usage: ['list'],
   category: 'special',
   async: async (m, {
      client,
      args,
      isPrefix,
      isOwner
   }) => {
      try {
         let rows = [{
            title: 'BANNED USERS',
            rowId: `${isPrefix}list 1`,
            description: ``
         }, {
            title: 'COMMANDS IN ERROR',
            rowId: `${isPrefix}list 2`,
            description: ``
         }, {
            title: 'MIMIC',
            rowId: `${isPrefix}list 3`,
            description: ``
         }, {
            title: 'INACTIVE PLUGINS',
            rowId: `${isPrefix}list 4`,
            description: ``
         }, {
            title: 'PREMIUM USERS',
            rowId: `${isPrefix}list 5`,
            description: ``
         }, {
            title: 'PRIVATE CHAT',
            rowId: `${isPrefix}list 6`,
            description: ``
         }]
         if (!args || !args[0]) return client.sendList(m.chat, '', '🥷 Choose data type you want to see.', '', 'Tap!', [{
            rows
         }], m)
         if (args[0] == 1) {
            const data = Object.entries(global.db.users).filter(([_, data]) => data.banned)
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `🟥  *B A N - L I S T*\n\n`
            teks += data.map(([jid, _]) => '	◦ @' + jid.replace(/@.+/, '')).join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         } else if (args[0] == 2) {
            const data = global.db.setting.error
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `🚫  *E R R L I S T*\n\n`
            teks += data.map(cmd => '	◦ ' + isPrefix + cmd).join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         } else if (args[0] == 3) {
            const data = global.db.setting.mimic
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `🎊  *M I C L I S T*\n\n`
            teks += data.map(jid => '	◦ @' + jid.replace(/@.+/, '')).join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         } else if (args[0] == 4) {
            const data = global.db.setting.pluginDisable
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `乂  *P L U G L I S T*\n\n`
            teks += data.map(plugin => '	◦ ' + plugin + '.js').join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         } else if (args[0] == 5) {
            const data = Object.entries(global.db.users).filter(([_, data]) => data.premium)
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `🏌️ *P R E M L I S T*\n\n`
            teks += data.map(([jid, data]) => '	◦ @' + jid.replace(/@.+/, '') + '\n	 *Limit* : ' + Func.formatNumber(data.limit)).join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         } else if (args[0] == 6) {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            const data = Object.entries(global.db.chats).filter(([jid, _]) => jid.endsWith('.net'))
            if (data.length == 0) return client.reply(m.chat, Func.texted('bold', `🟥 Empty data.`), m)
            let teks = `✍️  *C H A T L I S T*\n\n`
            teks += data.sort((a, b) => b[1].lastseen - a[1].lastseen).map(([jid, data]) => '	◦ @' + jid.replace(/@.+/, '') + '\n	     *Chat* : ' + Func.formatNumber(data.chat) + '\n	     *Lastchat* : ' + moment(data.lastseen).format('DD/MM/YY HH:mm:ss')).join('\n') + '\n\n'
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               title: 'Dreaded-bot (🤖)',
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d6dab955fbaa42fce2280.jpg')
            })
         }
      } catch (e) {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}
