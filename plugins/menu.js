exports.run = {
   usage: ['menu', 'help', 'h'],
   hidden: ['menutype'],
   async: async (m, {
      client,
      text,
      isPrefix
   }) => {
      try {
     client.sendReact(m.chat, '😡', m.key)
      let captions = ` 🚦  B O T- I N F O\n\n ◦ This is an Automated System (Dreaded WhatsApp Bot) that is meant to carry out and listen to the commands listed below and present information directly on WhatsApp chat.\n\n🚦 N O T E \n\n ◦ You can chat with the bot in its inbox. Do NOT call or spam the bot to avoid blocking! Some country codes are automatically blocked because of the same! \n\n ◦ Bot will only listen to the below listed commands❗ Unknown commands will not be responded to!
 🥷  U S E R - I N F O
      
  limit 
  me 

 👪   G R O U P

  afk *reason (optional)*
  dp *mention or reply*
  delete *reply chat*
  q *reply chat*
  link
  common *reply user*


 ⚖️ C O N V E R T E R

  sticker *reply media*
  swm *packname | author*
  take *packname | author*
  toimg *reply sticker*
  tomp3 *reply media*
  tovn *reply media*

 🎬 D O W N L O A D E R

  play *query*
  video *query*
  ytmp3 *link*
  ytmp4 *link*

 🖲️ U T I L I T I E S

  pinterest *query*
  calculate
  igstalk *Username* 
  response *link*
  server 
  wallpaper *query*


 🪙 A D M I N - T O O L S

  antidelete *on / off*
  antilink *on / off*
  antivirtex *on / off*
  demote *mention or reply*
  everyone *text (optional)*
  filter *on / off*
  group *open / close*
  hidetag *text*
  kick *mention or reply*
. promote *mention or reply*
  left *on / off*
  localonly *on / off*
  mute *0 / 1*
  setdesc *text*
  setleft *text*
  setname *text*
  setout *text*
  setwelcome *text*
  welcome *on / off*

 👑 O W N E R

  -cmdstic *text / command*
  -mimic *mention or reply*
  -owner *mention or reply*
  -prefix *symbol*
  -prem *mention or reply*
  +cmdstic *text / command*
  +mimic *mention or reply*
  +owner *mention or reply*
  +prefix *symbol*
  +prem *mention or reply*
  autodownload *on / off*
  autoread *on / off*
  backup 
  ban *mention or reply*
  bc *text or reply media*
  bcgc *text or reply media*
  block *mention or reply*
  changename *text*
  chatbot *on / off*
  cmdstic 
  debug *on / off*
  groupmode *on / off*
  join *group link*
  multiprefix *on / off*
  ohidetag *text*
  oleft *on / off*
  omute *0 / 1*
  online *on / off*
  owelcome *on / off*
  plugdis *plugin name*
  plugen *plugin name*
  prefix *symbol*
  reset 
  restart 
  self *on / off*
  setmsg *text*
  setpp *reply photo*
  setwm *packname | author*
  unban *mention or reply*
  unblock *mention or reply*
  update 

 💎 S P E C I A L

  botstat 
  info
  checkapi 
  groups 
  hitdaily 
  hitstat 
  list 
  owner 
  premium 
  runtime
 📝 THANKS - TO
◦ Termux terminal 
◦ Heroku Server
◦ GitHub`
      client.sendMessageModify(m.chat, captions, m, {
               title: 'Dreaded WhatsApp Bot',
               largeThumb: false,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/f3dc45f92333124b5da2f.jpg'),
               url: ''
            })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}
