const moment = require('moment-timezone')
moment.tz.setDefault('Africa/Nairobi').locale('id')
exports.run = {
   usage: ['groups'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
      let groups = await groupList()
      let rows = []
      for (let i = 0; i < groups.length; i++) {
         if (groups[i].id in global.db.groups) {
            let v = global.db.groups[groups[i].id]
            rows.push({
               title: groups[i].subject,
               rowId: `${isPrefix}gc ${groups[i].id}`,
               description: `[ ${groups[i].participants.length} | ${(v.mute ? 'OFF' : 'ON')} | ${moment(v.activity).format('DD/MM/YY HH:mm:ss')} ]`
            })
         } else global.db.groups[groups[i].id] = {
            activity: 0,
            autoread: true,
            antidelete: true,
            antilink: true,
            antivirtex: true,
            filter: true,
            left: false,
            localonly: false,
            mute: false,
            member: {},
            text_left: '',
            text_welcome: '',
            welcome: false,
            expired: 0,
            stay: false
         }
      }
      client.sendList(m.chat, '', `Bot has joined to ${groups.length} groups. 📝`, '', 'Tap to see!', [{
         rows
      }], m)
   },
   cache: true,
   location: __filename
}
