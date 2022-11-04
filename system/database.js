module.exports = (m) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.users[m.sender]
   if (user) {
      if (!isNumber(user.afk)) user.afk = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!('banned' in user)) user.banned = false
      if (!isNumber(user.banTemp)) user.banTemp = 0
      if (!isNumber(user.banTimes)) user.banTimes = 0
      if (!isNumber(user.limit)) user.limit = global.limit
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.spam)) user.spam = 0
      if (!isNumber(user.warning)) user.warning = 0
   } else {
      global.db.users[m.sender] = {
     	afk: -1,
         afkReason: '',
         banned: false,
         banTemp: 0,
         banTimes: 0,
         limit: global.limit,
         premium: false,
         expired: 0,
         lastseen: 0,
         hit: 0,
         spam: 0,
         warning: 0
      }
   }

   if (m.isGroup) {
      let group = global.db.groups[m.chat]
      if (group) {
         if (!isNumber(group.activity)) group.activity = 0
         if (!('autoread' in group)) group.autoread = false
         if (!('antidelete' in group)) group.antidelete = true
         if (!('antilink' in group)) group.antilink = true
         if (!('antivirtex' in group)) group.antivirtex = true
         if (!('filter' in group)) group.filter = true
         if (!('left' in group)) group.left = false
         if (!('localonly' in group)) group.localonly = true
         if (!('mute' in group)) group.mute = false
         if (!('member' in group)) group.member = {}
         if (!('text_left' in group)) group.text_left = ''
         if (!('text_welcome' in group)) group.text_welcome = ''
         if (!('welcome' in group)) group.welcome = false
         if (!isNumber(group.expired)) group.expired = 0
         if (!('stay' in group)) group.stay = false
      } else {
         global.db.groups[m.chat] = {
            activity: 0,
            autoread: false,
            antidelete: true,
            antilink: true,
            antivirtex: true,
            filter: true,
            left: false,
            localonly: true,
            mute: false,
            member: {},
            text_left: '',
            text_welcome: '',
            welcome: false,
            expired: 0,
            stay: false
         }
      }
   }

   let chat = global.db.chats[m.chat]
   if (chat) {
      if (!isNumber(chat.chat)) chat.chat = 0
      if (!isNumber(chat.lastchat)) chat.lastchat = 0
      if (!isNumber(chat.command)) chat.command = 0
   } else {
      global.db.chats[m.chat] = {
         chat: 0,
         lastchat: 0,
         command: 0
      }
   }

   let setting = global.db.setting
   if (setting) {
  	if (!('autodownload' in setting)) setting.autodownload = true
  	if (!('debug' in setting)) setting.debug = false
      if (!('chatbot' in setting)) setting.chatbot = true
      if (!('error' in setting)) setting.error = []
      if (!('pluginDisable' in setting)) setting.pluginDisable = []
      if (!('groupmode' in setting)) setting.groupmode = false
      if (!('sk_pack' in setting)) setting.sk_pack = 'Fortunatus'
      if (!('sk_author' in setting)) setting.sk_author = 'Dreaded 🚦'
      if (!('self' in setting)) setting.self = false
      if (!('mimic' in setting)) setting.mimic = []
      if (!('multiprefix' in setting)) setting.multiprefix = true
      if (!('prefix' in setting)) setting.prefix = ['.', '/', '!', '#']
      if (!('toxic' in setting)) setting.toxic = ["ass", "asshole", "cock", "fuck", "pussy", "dinywa", "mkundu", "kuma", "bastard", "threesome", "foursome", "porn", "pornhub", "xxx", "xnxx", "xhamster", "blowjob", "handjob", "doggystyle", "malaya", "dick", "divk", "pu**y", "idiot", "motherfucker", "mbwa", "bitch", "fucked", "gay", "lesbian", "butt"]
      if (!('online' in setting)) setting.online = true
      if (!('onlyprefix' in setting)) setting.onlyprefix = '+'
      if (!('owners' in setting)) setting.owners = ['254114018035', '']
      if (!('msg' in setting)) setting.msg = '🚦 This is an automated system (Dreaded Bot) that accepts below commands and presents information through a WhatsApp Chat.\n\n◦ *Database handled through* : PostgreSQL and MONGODB\n◦ *Bot Library* : Baileys v4.3.0\n◦ *Terminal/Server* : Termux and Heroku\n◦ *Source* : https://github.com/Fortunatusmokaya\n\nIf you find an error contact the owner.'
      if (!isNumber(setting.menuStyle)) setting.menuStyle = 1
      if (!('cover' in setting)) setting.cover = 'https://telegra.ph/file/f3dc45f92333124b5da2f.jpg'
   } else {
      global.db.setting = {
         autodownload: false,
         chatbot: true,
         debug: false,
         error: [],
         pluginDisable: [],
         groupmode: false,
         sk_pack: 'Fortunatus',
         sk_author: 'Dreaded 🚦',
         self: false,
         mimic: [],
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ass", "asshole", "cock", "fuck", "pussy", "dinywa", "mkundu", "kuma", "bastard", "threesome", "foursome", "porn", "pornhub", "xxx", "xnxx", "xhamster", "blowjob", "handjob", "doggystyle", "malaya", "dick", "divk", "pu**y", "idiot", "motherfucker", "mbwa", "bitch", "fucked", "gay", "lesbian", "butt"],
         online: true,
         onlyprefix: '+',
         owners: ['254114018035', ''],
         msg: '🚦 This is an automated system (Dreaded Bot) that accepts below commands and presents information through a WhatsApp Chat.\n\n◦ *Database handled through* : PostgreSQL and MONGODB\n◦ *Bot Library* : Baileys v4.3.0\n◦ *Terminal/Server* : Termux and Heroku\n◦ *Source* : https://github.com/Fortunatusmokaya\n\nIf you find an error the owner.',
         menuStyle: 1,
         cover: 'https://telegra.ph/file/f3dc45f92333124b5da2f.jpg'
      }
   }
}
