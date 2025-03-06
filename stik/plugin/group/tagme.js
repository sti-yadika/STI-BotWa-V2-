module.exports= {
type: 'group',
command: ['tagme'],
operate: async (context) => {
const { zanspiw, m, q:text, reply } = context;

let orang = (await zanspiw.groupMetadata(m.chat)).participants.map(u => u.jid)
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
 zanspiw.sendMessage(m.chat,{text: tag},{ contextInfo: { mentionedJid }},{quoted:m})
}
 }