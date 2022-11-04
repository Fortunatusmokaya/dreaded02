exports.run = {
   usage: ['botstat'],
   hidden: ['stat'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      try {
         let users = Object.entries(global.db.users).length
         let chats = Object.keys(global.db.chats).filter(v => v.endsWith('.net')).length
         let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
         let groups = await (await groupList()).map(v => v.id).length
         let banned = Object.entries(global.db.users).filter(([jid, data]) => data.banned).length
         let premium = Object.entries(global.db.users).filter(([jid, data]) => data.premium).length
         class Hit extends Array {
            total(key) {
               return this.reduce((a, b) => a + (b[key] || 0), 0)
            }
         }
         let sum = new Hit(...Object.values(global.db.statistic))
         let hitstat = sum.total('hitstat') != 0 ? sum.total('hitstat') : 0
         const stats = {
            users,
            chats,
            groups,
            mimic: (global.db.setting.mimic).length,
            banned,
            premium,
            hitstat,
            uptime: Func.toTime(process.uptime() * 1000)
         }
         const system = global.db.setting
         client.sendMessageModify(m.chat, statistic(stats, system), m, {
            ads: false,
            title: 'Dreaded Bot System',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/3d70075e5b5209995157f.jpg')
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   owner: true,
   cache: true,
   location: __filename
}

const statistic = (stats, system) => {
   return `🚦 *B O T - S T A T U S*

	◦  ${Func.texted('bold', Func.formatNumber(stats.groups))} Groups Joined
	◦  ${Func.texted('bold', Func.formatNumber(stats.chats))} Personal Chats
	◦  ${Func.texted('bold', Func.formatNumber(stats.users))} Users In Database
	◦  ${Func.texted('bold', Func.formatNumber(stats.banned))} Users Banned
	◦  ${Func.texted('bold', Func.formatNumber(stats.mimic))} Mimics Target
	◦  ${Func.texted('bold', Func.formatNumber(stats.premium))} Premium Users
	◦  ${Func.texted('bold', Func.formatNumber(stats.hitstat))} Commands Hit
	◦  Runtime : ${Func.texted('bold', stats.uptime)}

 📽️ *S Y S T E M*

	◦  ${Func.texted('bold', system.autodownload ? '[ ✅ ]' : '[ ❌ ]')}  Auto Download
	◦  ${Func.texted('bold', system.chatbot ? '[ ✅ ]' : '[ ❌ ]')}  Chat AI
	◦  ${Func.texted('bold', system.debug ? '[ ✅ ]' : '[ ❌ ]')}  Debug Mode
	◦  ${Func.texted('bold', system.groupmode ? '[ ✅ ]' : '[ ❌ ]')}  Group Mode
	◦  ${Func.texted('bold', system.online ? '[ ✅ ]' : '[ ❌ ]')}  Always Online
	◦  ${Func.texted('bold', system.self ? '[ ✅ ]' : '[ ❌ ]')}  Self Mode
	◦  Prefix : ${Func.texted('bold', system.multiprefix ? '( ' + system.prefix.map(v => v).join(' ') + ' )' : '( ' + system.onlyprefix + ' )')}

${global.footer}`
}
