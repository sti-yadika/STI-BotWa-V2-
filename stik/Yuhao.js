//Hi Guys Gw zanspiw Devoloper Dari Script Yuhao Md yah btw sekedar mengingatkan Script ini free ya su Ga di jual Kalo ada yg jual lapor ke tele t.me/zanspiwxd INFO//
// TERIMAKASIH JUGA KEPADA 
// - Fauzi
// - Rioo
// - Kyuu
// - sanz
// - sanzy
// - Hantu/ghost
// - DAN PENYEDIA REST API 
// - SERTA PARA SUBSCRIBE DAN FOLL SALURAN WHATSAPP KU. 
////////////////////////////////////////////////
//Suport Zanspiw Selalu ya//
//BASEBY:Fauzialifatah//
// SEBELUM JALANKAN SCRIPT NYA KALIAN KE FOLDER /LIB TERUS CARI "ADIWCONFIGJS" DI SITU ADA NOMOR NAH KALIAN GANTI NOMOR ITU, SELESAI CONEK KE WA NANTI KALIAN KE NOMOR YANG KALIAN UBAH TERUS CHAT KE BOT GINI ".setujui" dah bisa digunakan 
//DONE DELETE CREDITS// 
//(ZANSPIW)//

//===================[ TEMPAT MODULE ]=====================\\
require("../settings.js")
const uploadFile = require('../lib/uploadImage')
const { req } = require("al-http-request")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket, jidNormalizedUser } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const { cerpen } = require('../lib/cerpen')
const { Primbon } = require('scrape-primbon')

const primbon = new Primbon()
const didyoumean = require('didyoumean');
const path = require("path");
const similarity = require('similarity');
const cheerio = require('cheerio')
const crypto = require('crypto');
const fetch = require('node-fetch');
const virgam = fs.readFileSync(`./stik/thumnail/hytam.png`);
const stiktm = fs.readFileSync(`./stik/thumnail/thml.jpg`);
let Button = require("../lib/button");
const { konf } = require('../stik/bug/d-bugs')
const { iphone } = require('../stik/bug/iphone')
const { ngazap } = require('../stik/bug/ngazap')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
let btn = new Button();

module.exports = async (zanspiw, m, zanspiwtUpdate) => {
try {
const from = m.key.remoteJid
const body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption: m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage ?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text: "";

async function appenTextMessage(text, zanspiwtUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: zanspiw.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zanspiw.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...zanspiwtUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zanspiw.ev.emit('messages.upsert', msg)
}
//EPHOTO
const FormData = require("form-data");
async function ephoto(url, texk) {
  let form = new FormData
  let gT = await axios.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  })
  let $ = cheerio.load(gT.data)
  let text = texk
  let token = $("input[name=token]").val()
  let build_server = $("input[name=build_server]").val()
  let build_server_id = $("input[name=build_server_id]").val()
  form.append("text[]", text)
  form.append("token", token)
  form.append("build_server", build_server)
  form.append("build_server_id", build_server_id)
  let res = await axios({
    url: url,
    method: "POST",
    data: form,
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"]?.join("; "),
      ...form.getHeaders()
    }
  })
  let $$ = cheerio.load(res.data)
  let json = JSON.parse($$("input[name=form_value_input]").val())
  json["text[]"] = json.text
  delete json.text
  let {
    data
  } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"].join("; ")
    }
  })
  
  return build_server + data.image
}
function monospace(string) {
return '```' + string + '```'
}
//BERITAMENU
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
//==================[ TEMPAT CONST LIB ]=====================\\

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    zanspiw.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    zanspiw.sendText(m.chat, `Jas telah dikirim ke obrolan

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) zanspiw.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) zanspiw.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) zanspiw.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    zanspiw.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /Gunting/i
	    let b = /Batu/i
	    let k = /Kertas/i
	    let reg = /^(Gunting|Batu|Kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih2) zanspiw.sendText(roof.p2, '_Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih) zanspiw.sendText(roof.p, '_ Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    zanspiw.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Tidak sah',
	    '-1': 'Posisi Tidak Valid',
	    0: 'Posisi Tidak Valid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Ketik *surrender* untuk menyerah dan mengaku kalah`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await zanspiw.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await zanspiw.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }
	    zanspiw.caklontong = zanspiw.caklontong ? zanspiw.caklontong : {};
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zanspiw.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}
zanspiw.tebakkalimat = zanspiw.tebakkalimat ? zanspiw.tebakkalimat : {};
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zanspiw.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

//=========================================//
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let foundRoof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender));
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    zanspiw.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    zanspiw.sendText(m.chat, `Jas telah dikirim ke obrolan

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) zanspiw.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) zanspiw.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) zanspiw.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    zanspiw.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /Gunting/i
	    let b = /Batu/i
	    let k = /Kertas/i
	    let reg = /^(Gunting|Batu|Kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih2) zanspiw.sendText(roof.p2, '_Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih) zanspiw.sendText(roof.p, '_ Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    zanspiw.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, color } = require('../lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list');
const { xzeus, experiment1, zcb, rdo, rdo2, dbuz, locl, bounds, bounds2, listr, mbg, caltx, uzc, lza, paym } = require("../src/myfunc");
const { isSetProses, addSetProses, removeSetProses, zanspiwngeSetProses, getTextSetProses } = require('../lib/setproses');
const { isSetDone, addSetDone, removeSetDone, zanspiwngeSetDone, getTextSetDone } = require('../lib/setdone');
    const isPremium = (JSON.parse(fs.readFileSync("./lib/premium.json"))).includes(m.sender) || false
const config = require('../lib/adiwConfig')
const terdaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("../lib/deposit")
const { addCountCmd, getPosiCmdUser, addCountCmdUser } = require('../lib/command')
const zanspiwfeature = () =>{
const data = fs.readFileSync("./stik/Yuhao.js", 'utf-8');
        const caseMatches = data.match(/case\s+['"`]?\w+['"`]?\s*:/g);
     return caseMatches ? caseMatches.length : 0
        }
const { sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22 } = require('../stik/tovn')
//===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('../src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('../src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('../src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('../src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('../src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('../baseoka/rpg.js')
const Reply = async (teks) => {
return zanspiw.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${global.packname}`, 
thumbnailUrl: "https://files.catbox.moe/gk0e3n.png", 
sourceUrl: ,"https://portofoliomannn8124.pages.dev/"
}}}, {quoted: qkontak})
}
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
//========================================================================//
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))

///


const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
let budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (zanspiw.user.id.split(':')[0]+'@s.whatsapp.net' || zanspiw.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await zanspiw.decodeJid(zanspiw.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isUser = terdaftar.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await zanspiw.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//=================[ TEMPAT FUNCTION DATABASE ]====================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));

let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));

const _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
const banned = JSON.parse(fs.readFileSync('./database/banned.json'));
let depositPath = "./stik/deposit/"
const prem = JSON.parse(fs.readFileSync("./lib/premium.json"))
//===================[ TAMPILAN CONSOLE ]=====================\\

if (m.message && m.isGroup) {
console.log(color(`\n========>`, 'cyan'))
console.log(color(`Group Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
} else {
console.log(color(`\n</> Mannn Multi device | by Hymannn </>\n`, 'cyan'))
console.log(color(`Private Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
}

try {
ppuser = await zanspiw.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
zanspiw.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
zanspiw.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

async function downloadMp3 (link) {
try {
zanspiw.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.zanspiw.site/api/download/aio?query=${link}`)
zanspiw.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
zanspiw.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.zanspiw.site/api/download/aio?query=${link}`)
zanspiw.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
}

const sendvn = (teks) => {
zanspiw.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:fkontak})		
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//DELLCASE//
async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Terjadi kesalahan:', err);
          return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error('Terjadi kesalahan saat menulis file:', err);
            return;
          }
          console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
      });
}
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

//=================================================//=
//CONSTNYA EHEM😁

const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('../TextWhatsapp/textban.js')

// TEXT UNBANNED


const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('../TextWhatsapp/textunban.js')

//TEXT UNBAN PREMIUM 

const { textunbanpremv1, textunbanpremv2, textunbanpremv3 } = require('../TextWhatsapp/textunbanprem.js')

const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('../TextWhatsapp/fakechat.js')
//===================[ FUNCTION REPLY ]=====================\\

const reply = (teks) => { 
zanspiw.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": `⪼ Client - MannnMd`,
"body": `Hallo ${pushname}`,
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fs.readFileSync(`./stik/thumnail/fake.jpg`),
"sourceUrl": "https://www.youtube.com/@muhilman03" }}}, { quoted: fkontak }) }

const reply2 = (teks) => {
zanspiw.sendMessage(from, { text : teks }, { quoted : m })
}

    const reply3 = async(teks) => {
 zanspiw.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: global.filename,
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
           jpegThumbnail:'',
            caption: "\n" + teks,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `628974719922@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: global.newsname
        }
    }
}, { quoted: m,ephemeralExpiration: 86400});
}


//==================[ FUNCTION FAKE ]======================\\

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': ''}}}

 const aud = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc","mimetype": "audio/aac","fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=","fileLength": "285473","seconds": 999999999,"caption": `🍷꙰͜͡𝐅𝐚𝐮𝐳𝐢𝐚𝐥𝐢𝐟𝐚𝐭𝐚𝐡💸̷⃨⃛`,"ptt": false,"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=","fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=","directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB","mediaKeyTimestamp": "1632753911"}}}
 
const VQuoted = fs.readFileSync(`./stik/thumnail/fake.jpg`)

const zets = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2024",
      thumbnail: VQuoted,
      itemCount: `0`,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `N-Kiuur ZcoderX`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 99999,
    isForwarded: true
  }
}
//==================[ FUNCTION WAKTU ]======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith(".js")) {
try {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugin.filePath = filePath
plugins.push(plugin)
} catch (error) {
console.error(`Error loading plugin at ${filePath}:`, error)
}}})
}})
return plugins
}

const plugins = loadPlugins(path.resolve(__dirname, "../stik/plugin"))
const context = { zanspiw, m, zanspiwtUpdate, reply, q, command, prefix, args, sender, quoted, isAdmins, groupAdmins, isBotAdmins, groupMetadata, groupName }
let handled = false
for (const plugin of plugins) {
if (plugin.command.includes(command)) {
try {
await plugin.operate(context)
handled = true
} catch (error) {
console.error(`Error executing plugin ${plugin.filePath}:`, error)
}
break
}
}

if (isCmd && !isUser) {
terdaftar.push(sender)
console.log('Menyiapkan database untuk anda')
fs.writeFileSync('./database/user.json', JSON.stringify(terdaftar, null, 2))
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}
global.db = global.db | {}
zanspiw.game = zanspiw.game? zanspiw.game : {}

function saveFishingData() {
  fs.writeFileSync("./database/fishing.json", JSON.stringify(zanspiw.game.ikan, null, 2));
}

// Fungsi untuk memuat data ikan dari file JSON
function loadFishingData() {
  try {
    return JSON.parse(fs.readFileSync("./database/fishing.json", "utf8"));
  } catch {
    return {};
  }
}

class FishingGame {
  constructor(userId) {
    zanspiw.game = zanspiw.game || {};
    zanspiw.game.ikan = zanspiw.game.ikan || loadFishingData();
    if (!zanspiw.game.ikan[userId]) {
      zanspiw.game.ikan[userId] = {
        fishingRod: 1, // Level alat pancing
        skillLevel: "pemula", // Skill level
        money: 0, // Uang awal
        totalFish: 0, // Total ikan yang ditangkap
        inventory: [] // Inventaris ikan
      };
      saveFishingData();
    }
    this.user = zanspiw.game.ikan[userId];
  }

  // Data ikan otomatis 50+ varian
  static generateFish() {
    const rarities = ["common", "uncommon", "rare", "trash"];
    return Array.from({ length: 50 }, (_, i) => ({
      name: `Ikan ${i + 1}`,
      rarity: rarities[Math.floor(Math.random() * rarities.length)],
      price: Math.floor(Math.random() * 200) + 10, // Harga antara 10-200
      sellable: Math.random() > 0.1 // 90% ikan bisa dijual
    }));
  }

  static fishVariants = FishingGame.generateFish();

  // Fungsi memancing
  fish() {
    const { skillLevel, inventory } = this.user;
    const [minChance, maxChance] = {
      pemula: [40, 50],
      biasa: [50, 60],
      pro: [70, 80]
    }[skillLevel];

    const catchChance = Math.random() * 100;
    const successRate = Math.random() * (maxChance - minChance) + minChance;

    if (catchChance <= successRate) {
      const randomFish = FishingGame.fishVariants[Math.floor(Math.random() * FishingGame.fishVariants.length)];
      inventory.push(randomFish);
      this.user.totalFish++;
      saveFishingData();
      return `Berhasil menangkap ${randomFish.name}!`;
    } else {
      return "Tidak ada ikan yang berhasil ditangkap kali ini.";
    }
  }

  // Fungsi jual ikan
  sellFish() {
    let earnings = 0;
    this.user.inventory = this.user.inventory.filter(fish => {
      if (fish.sellable) {
        earnings += fish.price;
        return false; // Hapus dari inventaris
      }
      return true; // Tetap di inventaris
    });

    this.user.money += earnings;
    saveFishingData();
    return earnings > 0
      ? `Berhasil menjual ikan dengan total pendapatan Rp${earnings}.`
      : "Tidak ada ikan yang bisa dijual.";
  }

  // Fungsi beli alat pancing
  buyFishingRod() {
    const rodPrice = 100 * this.user.fishingRod; // Harga meningkat tiap level
    if (this.user.money >= rodPrice) {
      this.user.money -= rodPrice;
      this.user.fishingRod++;
      this.user.skillLevel = this.user.fishingRod >= 3 ? "biasa" : this.user.skillLevel;
      this.user.skillLevel = this.user.fishingRod >= 5 ? "pro" : this.user.skillLevel;
      saveFishingData();
      return `Berhasil membeli alat pancing level ${this.user.fishingRod}.`;
    } else {
      return "Uang tidak cukup untuk membeli alat pancing.";
    }
  }

  // Fungsi cek total tangkapan
  checkTotalFish() {
    return `Total ikan yang ditangkap: ${this.user.totalFish}.`;
  }

  // Fungsi cek inventaris
  checkInventory() {
    const inventoryList = this.user.inventory.map(fish => fish.name).join(", ");
    return `Inventaris: ${inventoryList || "Kosong"}.\nUang: Rp${this.user.money}.`;
  }
}
function saveShootingData() {
  fs.writeFileSync("./database/shooting.json", JSON.stringify(zanspiw.game.shoot, null, 2));
}

// Fungsi untuk memuat data sesi dari file JSON
function loadShootingData() {
  try {
    return JSON.parse(fs.readFileSync("./database/shooting.json", "utf8"));
  } catch {
    return {};
  }
}

class ShootingGame {
  constructor() {
    zanspiw.game = zanspiw.game || {};
    zanspiw.game.shoot = zanspiw.game.shoot || loadShootingData();
  }

  // Tambah pemain ke sesi
  addPlayer(chatId, playerId) {
    if (!zanspiw.game.shoot[chatId]) {
      zanspiw.game.shoot[chatId] = {
        players: {}, // Data pemain dalam sesi
        createdAt: Date.now(), // Waktu sesi dibuat
      };
    }

    const session = zanspiw.game.shoot[chatId];
    if (Object.keys(session.players).length >= 2) {
      return `Sesi di chat ini sudah penuh. Tunggu permainan selesai!`;
    }

    if (!session.players[playerId]) {
      session.players[playerId] = {
        health: 100, // Nyawa awal
        ammo: 5, // Amunisi awal
      };
      saveShootingData();
      return `Player ${playerId} telah masuk ke sesi permainan di chat ini!`;
    }

    return `Player ${playerId} sudah bergabung dalam sesi ini!`;
  }

  // Fungsi menembak
  shoot(chatId, attackerId, targetId) {
    const session = zanspiw.game.shoot[chatId];
    if (!session) return `Belum ada sesi permainan di chat ini!`;
    if (!session.players[attackerId]) return `Player ${attackerId} belum masuk sesi permainan di chat ini!`;
    if (!session.players[targetId]) return `Player ${targetId} tidak ditemukan dalam sesi ini!`;

    const attacker = session.players[attackerId];
    const target = session.players[targetId];

    if (attacker.ammo <= 0) return `Player ${attackerId} tidak memiliki peluru!`;

    attacker.ammo -= 1;
    target.health -= 20;

    if (target.health <= 0) {
      delete session.players[targetId];
      saveShootingData();
      return `Player ${targetId} telah kalah!`;
    }

    saveShootingData();
    return `Player ${attackerId} berhasil menembak Player ${targetId}! Sisa nyawa ${targetId}: ${target.health}`;
  }

  // Fungsi isi ulang peluru
  reload(chatId, playerId) {
    const session = zanspiw.game.shoot[chatId];
    if (!session) return `Belum ada sesi permainan di chat ini!`;
    if (!session.players[playerId]) return `Player ${playerId} belum masuk sesi permainan di chat ini!`;

    session.players[playerId].ammo += 3;
    saveShootingData();
    return `Player ${playerId} telah mengisi ulang peluru! Total peluru: ${session.players[playerId].ammo}`;
  }

  // Cek status pemain
  checkStatus(chatId, playerId) {
    const session = zanspiw.game.shoot[chatId];
    if (!session) return `Belum ada sesi permainan di chat ini!`;
    if (!session.players[playerId]) return `Player ${playerId} belum masuk sesi permainan di chat ini!`;

    const { health, ammo } = session.players[playerId];
    return `Status Player ${playerId}: Nyawa ${health}, Peluru ${ammo}`;
  }

  // Bersihkan sesi lama (lebih dari 2 hari)
  cleanupSessions() {
    const now = Date.now();
    for (const chatId in zanspiw.game.shoot) {
      const session = zanspiw.game.shoot[chatId];
      if (now - session.createdAt > 48 * 60 * 60 * 1000) { // 2 hari dalam milidetik
        delete zanspiw.game.shoot[chatId];
      }
    }
    saveShootingData();
  }
}

function saveDungeonState() {
    fs.writeFileSync("./database/dungeon.json", JSON.stringify(zanspiw.game.dungeon, null, 2));
}

function loadDungeonState() {
    try {
        return JSON.parse(fs.readFileSync("./database/dungeon.json", "utf8"));
    } catch {
        return {};
    }
}

class IsekaiDungeon {
    constructor() {
        zanspiw.game = zanspiw.game || {};
        zanspiw.game.dungeon = loadDungeonState();
    }

    startDungeon(chatId) {
        if (!zanspiw.game.dungeon[chatId]) {
            zanspiw.game.dungeon[chatId] = {
                players: {},
                level: 1,
                bossDefeated: false,
                createdAt: Date.now(),
            };
            saveDungeonState();
        }
        return `Petualangan dimulai! Dungeon level 1 telah dibuka. Ketik *.joindungeon* untuk bergabung.`;
    }

    joinDungeon(chatId, playerId) {
        const session = zanspiw.game.dungeon[chatId];
        if (!session) return `Belum ada dungeon yang dimulai di chat ini! Ketik *.mulaidungeon* untuk memulai.`;

        if (session.players[playerId]) return "Kamu sudah bergabung! Ketik .exploredungeon untuk melanjutkan.";

        zanspiw.game.dungeon[chatId].players[playerId] = {
            health: 100,
            attack: 10,
            inventory: [],
        };
        saveDungeonState();
        return `Player ${playerId} telah bergabung ke dungeon! Ketik *.exploredungeon* untuk memulai petualangan.`;
    }

    explore(chatId, playerId) {
        const session = zanspiw.game.dungeon[chatId];
        if (!session) return `Belum ada dungeon yang dimulai di chat ini! Ketik *.mulaidungeon* untuk memulai.`;

        const player = session.players[playerId];
        if (!player) return `Kamu belum bergabung dalam dungeon ini! Ketik *.joindungeon* untuk bergabung.`;

        const encounter = Math.random();
        if (encounter < 0.5) {
            return this.fightMonster(chatId, playerId);
        } else {
            const loot = `Harta Karun Level ${session.level}`;
            player.inventory.push(loot);
            saveDungeonState();
            return `Kamu menemukan ${loot}! Ketik *.exploredungeon* untuk melanjutkan.`;
        }
    }

    fightMonster(chatId, playerId) {
        const session = zanspiw.game.dungeon[chatId];
        const player = session.players[playerId];

        const monster = {
            name: `Monster Level ${session.level}`,
            health: session.level * 20,
            attack: session.level * 5,
        };

        player.health -= monster.attack;
        monster.health -= player.attack;

        if (player.health <= 0) {
            delete session.players[playerId];
            saveDungeonState();
            return `Kamu dikalahkan oleh ${monster.name}! Sesi dungeon untukmu telah berakhir.`;
        }

        if (monster.health <= 0) {
            session.level += 1;
            saveDungeonState();
            if (session.level > 5) {
                session.bossDefeated = true;
                delete zanspiw.game.dungeon[chatId];
                saveDungeonState();
                return `Kamu telah mengalahkan bos dungeon dan menyelesaikan petualangan!`;
            }
            return `Kamu mengalahkan ${monster.name}! Dungeon naik ke level ${session.level}. Ketik *.exploredungeon* untuk melanjutkan.`;
        }

        saveDungeonState();
        return `Kamu bertarung melawan ${monster.name}! Sisa nyawamu: ${player.health}, sisa nyawa monster: ${monster.health}.`;
    }

    checkStatus(chatId, playerId) {
        const session = zanspiw.game.dungeon[chatId];
        if (!session) return `Belum ada dungeon yang dimulai di chat ini! Ketik *.mulaidungeon* untuk memulai.`;

        const player = session.players[playerId];
        if (!player) return `Kamu belum bergabung dalam dungeon ini! Ketik *.joindungeon* untuk bergabung.`;

        return `Statusmu: Nyawa ${player.health}, Serangan ${player.attack}. Harta: ${player.inventory.join(", ") || "Tidak ada"}.`;
    }

    cleanupSessions() {
        const now = Date.now();
        for (const chatId in zanspiw.game.dungeon) {
            const session = zanspiw.game.dungeon[chatId];
            if (now - session.createdAt > 24 * 60 * 60 * 1000) { // 1 hari
                delete zanspiw.game.dungeon[chatId];
            }
        }
        saveDungeonState();
    }
}

const tankdb = './database/db_tank.json';

function tank_readDB() {
    if (!fs.existsSync(tankdb)) {
        fs.writeFileSync(tankdb, JSON.stringify({ sessions: {} }, null, 2));
    }
    return JSON.parse(fs.readFileSync(tankdb, 'utf8'));
}

function tank_writeDB(data) {
    fs.writeFileSync(tankdb, JSON.stringify(data, null, 2));
}

class IsekaiTankBattle {
    constructor() {
        zanspiw.game = zanspiw.game || {};
        zanspiw.game.tank = tank_readDB();
    }

    startBattle(chatId) {
        const db = zanspiw.game.tank;
        db.sessions = db.sessions || {};

        if (!db.sessions[chatId]) {
            db.sessions[chatId] = {
                players: {},
                enemy: { health: 100, attack: 20 },
                round: 1,
                createdAt: Date.now(),
            };
            tank_writeDB(db);
        }

        return `Pertempuran tank dimulai! Musuh pertama muncul. Ketik *.joinperangtank* untuk bergabung.`;
    }

    joinBattle(chatId, playerId) {
        const db = zanspiw.game.tank;
        const session = db.sessions[chatId];

        if (!session) {
            return `Belum ada pertempuran di chat ini! Ketik *mulaitank* untuk memulai.`;
        }

        if (session.players[playerId]) {
            return `Kamu sudah bergabung! Ketik *serangtank* untuk melawan musuh.`;
        }

        session.players[playerId] = {
            tank: {
                health: 100,
                attack: 15,
                level: 1,
            },
            score: 0,
        };

        tank_writeDB(db);
        return `Player ${playerId} bergabung dengan tank dasar! Ketik *aksitank attack* untuk melawan musuh.`;
    }

    action(chatId, playerId, actionType) {
        const db = zanspiw.game.tank;
        const session = db.sessions[chatId];

        if (!session) {
            return `Belum ada pertempuran di chat ini! Ketik *.mulaitank* untuk memulai.`;
        }

        const player = session.players[playerId];
        if (!player) {
            return `Kamu belum bergabung! Ketik *.joinperangtank* untuk bergabung.`;
        }

        const { enemy } = session;

        switch (actionType) {
            case 'attack': {
                enemy.health -= player.tank.attack;
                player.tank.health -= enemy.attack;

                if (enemy.health <= 0) {
                    session.round += 1;
                    session.enemy = {
                        health: session.round * 100,
                        attack: session.round * 10,
                    };
                    player.score += 10;

                    tank_writeDB(db);
                    return `Kamu mengalahkan musuh! Ronde ${session.round} dimulai. Musuh baru muncul dengan ${session.enemy.health} nyawa.`;
                }

                if (player.tank.health <= 0) {
                    delete session.players[playerId];
                    tank_writeDB(db);
                    return `Tankmu hancur! Kamu keluar dari pertempuran.`;
                }

                tank_writeDB(db);
                return `Kamu menyerang musuh. Sisa nyawa musuh: ${enemy.health}. Musuh menyerangmu. Sisa nyawamu: ${player.tank.health}.`;
            }

            case 'repair': {
                if (player.tank.health < 100) {
                    player.tank.health += 20;
                    if (player.tank.health > 100) player.tank.health = 100;

                    tank_writeDB(db);
                    return `Tankmu diperbaiki. Sisa nyawamu: ${player.tank.health}.`;
                }

                return `Nyawa tankmu sudah penuh!`;
            }

            case 'upgrade': {
                if (player.score >= 20) {
                    player.score -= 20;
                    player.tank.attack += 5;
                    player.tank.level += 1;

                    tank_writeDB(db);
                    return `Tankmu ditingkatkan ke level ${player.tank.level}! Seranganmu sekarang: ${player.tank.attack}.`;
                }

                return `Skormu tidak cukup untuk upgrade! Butuh 20 skor.`;
            }

            default:
                return `Aksi tidak valid! Gunakan *aksitank attack*, *aksitank repair*, atau *aksitank upgrade*.`;
        }
    }

    checkStatus(chatId, playerId) {
        const db = zanspiw.game.tank;
        const session = db.sessions[chatId];

        if (!session) {
            return `Belum ada pertempuran di chat ini! Ketik *.mulaitank* untuk memulai.`;
        }

        const player = session.players[playerId];
        if (!player) {
            return `Kamu belum bergabung! Ketik *.joinperangtank* untuk bergabung.`;
        }

        return `Status Tankmu: 
- Nyawa: ${player.tank.health}
- Serangan: ${player.tank.attack}
- Level: ${player.tank.level}
- Skor: ${player.score}`;
    }

    cleanupSessions() {
        const now = Date.now();
        const db = zanspiw.game.tank;

        for (const chatId in db.sessions) {
            const session = db.sessions[chatId];
            if (now - session.createdAt > 24 * 60 * 60 * 1000) {
                delete db.sessions[chatId];
            }
        }

        tank_writeDB(db);
    }
}

async function imgurscr(teks) {
  const hasilna = []

  try {
    for (let halaman = 1; hasilna.length < 30; halaman++) {
      const url = `https://imgur.com/search?q=${encodeURIComponent(teks)}&page=${halaman}`
      
      const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
      })
      const $ = cheerio.load(data)

      $('a').each((i, el) => {
        const href = $(el).attr('href')
        if (href && href.startsWith('/')) {
          const imgurl = 'https://imgur.com' + href
          hasilna.push({
            link: imgurl
          })
        }
      })
      
      if (hasilna.length >= 30) {
        break
      }
    }

    const hasill = []
    for (const hasil of hasilna) {
      const { data: data_halaman } = await axios.get(hasil.link, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
      })
      const $$ = cheerio.load(data_halaman)
      const imgurll = $$('meta[property="og:image"]').attr('content')
      const desk = $$('meta[name="description"]').attr('content')

      if (imgurll && desk && !imgurll.includes('logo-')) {
        hasill.push({
          link: imgurll,
          desk: desk
        })
      }
      if (hasill.length >= 30) {
        break
      }
    }

    return hasill
  } catch (e) {
    console.error(e)
  }
}

const googlesearch = async (query, maxPages = 3) => {
  try {
    const results = [];
    const currentTime = new Date().toISOString();

    for (let i = 0; i < maxPages; i++) {
      const start = i * 10;
      const response = await axios.get(`https://www.google.com/search?q=${query}&start=${start}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        },
      });

      const $ = cheerio.load(response.data);
      const language = $('html').attr('lang') || 'id';

      $('.g').each((_, element) => {
        const title = $(element).find('h3').text().trim() || '';
        const link = $(element).find('a').attr('href') || '';
        const description = $(element).find('.VwiC3b').text().trim() || '';

        if (title && link) {
          results.push({
            created_at: currentTime,
            modified_at: currentTime,
            link,
            is_expanded: true,
            title,
            description,
            description_tokens: description.split(/\s+/).length,
            expanded_tokens: Math.ceil(description.split(/\s+/).length * 1.5),
            accept_language: language,
            engine: 'Google Search',
            expanded_description: description.length > 100 
              ? `${description.substring(0, 100)}...` 
              : description,
            scraped_at: currentTime,
          });
        }
      });
    }

    return { success: true, totalResults: results.length, results };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
const tankGame = new IsekaiTankBattle();


const dungeonGame = new IsekaiDungeon();


const gameshoot = new ShootingGame();

let gamesss = new FishingGame(m.sender)
global.xyiroapi = "Xy-wfgLAU6O8l"
global.xyro = "https://api.xyro.tech/api/"
//Mcpedl search and view download link
//By alxzy
class Mcpedl {
  constructor() {
    this.link = "https://mcpedl.org/";
  }
async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async search(query) {
    try {
      const url = `${this.link}?s=${encodeURIComponent(query)}`;
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const results = [];

      $(".g-block .tease").each((index, element) => {
        const title = $(element).find(".entry-title a").text().trim();
        const link = $(element).find(".entry-title a").attr("href");
        const thumbnail = $(element).find(".post-thumbnail img").attr("data-src");
        const rating = $(element).find(".rating-wrapper span").text().trim();

        results.push({ title: title, link: link, thumb: thumbnail, rating: rating });
      });

      return results;
    } catch (error) {
      console.error("Err:", error.message);
      return [];
    }
  }


   async download(link) {
    try {
      const response = await axios.get(link);
      const $ = cheerio.load(response.data);
      const downloadLinks = [];
      $("#download-link tbody tr").each((index, element) => {
        const version = $(element).find("td").eq(0).text().trim();
        const options = $(element).find("td").eq(1).text().trim();
        const tempLink = $(element).find("td a.button").attr("href");
        if (tempLink) {
          downloadLinks.push({
            v: version,
            o: options,
            link: `${this.link}${tempLink.replace(/^\//, "")}`,
          });
        }
      });

      return downloadLinks;
    } catch (error) {
      console.error("Err:", error.message);
      return [];
    }
  }
}

async function searchHalodoc(query) {
  const url = `https://www.halodoc.com/artikel/search/${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const articles = $('magneto-card').map((index, element) => ({
      title: $(element).find('header a').text(),
      articleLink: 'https://www.halodoc.com' + $(element).find('header a').attr('href'),
      imageSrc: $(element).find('magneto-image-mapper img').attr('src'),
      healthLink: 'https://www.halodoc.com' + $(element).find('.tag-container a').attr('href'),
      healthTitle: $(element).find('.tag-container a').text(),
      description: $(element).find('.description').text(),
    })).get();

    return articles;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function detailHalodoc(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    return {
      title: $('div.wrapper div.item').text(),
      content: $('div.article-page__article-body').text(),
      times: $('div.article-page__article-subheadline span.article-page__reading-time').text(),
      author: $('div.article-page__reviewer a').text(),
      link: $('meta[property="og:url"]').attr('content') || '',
      image: $('meta[property="og:image"]').attr('content') || ''
    };
  } catch (error) {
    throw new Error(error);
  }
}
async function NasaNews() {
  try {
    const response = await axios.get('https://www.nasa.gov/');
    const $ = cheerio.load(response.data);
    const slides = [];

    $('.hds-nasa-mag-wrapper').each((index, element) => {
      const title = $(element).find('h2').text().trim();
      const description = $(element).find('p').text().trim();
      const link = $(element).find('a.usa-button').attr('href');
      const img = $(element).find('figure img').attr('src');

      slides.push({ judul: title, desk: description, lenk: link, foto: img });
    });

    return slides
  } catch (error) {
    console.error(error);
    return [];
  }
}
const { createCanvas } = require('canvas')
async function create_frame(text, color, pathna) {
  const width = 400
  const height = 400

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = 'rgba(0, 0, 0, 0)'
  ctx.fillRect(0, 0, width, height)

  let fsize = 80
  if (text.length > 10) fsize = 60
  if (text.length > 20) fsize = 40

  ctx.font = `bold ${fsize}px Arial`
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const words = text.split(' ')
  const lines = []
  let line = ''

  words.forEach((word) => {
    const test_line = line + word + ' '
    const test_width = ctx.measureText(test_line).width
    if (test_width > width - 40) {
      lines.push(line.trim())
      line = word + ' '
    } else {
      line = test_line
    }
  })
  lines.push(line.trim())

  const total_height = lines.length * fsize
  let startY = (height - total_height) / 2 + fsize / 2

  lines.forEach((line) => {
    ctx.fillText(line, width / 2, startY)
    startY += fsize
  })

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(pathna, buffer)
}

async function create_attp(text) {
  const lokasina = path.join(__dirname, 'temp_frames')
  if (!fs.existsSync(lokasina)) fs.mkdirSync(lokasina)

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
  const fpaths = []

  for (let i = 0; i < colors.length; i++) {
    const fpath = path.join(lokasina, `frame_${i}.png`)
    await create_frame(text, colors[i], fpath)
    fpaths.push(fpath)
  }

  return new Promise((resolve, reject) => {
    const output_gif = path.join(__dirname, 'attp.gif')
    const ffmpeg_cmd = `ffmpeg -y -framerate 10 -i ${lokasina}/frame_%d.png -vf "scale=400:400:flags=lanczos" ${output_gif}`
    
    exec(ffmpeg_cmd, (error) => {
      fpaths.forEach((file) => fs.unlinkSync(file))
      fs.rmdirSync(lokasina)

      if (error) return reject(error)

      const buffna = fs.readFileSync(output_gif)
      fs.unlinkSync(output_gif)
      resolve(buffna)
    })
  })
}

async function create_ttp(text) {
  const width = 400
  const height = 400

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = 'rgba(0, 0, 0, 0)'
  ctx.fillRect(0, 0, width, height)

  let fsize = 80
  if (text.length > 10) fsize = 60
  if (text.length > 20) fsize = 40

  ctx.font = `bold ${fsize}px Arial`
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const words = text.split(' ')
  const lines = []
  let line = ''

  words.forEach((word) => {
    const test_line = line + word + ' '
    const test_width = ctx.measureText(test_line).width
    if (test_width > width - 40) {
      lines.push(line.trim())
      line = word + ' '
    } else {
      line = test_line
    }
  })
  lines.push(line.trim())

  const total_height = lines.length * fsize
  let startY = (height - total_height) / 2 + fsize / 2

  lines.forEach((line) => {
    ctx.fillText(line, width / 2, startY)
    startY += fsize
  })

  const buffer = canvas.toBuffer('image/png')
  return buffer
}

function conwrite(data) {
  fs.writeFileSync("./database/confess.json", JSON.stringify(data, null, 2))
}
async function conread(id) {
  if (fs.existsSync("./database/confess.json")) {
    
    let d = await fs.readFileSync("./database/confess.json", "utf8") 
    if (d) {
      return JSON.parse(d)
    } else {
      return {}
    }
  } else {
    return {}
  }
}
function antilinkR() {
  try {
    return JSON.parse(fs.readFileSync("./database/antilinkonoff.json", "utf8"))
  } catch (e) {
    return {}
  }
}
function antilinkW(d) {
  fs.writeFileSync("./database/antilinkonoff.json", JSON.stringify(d, null, 2))
}

let botIsAdmin = m.isGroup? groupMetadata.participants.some(v => v.id === zanspiw.decodeJid(zanspiw.user.id) && v.admin) : false
const userIsAdmin = (id) => {
  return groupMetadata.participants.some(v => v.id === id && (v.admin === "admin" || v.admin === "superadmin"));
};
function antilink_readDB() {
    if (!fs.existsSync("./database/antilink.json")) {
        fs.writeFileSync("./database/antilink.json", JSON.stringify({}, null, 2));
    }
    return JSON.parse(fs.readFileSync("./database/antilink.json", 'utf8'));
}

function antilink_writeDB(data) {
    fs.writeFileSync("./database/antilink.json", JSON.stringify(data, null, 2));
}
global.antilink = (await antilinkR()).mode
global.warns = antilink_readDB() || {}
if (global.antilink && m.isGroup) {
  let linkRegex = /(https?:\/\/)?(chat\.whatsapp\.com|whatsapp\.com\/channel)/i;

  if (linkRegex.test(m.text)) {
    if (!global.warns[m.sender]) {
      global.warns[m.sender] = 0;
      antilink_writeDB(global.warns)
    }

    if (global.warns[m.sender] >= 2) {
      if (!botIsAdmin) return m.reply("Bot bukan admin, tidak dapat mengeluarkan anggota.");
      if (userIsAdmin(m.sender)) return m.reply("Admin diperbolehkan mengirim link.");
      if (global.owner.includes(m.sender.replace("@s.whatsapp.net", ""))) return m.reply("Owner diperbolehkan mengirim link.");
      
      m.reply("Kamu telah mencapai 3 peringatan, kamu akan dikeluarkan dari grup.");
      zanspiw.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      delete global.warns[m.sender]; 
      antilink_writeDB(global.warns)
    } else {
      global.warns[m.sender] += 1;
      antilink_writeDB(global.warns)
      m.reply(`Dilarang mengirim link grup/channel! Peringatan ${global.warns[m.sender]}/3. Jika mencapai 3, kamu akan dikeluarkan.`);
    }
  }
}


const Groq = require("groq-sdk");

const aireadDB = (path) => {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path));
  }
  return { aktif: {}, session: {} }; 
};

const aiwriteDB = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

const dbPath = "./database/autoai.json";

const premium_model = ["mixtral-8x7b-32768", "llama3-70b-8192", "gemma-7b-it"];
const free_model = ["llama3-8b-8192"];
let model_saatini = "llama3-8b-8192";
  const now = Date.now();
  let autoaidb = aireadDB(dbPath);

if (autoaidb.aktif) {
  Object.keys(autoaidb.aktif).forEach((user) => {
    if (now - autoaidb.aktif[user].lastsend > 5 * 60 * 1000) {
      delete autoaidb.aktif[user];
      delete autoaidb.session[user];
    }
  });

  aiwriteDB(dbPath, autoaidb);
}
const { queryString } = require('object-query-string')
const photoOxy = (url, text) => { new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
}
async function latestTourMobileLegends() {
    try {
        const { data } = await axios.get('https://infotourney.com/tournament/mobile-legends');
        const $ = cheerio.load(data);
        const tournaments = [];

        $('.items-row .item').each((index, element) => {
            const title = $(element).find('h2 a').text();
            const url = "https://infotourney.com" + $(element).find('h2 a').attr('href');
            const image = "https://infotourney.com" + $(element).find('img').attr('src');
            const startDate = $(element).find('.published time').attr('datetime');
            const startDateText = $(element).find('.published').text().trim();
            const registrationEndDateText = $(element).find('p').last().text().trim();
            const description = $(element).find('p').eq(1).text().trim();
            
            const tags = [];
            $(element).find('.tags a').each((i, tagElement) => {
                tags.push($(tagElement).text());
            });

            tournaments.push({
                title,
                url,
                image,
                startDate,
                startDateText,
                registrationEndDateText,
                description,
                tags
            });
        });

        return tournaments
    } catch (error) {
        return error.message;
    }
}
//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
const translate = require('translate-google-api');
const ws = require("ws");

async function tiktokStalk(username) {
    try {
        const response = await axios.get(`https://www.tiktok.com/@${username}?_t=ZS-8tHANz7ieoS&_r=1`);
        const html = response.data;
        const $ = cheerio.load(html);
        const scriptData = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').html();
        const parsedData = JSON.parse(scriptData);

        const userDetail = parsedData.__DEFAULT_SCOPE__?.['webapp.user-detail'];
        if (!userDetail) {
            throw new Error('user tidak ditemukan');
        }

        const userInfo = userDetail.userInfo?.user;
        const stats = userDetail.userInfo?.stats;

        const metadata = {
            userInfo: {
                id: userInfo?.id || null,
                username: userInfo?.uniqueId || null,
                nama: userInfo?.nickname || null,
                avatar: userInfo?.avatarLarger || null,
                bio: userInfo?.signature || null,
                verifikasi: userInfo?.verified || false,
                totalfollowers: stats?.followerCount || 0,
                totalmengikuti: stats?.followingCount || 0,
                totaldisukai: stats?.heart || 0,
                totalvideo: stats?.videoCount || 0,
                totalteman: stats?.friendCount || 0,
            }
        };

        return metadata
    } catch (error) {
        return error.message;
    }
}


async function mentionStatus(jids, content) {
    let colorss = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fontss = [0, 1, 2, 6, 7, 8, 9, 10];

    let users = [];
    for (let id of jids) {
        let userId = await zanspiw.groupMetadata(id);
        users.push(...userId.participants.map(u => jidNormalizedUser(u.id)));
    }

    let message = await zanspiw.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colorss[Math.floor(Math.random() * colorss.length)],
            font: fontss[Math.floor(Math.random() * fontss.length)],
            statusJidList: users,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined,
                            })),
                        },
                    ],
                },
            ],
        }
    );

    jids.forEach(id => {
        zanspiw.relayMessage(
            id, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: jidNormalizedUser(zanspiw.user.id),
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        );
    });
}
const { load } = require('cheerio');

class Uptodown {
    constructor (text) {
        this.baseUrl = "https://id.uptodown.com";
        this.text = text;
    }
    async search () {
        return axios.post(this.baseUrl + "/android/search", { q: this.text }).then(response => {
            const $ = load(response.data);
            let result = [];
            $('.content .name a').each((_, a) => {
                let _slug = $(a).attr('href');
                let _name = $(a).text().trim();
                result.push({
                    name: _name,
                    slug: _slug.replace("." + this.baseUrl.replace("https://", "") + "/android", "").replace("https://", "")
                });
            })
            return result
        })
        .catch(e => {
            console.error(e);
            throw e;
        })
    }
   
    async download () {
        return axios.get("https://" + this.text + "." + this.baseUrl.replace("https://", "") + "/android").then(async (response) => {
            const $ = load(response.data);
            let image = [];
            let obj = {};
            let v = $('.detail .icon img');
            obj.title = v.attr('alt').replace("Ikon ", "") || "None";
            let slug = $('a.button.last').attr('href');
            obj.version = $('.info .version').text().trim() || "None";
            const downloadData = await this.getDownloadData(slug, obj.version);
            obj.download = downloadData || "None";
            obj.author = $('.autor').text().trim() || "None";
            obj.score = $('span[id="rating-inner-text"]').text().trim() || "None";
            obj.unduhan = $('.dwstat').text().trim() || "None";
            obj.icon = v.attr('src') || "None";
            $('.gallery picture img').each((_, a) => {
                image.push($(a).attr('src'));
            });
            obj.image = image || [];
            obj.desc = $('.text-description').text().trim().split('\n')[0] || "None";
            return obj;
        })
        .catch(e => {
            console.error(e);
            throw e;
        });
    }
    
    async getDownloadData (slug, version) {
        try {
            const response = await axios.get(slug);
            const downloadUrl = `https://dw.uptodown.net/dwn/${load(response.data)('.button-group.download button').attr('data-url')}${version}.apk`;
            const { headers } = await axios.head(downloadUrl);
            const downloadSize = headers["content-length"];
            return { size: downloadSize, url: downloadUrl }
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}
function readSewa() {
      try {
        return JSON.parse(fs.readFileSync("./database/sewa.json", "utf8"));
    } catch {
        return {};
    }
}
function writeSewa(dt) {
  fs.writeFileSync("./database/sewa.json", JSON.stringify(dt, null, 2))
}
async function checkExpiredSewa() {
    let dts = await readSewa();
    let now = Date.now();
    if (!dts || Object.keys(dts).length === 0) return;

    for (let id in dts) {
        if (now >= dts[id].expired) {
            delete dts[id]; 
            await zanspiw.sendMessage(id, { text: "Waktu sewa grup ini telah berakhir, bot akan keluar dalam 4 detik..." });
            await new Promise(resolve => setTimeout(resolve, 4000)); // Tunggu 4 detik
            await zanspiw.groupLeave(id);
        }
    }

    await writeSewa(dts);
}

await checkExpiredSewa();

switch (command) {
  case "otherfitur": case "fiturlain": {
var t = `delsewa
addsewa
mentionstatus
create-model1 - create-model2
tourl
playsp
spotify
facebook
ig
thumbgen
wiki
filmsearch
halodoc
uptodown-search
uptodown-d
htmlgen
help
tiktoksearch
hidetag
music1 - music50
turml
pedotts`
m.reply(t)
  }
  break
  case "delsewa": case "hapussewa": case "removesewa": {
    if (!text) return m.reply("Contoh: .delsewa idgc");

    let id = args[0];
    if (!id.includes("@g.us")) return m.reply("Bukan ID grup yang valid.");
    
    let dts = await readSewa();
    
    if (!dts[id]) {
        return m.reply("Grup ini tidak terdaftar dalam data sewa.");
    }

    delete dts[id]; 
    await writeSewa(dts);

    await m.reply(`Sewa untuk grup ${id} telah berhasil dihapus.`);
}
break;
case "listsewa": case "sewalist": case "sewagclist": {
  let da = await readSewa()
 let tx = "*List grub yang menyewa bot:*\n\n"
 function msToDate(ms) {
        let date = new Date(ms);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
  if (!da) return m.reply("tidak ada grub yang menyewa")
  for (let a of Object.keys(da)) {
    let k = da[a]
    tx += `${a}: ${msToDate(k.expired)}\n`
  }
  m.reply(tx.trim())
}
break
case "addsewa": case "sewagc": case "tambahsewa": {
    function convertDaysToMs(days) {
        return days * 24 * 60 * 60 * 1000;
    }

    function msToDate(ms) {
        let date = new Date(ms);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    if (!text) return m.reply("Contoh: .addsewa idgc 10\n10 itu 10 hari.");
    if (!args[0].includes("@g.us")) return m.reply("Bukan ID grup yang valid.");
    
    let ds = await m.reply("Proses...");
    let id = args[0];
    let waktuSekarang = Date.now();
    let waktu;

    if (!isNaN(Number(args[1])) && Number(args[1]) > 0) {
        waktu = waktuSekarang + convertDaysToMs(Number(args[1]));
        await m.reply("Converting expired...", { edit: ds.key });
    } else {
        return m.reply("Pastikan memasukkan jumlah hari yang benar. Kalau tidak, gw bom lu 😊");
    }

    let dts = await readSewa();
    dts[id] = {
        expired: waktu
    };

    await writeSewa(dts);
    await m.reply("Berhasil menambahkan grup.\nExpired: " + msToDate(waktu), { edit: ds.key });
}
break;

 case "wiki": case "wikipedia": case "wikisearch": {
async function wiki(query) {
    const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
    const $ = cheerio.load(res.data)
    const hasil = []
    let wiki = $('#mf-section-0').find('p').text()
    let thumb = $('meta[property="og:image"]').attr('content')
    hasil.push({
        wiki, thumb
    })
    return hasil
}

if (!text) return reply(" apa yang ingin di cari?")
let data = pickRandom(await wiki(text.trim()))
await zanspiw.sendMessage(m.chat, { text: data.wiki}, { quoted: m })
}
break
  case "uptodown": case "uptodown-search": case "uptdown-s": {
   if (!text) return m.reply("apa yang ingin di cari?")
   let data = new Uptodown(text)
  let search = await data.search()
 let txt = "result: \n"
let mp = search.forEach((d, index) => {
txt += `nama: ${d.name}\nslug: ${d.slug} \n\n`
})
reply(txt)
  }
  break
  case "uptodown-d": case "uptodown-download": case "uptdown-d": {
    if (!text) return m.reply("masukan slug apk nya")
    let d = new Uptodown(text)
    let kk = await d.download()
    zanspiw.sendMessage(m.chat, { document: await (await fetch(kk.download.url)).buffer(), fileName: kk.title + ".apk", mimetype: "application/vnd.android.package-archive", jpegThumbnail: await (await fetch(kk.icon)).buffer()}, {quoted:m})
  }
  break
case "htmlgen": case "html": case "genhtml": {
    if (!text) return m.reply(`Input a text`)
    try {
        const { data } = await axios.get("https://itzpire.com/tools/generate-html?prompt=" + encodeURIComponet(text));
        m.reply(data.result);
    } catch (e) {
        m.reply(`Error om`);
        console.error(e);
    }
}
break


case 'tiktoksearch':
case 'ttsearch': {
if (!text) return m.reply(`${prefix + command} jj epep`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/search/tiktok?query=${text}`).then(async (res) => {
let response = await res.json()
let result = response.result[Math.floor(Math.random() * response.result.length)]
zanspiw.sendMessage(m.chat, { video: { url: result.media.no_watermark }, mimetype: 'video/mp4', caption: result.title }, { quoted : m })
setTimeout(() => {
zanspiw.sendMessage(m.chat, { audio: { url: result.media.audio }, mimetype: "audio/mpeg", contextInfo: { externalAdReply: { thumbnailUrl: result.thumbnail, title: result.music.title, body: result.music.author, sourceUrl: null, renderLargerThumbnail: true, mediaType: 1}}}, { quoted: m })
}, 3000)
}).catch(err => m.reply('Error 🗿'))
}
break
case "hidetag": case "h": case "ht": {
    let qt = m.quoted ? m.quoted : m;
    let qttext = qt.text ? qt.text.split(" ") : undefined;
    
    if (!qttext || qttext.length < 2) return m.reply("Masukkan teks atau reply teks.");
    
    delete qttext[0];
    let qttxtj = qttext.filter(Boolean).join(" ");
    
    let groupMetadata = await zanspiw.groupMetadata(m.chat);
    let mentionedJid = groupMetadata?.participants?.map(v => jidNormalizedUser(v.id)) || [];
    console.log(mentionedJid)
    return zanspiw.sendMessage(
        m.chat, 
        { text: qttxtj, 
         contextInfo: { mentionedJid: mentionedJid}
        
        }
    );
} 
break;

case 'thumbgen': {
const { loadImage } = require('canvas');
class ThumbnailGenerator {
  constructor(options) {
    this.validateOptions(options);
    this.options = options;
  }

  validateOptions(options) {
    const requiredFields = ['thumbnailImagePath', 'profileImagePath', 'title', 'channelName', 'releaseInfo', 'viewCount', 'duration'];
    requiredFields.forEach(field => {
      if (!options[field]) {
        throw new Error(`Error: ${field} harus diisi.`);
      }
    })
  
    this.validateDuration(options.duration);
    this.validateViewCount(options.viewCount);
    this.validateReleaseInfo(options.releaseInfo);
  }

  validateDuration(duration) {
    const durationRegex = /^[0-9.]+$/;
    if (!durationRegex.test(duration)) {
      throw new Error('Durasi tidak valid. Durasi hanya boleh mengandung angka dan titik (.)');
    }
  }

  validateViewCount(viewCount) {
    const viewCountRegex = /^[0-9]*(rb|jt|m)?$/i;
    if (!viewCountRegex.test(viewCount)) {
      throw new Error('View count tidak valid. Hanya angka dan satuan rb, jt, m yang diizinkan.');
    }
  }

  validateReleaseInfo(releaseInfo) {
    const validPeriods = ['detik', 'menit', 'jam', 'hari', 'bulan', 'tahun'];
    if (!validPeriods.some(period => releaseInfo.includes(period))) {
      throw new Error('Tanggal rilis tidak valid.');
    }
  }

  async createThumbnail(outputPath) {
    const { thumbnailImagePath, profileImagePath, title, channelName, releaseInfo, viewCount, duration } = this.options;
    
    const canvasWidth = 720;
    const thumbnailHeight = 405;
    const bottomSectionHeight = 100;
    const canvasHeight = thumbnailHeight + bottomSectionHeight;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    const thumbnailImage = await loadImage(thumbnailImagePath);
    ctx.drawImage(thumbnailImage, 0, 0, canvasWidth, thumbnailHeight);

    this.drawDuration(ctx, duration, canvasWidth, thumbnailHeight);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, thumbnailHeight, canvasWidth, bottomSectionHeight);

    const profileImage = await loadImage(profileImagePath);
    const profileSize = 50;
    ctx.save();
    ctx.beginPath();
    ctx.arc(25 + profileSize / 2, thumbnailHeight + bottomSectionHeight / 2, profileSize / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(profileImage, 25, thumbnailHeight + bottomSectionHeight / 2 - profileSize / 2, profileSize, profileSize);
    ctx.restore();

    this.drawTextWithShadow(ctx, title, 90, thumbnailHeight + 35, 24);
    const detailText = `${channelName} • ${viewCount} x ditonton • ${releaseInfo}`;
    this.drawTextWithShadow(ctx, detailText, 90, thumbnailHeight + 65, 20, 'rgba(169, 169, 169, 1)');

    this.drawThreeDots(ctx, canvasWidth, thumbnailHeight);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
  }

  drawTextWithShadow(ctx, text, x, y, fontSize, color = 'white') {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(text, x + 2, y + 2);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  drawDuration(ctx, duration, canvasWidth, thumbnailHeight) {
    const durationText = ` ${duration} `;
    ctx.font = 'bold 28px Arial';
    const textWidth = ctx.measureText(durationText).width;

    const boxPadding = 10;
    const boxHeight = 40;
    const boxWidth = textWidth + boxPadding * 2;
    const radius = 10;

    const x = canvasWidth - boxWidth - 20;
    const y = thumbnailHeight - boxHeight - 20;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + boxWidth - radius, y);
    ctx.quadraticCurveTo(x + boxWidth, y, x + boxWidth, y + radius);
    ctx.lineTo(x + boxWidth, y + boxHeight - radius);
    ctx.quadraticCurveTo(x + boxWidth, y + boxHeight, x + boxWidth - radius, y + boxHeight);
    ctx.lineTo(x + radius, y + boxHeight);
    ctx.quadraticCurveTo(x, y + boxHeight, x, y + boxHeight - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.fillText(durationText, x + boxPadding, y + 30);
  }

  drawThreeDots(ctx, canvasWidth, thumbnailHeight) {
    ctx.fillStyle = 'white';
    const dotRadius = 4;
    const dotX = canvasWidth - 40;
    const dotY = thumbnailHeight + 35;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(dotX, dotY + i * 15, dotRadius, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
}
  try {
if (!text) return m.reply(`Example: .thumbgen <reply fotonya> | Judul | Nama Channel | Kapan Rilisnya | Jumlah Penonton | Durasi`)
 judul = text.split("|")[0]
 channelname = text.split("|")[1]
 rilis = text.split("|")[2]
 view = text.split("|")[3]
 duras = text.split("|")[4]
 
 zanspiw.sendMessage(m.chat, {
			react: {
				text: '🕒',
				key: m.key,
			}
		});
 
   const profile = await zanspiw.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
   let q = m.quoted ? m.quoted : m;
  let mimee = (q.msg || q).mimetype || "";
  if (!mimeee) return m.reply("Fotonya Mana? Reply gambar atau upload");
  if (!/image\/(jpe?g|png)/.test(mimeee))
    return m.reply(`Tipe ${mimeee} tidak didukung!`);
  let image = await q.download();
     fs.writeFileSync("profile.jpg", profile);
     fs.writeFileSync("thumb.jpg", image);
    const options = {
      thumbnailImagePath: fs.readFileSync(`thumb.jpg`),
      profileImagePath: fs.readFileSync(`profile.jpg`),
      title: judul,
      channelName: channelname,
      releaseInfo: rilis,
      viewCount: view,
      duration: duras
    };

    const generator = new ThumbnailGenerator(options);
    await generator.createThumbnail(path.join(__dirname, 'thumbnail.png'));
    await zanspiw.sendMessage(m.chat, {image: fs.readFileSync("./thumbnail.png"), caption: "Done🎉"}, {quoted: m})
  } catch (error) {
    return error.message;
  }
}
break
  /*
*
* [ *FEATURE PLAY (SPOTIFY)* ]
* Created By Hann
* 
* Channel: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
*
**/

case 'playsp': case "playspotify": {
if (!text) return m.reply("apa yang mau dicari")

async function convert(ms) {
	var minutes = Math.floor(ms / 60000)
	var seconds = ((ms % 60000) / 1000).toFixed(0)
	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

async function down (url) {
	const BASEURL = "https://api.fabdl.com";
	const headers = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
	};

	try {
		const {
			data: info
		} = await axios.get(`${BASEURL}/spotify/get?url=${url}`, {
			headers
		});
		const {
			gid,
			id,
			name,
			image,
			duration_ms
		} = info.result;

		const {
			data: download
		} = await axios.get(`${BASEURL}/spotify/mp3-convert-task/${gid}/${id}`, {
			headers
		});
		if (download.result.download_url) {
			return `${BASEURL}${download.result.download_url}`
		}
	} catch (error) {
		console.error("Error downloading Spotify track:", error.message);
		throw new Error(error.message);
	}
};

async function spotifyCreds() {
	return new Promise(async resolve => {
		try {
			const json = await (await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
				headers: {
					Authorization: 'Basic ' + Buffer.from('4c4fc8c3496243cbba99b39826e2841f' + ':' + 'd598f89aba0946e2b85fb8aefa9ae4c8').toString('base64')
				}
			})).data
			if (!json.access_token) return resolve({
				status: false,
				msg: 'Can\'t generate token!'
			})
			resolve({
				status: true,
				data: json
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

async function play(query) {
	return new Promise(async resolve => {
		try {

			const creds = await spotifyCreds()
			if (!creds.status) return resolve(creds)
			const json = await (await axios.get('https://api.spotify.com/v1/search?query=' + query + '&type=track&offset=0&limit=1', {
				headers: {
					Authorization: 'Bearer ' + creds.data.access_token
				}
			})).data
			if (!json.tracks.items || json.tracks.items.length < 1) return resolve({
				status: false,
				msg: 'Music not found!'
			})
			let metadata = {}
			let v = json.tracks.items[0]
			let url = await down(v.external_urls.spotify)
			metadata = {
				title: v.album.artists[0].name + ' - ' + v.name,
				artist: v.album.artists[0].name,
				name: v.name,
				duration: convert(v.duration_ms),
				popularity: v.popularity + '%',
				preview: v.preview_url || 'No preview audio Avaible',
				thumbnail: v.album.images[0].url,
				url: v.external_urls.spotify,
			}
			resolve({
				status: true,
				metadata,
				audio: { url }
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

const kont = await play(text)
console.log(kont)
zanspiw.sendMessage(m.chat, {image: {url: kont.metadata.thumbnail}, caption: `
Title: ${kont.metadata.title}
Artist: ${kont.metadata.artist}
Name: ${kont.metadata.name}
Preview Url: ${kont.metadata.preview}
Popularity: ${kont.metadata.popularity}
Url: ${kont.metadata.url}
`}, {quoted: null})

await zanspiw.sendMessage(m.chat, {
                    audio: { url: kont.audio.url },
                    mimetype: 'audio/mpeg',
                    fileName: `${kont.metadata.title}.mp3`
                }, { quoted: m });
}
break
  ///=== *Music Old dan New Campuran* ===///

case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65':
zanspiw.sendMessage(m.chat, { react: { text: "🎧", key: m.key }})
let epep = await getBuffer(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`)
await zanspiw.sendMessage(m.chat, { audio: epep, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
  case "tiktokstalk": case "ttstalk": { 
if (!text) return m.reply(" username nya kocak")
tiktokStalk(text).then(v => v.userInfo).then(async (d) => {
let txt = ` *Tiktok Stalk:*
*id:* ${d.id}
*username:* ${d.username}
*nama:* ${d.nama}
*terverifikasi*: ${d.verifikasi}
*total followers:* ${d.totalfollowers}
*total following:* ${d.totalmengikuti}
*total like:* ${d.totaldisukai}
*total video:* ${d.totalvideo}
*total teman:* ${d.totalteman}`
zanspiw.sendMessage(m.chat, { image: { url: d.avatar }, mimetype: "image/jpeg", caption: txt }, { quoted: m })
}).catch(e => m.reply(e.message))
}
break
  case "mentionstatus": case "tagstatus": case "statusmention": {
    const baileys = require("@whiskeysockets/baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await zanspiw.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: zanspiw.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await zanspiw.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await zanspiw.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("Jenis file tidak didukung!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply("Reply media atau masukkan URL dengan format:\n.status <url> <image/video/audio/text>");
    }

    mentionStatus([m.chat], content).catch(console.error);
}
break;

case "turml": case "tournamentml": case "getturml": case "infoturney": {
    const tournaments = await latestTourMobileLegends();

    if (typeof tournaments === "string") {
        return conn.reply(m.chat, tournaments, m);
    }

    if (tournaments.length === 0) {
        return m.reply("Tidak ada turnamen untuk saat ini")
    }

    const messages = tournaments.map((tournament, index) => {
        return `   ◦ Title : ${tournament.title}\n` +
            `   ◦ Link : ${tournament.url}\n` +
            `   ◦ Start date : ${tournament.startDateText}\n` +
            `   ◦ Description : ${tournament.description}\n`;
    }).join("\n\n");

    m.reply("*乂 M L B B - T O U R N A M E N T*\n\n" + messages)
}
break

case "pedotts": case "ttsba": case "bluearchivetts": case "batts": case "texttospeechba": {
class BlueArchive {
        voice = async function voice(text, model = "Airi", speed = 1.2) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!text || text.length >= 500)
                        throw new Error(`Make sure to enter valid text, that's not exceed 500 words!`);
                    if (speed && (speed < 0.1 || speed > 2))
                        speed = 2;
                    model = "JP_" + model;
                    const base_url = "https://ori-muchim-bluearchivetts.hf.space/";
                    const session_hash = this.generateSession();
                    const socket = new ws("wss://ori-muchim-bluearchivetts.hf.space/queue/join");
                    socket.on("message", (data) => {
                        const d = JSON.parse(data.toString("utf8"));
                        switch (d.msg) {
                            case "send_hash": {
                                socket.send(JSON.stringify({
                                    fn_index: 0,
                                    session_hash,
                                }));
                                break;
                            }
                            case "send_data": {
                                socket.send(JSON.stringify({
                                    fn_index: 0,
                                    session_hash,
                                    data: [text, model, speed],
                                }));
                                break;
                            }
                            case "estimation":
                            case "process_starts": {
                                break;
                            }
                            case "process_completed": {
                                const o = d.output;
                                const name = o.data[1]?.name;
                                socket.close();
                                return resolve({
                                    text,
                                    model: model,
                                    speed,
                                    result: {
                                        duration: +o.duration.toFixed(2),
                                        path: name,
                                        url: base_url + "file=" + name,
                                    },
                                });
                            }
                            default: {
                                console.log(`Unexpected message type : ${data.toString("utf8")}`);
                                break;
                            }
                        }
                    });
                } catch (e) {
                    return reject(`Error in voice process: ${e.message}`);
                }
            });
        }
        generateSession = function generateSession() {
            return Math.random().toString(36).substring(2);
        }
    }
    try {
        let [teks, char, sped] = text.split('|')
        if (!teks || !char) return m.reply('> Example: .ttsba jawa|momoi')
        const suppVoice = ['airi', 'akane', 'akari', 'ako', 'aris', 'arona', 'aru', 'asuna', 'atsuko', 'ayane', 'azusa', 'cherino', 'chihiro', 'chinatsu', 'chise', 'eimi', 'erica', 'fubuki', 'fuuka', 'hanae', 'hanako', 'hare', 'haruka', 'haruna', 'hasumi', 'hibiki', 'hihumi', 'himari', 'hina', 'hinata', 'hiyori', 'hoshino', 'iori', 'iroha', 'izumi', 'izuna', 'juri', 'kaede', 'karin', 'kayoko', 'kazusa', 'kirino', 'koharu', 'kokona', 'kotama', 'kotori', 'main', 'maki', 'mari', 'marina', 'mashiro', 'michiru', 'midori', 'miku', 'mimori', 'misaki', 'miyako', 'miyu', 'moe', 'momoi', 'momoka', 'mutsuki', 'NP0013', 'natsu', 'neru', 'noa', 'nodoka', 'nonomi', 'pina', 'rin', 'saki', 'saori', 'saya', 'sena', 'serika', 'serina', 'shigure', 'shimiko', 'shiroko', 'shizuko', 'shun', 'ShunBaby', 'sora', 'sumire', 'suzumi', 'tomoe', 'tsubaki', 'tsurugi', 'ui', 'utaha', 'wakamo', 'yoshimi', 'yuuka', 'yuzu', 'zunko']
        if (!suppVoice.includes(char)) {
            const txtVoice = suppVoice.map(name => name.charAt(0).toUpperCase() + name.slice(1)).sort().map(name => `> - ${name}`).join('\n');
            m.reply(
`*Char tidak ditemukan!*
Berikut list char yang disupport:
${txtVoice}`
            )
            return
        }
        m.reply("Wait....")
        const pedo = new BlueArchive()
        const translated = await translate(teks, { to: 'ja', autoCorrect: false })
        let charr = char.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const ba = await pedo.voice(translated[0], charr, sped || 1)
        zanspiw.sendMessage(m.chat, { audio: { url: ba.result.url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
    } catch (err) {
        console.error(err);
        m.reply('> Yahh, error...')
    }
}

break
  case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!text) return m.reply(`Example : ${prefix + command} ${global.botname}`);
    m.reply("sabar..")
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text)
 zanspiw.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
)
}
break;
  case "welcome":
case "change-welcome": 
case "change-left": {
  if (!isCreator) return m.reply("Mau apa lu😜")
  if (command === "welcome") {
    if (!args[0]) return m.reply("Cara pakainya: .welcome on/off");
    if (args[0] === "on") {
      global.welcome = true;
    } else if (args[0] === "off") {
      global.welcome = false;
    } else {
      return m.reply("Hanya dapat menggunakan on/off");
    }
    return m.reply(
      `${args[0] === "on" ? "Berhasil mengaktifkan welcome" : "Berhasil menonaktifkan welcome"}`
    );
  } else if (command === "change-welcome") {
    if (!text) return m.reply("Masukkan teks welcome. Gunakan #user untuk nomor yang masuk/keluar dan #grub untuk nama grup dan #total untuk member sekarang.");
    if (!fs.existsSync("./database/welcome.json")) {
      fs.writeFileSync("./database/welcome.json", JSON.stringify({}, null, 2));
    }
    let data = JSON.parse(await fs.readFileSync("./database/welcome.json", "utf8"));
    data.text = text;
    fs.writeFileSync("./database/welcome.json", JSON.stringify(data, null, 2));
    return m.reply("Teks welcome berhasil diperbarui.");
  } else {
    if (!text) return m.reply("Masukkan teks left. Gunakan #user untuk nomor yang masuk/keluar, #grub untuk nama grup dan #total untuk member sekarang.");
    if (!fs.existsSync("./database/left.json")) {
      fs.writeFileSync("./database/left.json", JSON.stringify({}, null, 2));
    }
    let data = JSON.parse(await fs.readFileSync("./database/left.json", "utf8"));
    data.text = text;
    fs.writeFileSync("./database/left.json", JSON.stringify(data, null, 2));
    return m.reply("Teks left berhasil diperbarui.");
  }
}
break;

case "antilink": case "antilinkgc": {
  if (!args[0]) return m.reply("Cara pakainya: .antilink on/off");
  let t = await antilinkR() || {}
  if (t.mode) delete t.mode
  if (args[0] === "on") {
    t = {
      mode: true
    }
  } else if (args[0] === "off") {
    t = {
      mode: false
    }
  } else {
    return m.reply("Hanya dapat menggunakan on/off");
  }
  antilinkW(t)
  return m.reply(
    `${args[0] === "on" ? "Berhasil mengaktifkan antilink" : "Berhasil menonaktifkan antilink"}`
  );
}
break;

case "alxzys": case "shorturl": case "alxzy-shortlink": {
  if (!text) return m.reply("masukan url")
 async function alxzy_shortlink(url,customId) {
  try {
    const response = await fetch('https://short-link.alxzy.xyz/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, customId }),
    });

    const data = await response.json();

    if (data.error) {
      return { success: false, error: data.error };
    }

    return { success: true, shortUrl: data.shortUrl };
  } catch (err) {
    return { success: false, error: 'An unexpected error occurred' };
  }
}
let shorturl = await alxzy_shortlink(text.trim())
m.reply(`Shorting: ${shorturl.shortUrl}`)
}
break
case 'capcut': case "capcut-downloader": case "capcut-d": {
if (!text) return m.reply(`${prefix + command} https://www.capcut.com/template-detail/7442103570402446645?template_id=7442103570402446645&share_token=3ff5f0f9-40fc-43b4-8716-6097735e419a&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/download/capcut?url=${text}`).then(async (res) => {
let response = await res.json()
zanspiw.sendMessage(m.chat, { video: { url: response.result.originalVideoUrl }, mimetype: 'video/mp4', caption: response.result.title }, { quoted: m })
}).catch(err => m.reply('Error 🗿'))
}
break
  case "confess": case "anonymous": {
    if (!text) return m.reply("contoh 62xxx|oi")
    let ku = text.split("|")
   if (ku.length < 2) return m.reply("contoh 62xxx|oi")
  let nomor = ku[0] + "@s.whatsapp.net"
  let t = ku[1]
  let id = pickRandom(["kok", "lol", "bjir", "alamak", "woioi", "idni", "gokgok"])
  let data = await conread()
  data[id] = { pengirim: m.sender, penerima: nomor }
  conwrite(data)
  await zanspiw.sendMessage(nomor, { text: "ada pesan confess ni \n" + `id: ${id}\npesan: ` +  t + "\n mau balas? ketik .menfess id|textmu"})
  }
  break 
  case "menfess": case "balasanonim": {
    if (!text) return m.reply("balas confess dengan contoh .balas id|textmu")
    let ku = text.split("|")
  if (ku < 2) return m.reply("contoh .balas id|textmu")
  let id = ku[0]
  let t = ku[1]
  let data = await conread()
  if (!Object.keys(data).includes(id)) return m.reply("id tidak di temukan/expired")
  await zanspiw.sendMessage(data[id].pengirim, {text: `hai kamu menerima balasan dari ${data[id].penerima}\npesan: ${t}`})
  delete data[id] 
  conwrite(data)
  }
  break
  case "powerbrain": case "pwai": case "powerbrainai": {
    if (!text) return m.reply("input text")
    /* PowerBrain AI
 * By *Shannz* (versi yg tanpa *qs* nya nih)
 * Hemat hemat
 * Mampir vapisz.web.app
 */


async function powerbrain(question) {
    const data = `message=${encodeURIComponent(question)}&messageCount=1`

    const config = {
        method: 'POST',
        url: 'https://powerbrainai.com/chat.php',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept-language': 'id-ID',
            'referer': 'https://powerbrainai.com/chat.html',
            'origin': 'https://powerbrainai.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'priority': 'u=0',
            'te': 'trailers'
        },
        data: data
    }
    const api = await axios.request(config)
    return api.data.response
}
let jawab = await powerbrain(text)
m.reply(jawab)
  }
  break
  case 'attp':
case 'ttp': {
  if (!text) return m.reply(`Contoh: ${prefix+command} halo`)

  try {
    let buffer

    if (command === 'attp') {
      buffer = await create_attp(text)
    } else {
      buffer = await create_ttp(text)
    }

    await zanspiw.sendImageAsSticker(m.chat, buffer, m, {
      packname: 'Sticker by',
      author: `Mannn md`
    })
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan')
  }
}
break
case "bratvid": case "bratvideo":{
    if (!text) return reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
    try {
        let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
        let response = await axios.get(brat, { responseType: "arraybuffer" });
        let videoBuffer = response.data;
        let stickerBuffer = await zanspiw.sendVideoAsSticker(m.chat, videoBuffer, m, {
            packname: "Stiker By",
            author: "Mannn md",
        });
        console.log("Stiker berhasil dibuat:", stickerBuffer);
    } catch (err) {
        console.error("Error:", err);
        reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
    }
}
break;
  case "nasa": case "news-nasa": case "nasagov": {
let h = await NasaNews()
let ky = pickRandom(h)
let caption = `${ky.judul}
${ky.desk}
Sumber: ${ky.lenk}`
zanspiw.sendMessage(m.chat, {image:{url:ky.foto}, caption: caption.trim()}, {quoted:m})
break
}
  case "carbon": case"code2img": case "kodekeimg": {
  if (!text) return m.reply("masukan kode")
    let h = global.xyro + `carbon?query=${encodeURIComponent(text)}&apikey=${global.xyiroapi}`
   zanspiw.sendMessage(m.chat, {image: { url: h }, fileName: "carbon.png", mimetype: "image/png", caption: encodeURIComponent(text)}, { quoted: m })
  }
  break
  case "create-model1": case "create-model2": {
    if (!text) return m.reply("masukan promth untuk di jadikan gambar")
    let hh = global.xyro + `${command}?prompt=${text}&apikey=${global.xyiroapi}`
    zanspiw.sendMessage(m.chat, { image: {url: hh}, mimetype: "image/jpeg", fileName: encodeURIComponent(text) + ".jpeg", caption: command + ` ${text}`}, { quoted: m })
  }
  break
  case "halodoc": case "halodok": {
    if (!text) return m.reply("mau cari apa di halodoc")
    let sea = await searchHalodoc(text)
    let kk = await detailHalodoc((pickRandom(sea)).articleLink)
    m.reply(`Hasil:
judul: ${kk.title}
content: ${kk.content}
author: ${kk.author}
link: ${kk.link}`)
  }
  break
  case "mcpedl":
case "mcpedl-search":
case "mcpedls":
case "search-mcpedl": {
    if (!text) {
        return m.reply("Apa yang ingin dicari di MCPEDL?");
    }
    try {
        let res = await new Mcpedl().search(text); 
        if (!res || res.length === 0) {
            return m.reply("Tidak ditemukan hasil untuk pencarian tersebut.");
        }

        let psn = "MCPEDL Search\nUnduh link? Salin link lalu ketik .mcpedl-d <linknya>\n\n";
        res.forEach((mc, index) => {
            psn += `#${index + 1}\n`;
            psn += `Judul: ${mc.title}\n`;
            psn += `Link: ${mc.link}\n`;
            psn += `Rating: ${mc.rating || "Tidak tersedia"}\n\n`;
        });

        m.reply(psn.trim());
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mencoba mencari di MCPEDL. Silakan coba lagi nanti.");
    }
    break;
}

  case "mcpedl-d": case "mcpedl-download": case "downloader-mcpedl": {
    if (!args[0]) return m.reply("link download nya?")
    let res = await new Mcpedl().download(args[0])
   let psn = `link download dari ${args[0]}: \n\n`
   res.forEach((mc, index) => {
     psn += `Title: ${mc.v}\ndescription: ${mc.o}\ndownload link: ${mc.link}\n`
   })
   m.reply(psn)
  }
  break
  case "videydownloader": case "videy": {
    if (!args[0]) return m.reply("masukan link videy")
    let js = await (await fetch(`https://mannoffc-x.hf.space/download/videy?url=${args[0]}`)).json()
    await zanspiw.sendMessage(m.chat, {
      video: { url: js.result },
      mimetype: "video/mp4",
      fileName: "videy.mp4"
    }, { quoted: m})
  }
  break
  case "googlesearch": case "searchgoogle": case "ggs": {
    if (!text) return m.reply("ingin cari apa?")
    let s = await googlesearch(text.trim())
    let k = s.result
    let pesan = "hasil\n\n"
    k.forEach((gg, index) => {
      pesan += `Result ${index + 1}\n`
      pesan += `judul: ${gg.title}\n`
      pesan += `deskripsi: ${gg.description}\n`
      pesan += `source: ${gg.link}\n\n`
    })
    m.reply(pesan)
  }
  break
  case "codyai": case "aicody": {
   if (!text) return m.reply("input query")
   let json = (await (await fetch(global.xyro + `codyai?query=${text}&apikey=${global.xyiroapi}`)).json()).result
   return m.reply(json.trim())
  }
  break
  case "youai": case "aiyou": {
   if (!text) return m.reply("input query")
   let json = (await (await fetch(global.xyro + `youai?query=${text}&apikey=${global.xyiroapi}`)).json()).result
   return m.reply(json.trim())
  }
  break
  case "llamaai": case "aillama": case "llama": {
   if (!text) return m.reply("input query")
   let json = (await (await fetch(global.xyro + `llama?query=${text}&apikey=${global.xyiroapi}`)).json()).result
   return m.reply(json.trim())
  }
  break
  case "carifilm": case "searchfilm": {
    if (!text) return m.reply("Judul filmnya kak?") 
    let url = global.xyro + `film?query=${text.trim()}&apikey=${global.xyiroapi}`
    let json = await (await fetch(url)).json()
    let hasil = json.result

    if (!hasil || hasil.length === 0) return m.reply("Maaf, tidak ada film yang ditemukan.")

    let pesan = "Hasil pencarian film:\n\n"
    hasil.forEach((film, index) => {
        pesan += `Film ${index + 1}:\n`
        pesan += `Title: ${film.title}\n`
        pesan += `Rating: ${film.rating}\n`
        pesan += `Sinopsis: ${film.sinopsis}\n`
        pesan += `URL: ${film.url}\n\n`
    })
    return m.reply(pesan.trim())
}
break
  case "imgursearch": case "imgur": {
    if (!text) return m.reply("apa yang ingin di cari")
    let imgur = await imgurscr(text)
    if (!imgur) return m.reply("tidak di temukan")
    let pk = await pickRandom(imgur)
    zanspiw.sendMessage(m.chat, {
      image: { url: pk.link },
      caption: desk.trim()
    }, { quoted: m})
  } 
  break
  case 'mulaitank': case "startank": case "starttank":
        m.reply(tankGame.startBattle(m.chat));
        break;

    case 'joinperangtank': case "masukperanhtank":
        m.reply(tankGame.joinBattle(m.chat, m.sender));
        break;

    case 'aksitank': case "tank":
        const actionType = args[0]; // Mendapatkan aksi dari input
        m.reply(tankGame.action(m.chat, m.sender, actionType));
        break;

    case 'statustank': case "tankstatus":
        m.reply(tankGame.checkStatus(m.chat, m.sender));
        break;

    case 'cleanuptank': case "bersikantank":
        tankGame.cleanupSessions();
        m.reply("Pertempuran lama telah dibersihkan.");
        break;

  case 'mulaidungeon': case "startdungeon":
        m.reply(dungeonGame.startDungeon(m.chat));
        break;
    case 'joindungeon': case "masukdungeon":
        m.reply(dungeonGame.joinDungeon(m.chat, m.sender));
        break;

    case 'exploredungeon': case "jelajahdungeon":
        m.reply(dungeonGame.explore(m.chat, m.sender));
        break;

    case 'statusdungeon': case "dungeonstatus":
        m.reply(dungeonGame.checkStatus(m.chat, m.sender));
        break;

    case 'cleanupdungeon': case "bersikandungeon":
        dungeonGame.cleanupSessions();
        m.reply("Dungeon yang lama telah dibersihkan.");
        break;

  case 'joinperang': case "masukperang":
        m.reply(gameshoot.addPlayer(m.chat, m.sender));
        break;

    case 'shoot': case "tembak":
        if (!m.quoted.sender) {
            m.reply("reply pesan lawan yang ingin ditembak!");
        } else {
            const targetId = m.quoted.sender
            m.reply(gameshoot.shoot(m.chat, m.sender, targetId));
        }
        break;

    case 'senjatareload': case "reload":
        m.reply(gameshoot.reload(m.chat, m.sender));
        break;

    case 'statustentara': case "tentaras":
        m.reply(gameshoot.checkStatus(m.chat, m.sender));
        break;

    case 'cleanupperang': case "bersikanperang":
        gameshoot.cleanupSessions();
        m.reply("Sesi permainan lama telah dibersihkan!");
        break;

  case "mancingikan": case "manceng": {
      let response = gamesss.fish();
      m.reply(response)
  }
      break;
    case "jualikan": case "sellfish": {
      let response = gamesss.sellFish();
      m.reply(response)
    }
      break;
    case "belipancing": case "buyfishingrod": {
      let response = gamesss.buyFishingRod();
      m.reply(response)
    }
      break;
    case "totalikan": {
      let response = gamesss.checkTotalFish();
      m.reply(response)
    }
      break;
    case "lihattangkapan": {
      let response = gamesss.checkInventory();
      m.reply(response)
    }
      break;

    case "deposit": case "depo": {
        const [paymentType, amount] = args;

        if (!paymentType) {
            reply("Silakan pilih metode pembayaran dan amount:\n1. OVO (ketik *deposit ovo*)\n2. QRIS (ketik *deposit qris*)\n3. DANA (ketik *deposit dana*)\n\nContoh: #deposit qris 1000");
            break;
        }

        if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
            m.reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik 'Batal' untuk membatalkan.");
            break;
        }

        let deposit_object = {
            ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
            session: "amount",
            date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta" }),
            number: sender,
            payment: paymentType.toUpperCase(),
            data: {
                amount_deposit: amount
            }
        };

        switch (paymentType.toLowerCase()) {
            case "ovo":
            case "qris":
            case "dana":
                fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2));
                if (paymentType === "qris") {
                    m.reply(`Oke kak, silakan scan QR berikut untuk pembayaran:\n![QRIS Payment](https://cdn.arifzyn.tech/f/69oe89lo.jpg)\n\nMasukkan nominal deposit dan kirim bukti pembayaran. (ketik .bukti)`);
                } else {
                    m.reply(`Oke kak mau deposit berapa?\n\nContoh: ${paymentType === "ovo" ? "15000" : "1000"}`);
                }
                break;
            default:
                m.reply("Metode pembayaran tidak valid. Silakan pilih OVO, QRIS, atau DANA.");
                break;
        }
        break;
    }

    case "bukti": {
        if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
            return m.reply(`Maaf *@${sender.split('@')[0]}*, sepertinya kamu belum pernah melakukan deposit.`);
        }

        if (quoted.mtype !== 'imageMessage') { return reply(`reply image/send image, with caption, *Example:* ${prefix + command}`);
        }
 
        const media = await zanspiw.downloadMediaMessage(quoted);
        let depositData = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"));

        let captionBukti = `「 *DEPOSIT USER* 」
⭔ ID: ${depositData.ID}
⭔ NO: ${depositData.number.split('@')[0]}
⭔ Nomor: @${depositData.number.split('@')[0]}
⭔ Payment: ${depositData.payment}
⭔ Tanggal: ${depositData.date}
⭔ Jumlah Deposit: Rp${toRupiah(depositData.data.amount_deposit)}
⭔ Total Pembayaran: Rp${toRupiah(depositData.data.amount_deposit)}

Ada yang deposit nih kak, coba dicek saldonya, jika sudah masuk konfirmasi.

jika ada kendala saldo tidak masuk bisa chat *#owner*`;

        let buktiBayar = {
            image: media,
            caption: captionBukti,
            mentions: [depositData.number],
            title: 'Bukti pembayaran',
            footer: 'Press The Button Below',
            headerType: 5
        };

        const recipients = global.owner.map(v => `${v}@s.whatsapp.net`);
        recipients.forEach(recipient => {
            zanspiw.sendMessage(recipient, buktiBayar);
        });

        m.reply(`Mohon tunggu ya kak, sampai dikonfirmasi oleh Kak Mannn ☺`);
        break;
    } 

    case "accdepo": {
    if (!isCreator) return; 
    let number = args[0]; 
    if (!number) return reply(`Contoh: ${prefix+command} 62zzz`)
    
    if (!fs.existsSync(depositPath + number + ".json")) {
        return m.reply(`Maaf *@${number}*, sepertinya belum pernah melakukan deposit.`);
    }
    
    let depositData = JSON.parse(fs.readFileSync(depositPath + number + ".json"));
    
    await addSaldo(number, depositData.data.amount_deposit, db_saldo);
    
    m.reply(`Deposit kamu telah berhasil diterima!\n\nJumlah Deposit: Rp${toRupiah(depositData.data.amount_deposit)}\n\nTerima kasih telah bertransaksi!\n\nCek Saldo: .saldo`);
    fs.unlinkSync(depositPath + number + ".json"); 
    break;
}

case "rejectdepo": {
    if (!isCreator) return;
    if (!number) return reply(`Contoh: ${prefix+command} 62zzz`)
    
    let number = args[0]; 
    
    if (!fs.existsSync(depositPath + number + ".json")) {
        return m.reply(`Maaf *@${number}*, sepertinya belum pernah melakukan deposit.`);
    }

    fs.unlinkSync(depositPath + number + ".json"); 
    m.reply(`Deposit kamu telah ditolak. Jika ada kesalahan, silakan coba lagi.`);
    break;
}
    
    case "saldo": {
    const data = cekSaldo(sender, db_saldo);
    m.reply(`Saldo kamu saat ini: Rp${toRupiah(data)}`);
    break;
}

case "menuall":
case "allmenu": {
  let image = ["./man.png"];
  let thumbnail = pickRandom(image);
  zanspiw.sendMessage(m.chat, { react: { text: '🔁️', key: m.key } });
  addCountCmd('#menu', m.sender, _cmd);
  
  let wek = `👋 Hallo » ${pushname}
📮Owner » Hymannn
💧Bailyes » Adiwajshing
⏰Time » ${waktuucapan}
🌊Type » Plugins x Case
💸Saldo » Rp${toRupiah(cekSaldo(sender, db_saldo))}`;

  let wak = `Mannn - DEV || 2023 - 2024`;

  let allMenu = `
*「 Fitur Bot 」*
┏━ ⊑ *OWNER  MENU* ⊒
┃❀ ${prefix}addcase
┃❀ ${prefix}addsaldo
┃❀ ${prefix}minsaldo
┃❀ ${prefix}delsesi
┃❀ ${prefix}upch
┃❀ ${prefix}tovn
┃❀ ${prefix}backup
┃❀ ${prefix}addplug
┃❀ ${prefix}cgplug
┃❀ ${prefix}rmplug
┃❀ ${prefix}getplug
┃❀ ${prefix}public
┃❀ ${prefix}self
┃❀ ${prefix}getcase
┗━━━━━━━━━━━━━━
┏━ ⊑ *EPHOTO  MENU* ⊒
│❀${prefix} glitchtext
│❀${prefix} writetext
│❀${prefix} advancedglow
│❀${prefix} typographytext	
│❀${prefix} pixelglitch
│❀${prefix} neonglitch
│❀${prefix} flagtext
│❀${prefix} flag3dtext
│❀${prefix} deletingtext
│❀${prefix} blackpinkstyle
│❀${prefix} glowingtext
│❀${prefix} underwatertext
│❀${prefix} logomaker
│❀${prefix} cartoonstyle
│❀${prefix} papercutstyle
│❀${prefix} watercolortext
│❀${prefix} effectclouds
│❀${prefix} blackpinklogo
│❀${prefix} gradienttext
│❀${prefix} summerbeach
│❀${prefix} luxurygold
│❀${prefix} multicoloredneon
│❀${prefix} sandsummer
│❀${prefix} galaxywallpaper
│❀${prefix} 1917style
│❀${prefix} makingneon
│❀${prefix} royaltext
│❀${prefix} freecreate	
│❀${prefix} galaxystyle	
│❀${prefix} lighteffects
┗━━━━━━━━━━━━━━
┏━ ⊑ *GAMES  MENU* ⊒
┃❀${prefix}family100
┃❀${prefix}suitpvp
┃❀${prefix}tictactoe
┃❀${prefix}petakbom
┃❀${prefix}tebakgambar
┃❀${prefix}tebakkalimat
┃❀${prefix}tebakkata
┃❀${prefix}tebaklirik
┃❀${prefix}tebakanime
┃❀${prefix}tebaklagu
┃❀${prefix}tebakkimia
┃❀${prefix}tebakbendera
┃❀${prefix}siapakahaku
┃❀${prefix}asahotak
┃❀${prefix}susukata
┃❀${prefix}caklontong
┃❀${prefix}math
┃❀${prefix}tebakgame
┗━━━━━━━━━━━━━━
┏━ ⊑ *STORE  MENU* ⊒
┃❀${prefix}list
┃❀${prefix}addlist
┃❀${prefix}dellist
┃❀${prefix}updatelist
┗━━━━━━━━━━━━━━
┏━ ⊑ *ISLAMMENU  MENU* ⊒
┃❀${prefix}niatsholat
┃❀${prefix}bacaansholat
┃❀${prefix}ayatkursi
┃❀${prefix}asmaulhusna
┃❀${prefix}kisahnabi
┃❀${prefix}jadwalsholat
┗━━━━━━━━━━━━━━
┏━ ⊑ *ANIME  MENU2* ⊒
┃❀${prefix}animeawoo
┃❀${prefix}animemegumin
┃❀${prefix}animeshinobu
┃❀${prefix}animehandhold
┃❀${prefix}animehighfive
┃❀${prefix}animecringe
┃❀${prefix}animedance
┃❀${prefix}animehappy
┃❀${prefix}animeglomp
┃❀${prefix}animesmug
┃❀${prefix}animeblush
┃❀${prefix}animewave
┃❀${prefix}animesmile
┃❀${prefix}animepoke
┃❀${prefix}animewink 
┃❀${prefix}animebonk
┃❀${prefix}animebully
┃❀${prefix}animeyeet
┃❀${prefix}animebite
┃❀${prefix}animelick
┃❀${prefix}animekill
┃❀${prefix}animecry
┃❀${prefix}animewlp
┃❀${prefix}animekiss
┃❀${prefix}animehug
┃❀${prefix}couplepp 
┃❀${prefix}animeneko
┃❀${prefix}animepat
┃❀${prefix}animeslap
┃❀${prefix}animecuddle
┃❀${prefix}animewaifu
┃❀${prefix}animenom
┃❀${prefix}animefoxgirl
┃❀${prefix}animetickle 
┃❀${prefix}animegecg          
┃❀${prefix}dogwoof           
┃❀${prefix}8ballpool            
┃❀${prefix}goosebird 
┃❀${prefix}animefeed            
┃❀${prefix}animeavatar            
┃❀${prefix}lizardpic            
┃❀${prefix}catmeow
┗━━━━━━━━━━━━━━
┏━ ⊑ *ASUPAN  MENU* ⊒
┃┃❀${prefix}tiktokgirl 
┃┃❀${prefix}tiktoknukthy 
┃┃❀${prefix}tiktokkayes
┃┃❀${prefix}tiktokpanrika
┃┃❀${prefix}tiktoknotnot
┃┃❀${prefix}tiktokghea
┃┃❀${prefix}tiktoksantuy
┗━━━━━━━━━━━━━━

┏━ ⊑ *LIBRARY  MENU* ⊒
┃❀ ${prefix}cerpen-anak 
┃❀ ${prefix}cerpen-bahasadaerah 
┃❀ ${prefix}cerpen-bahasainggris 
┃❀ ${prefix}cerpen-bahasajawa 
┃❀ ${prefix}cerpen-bahasasunda
┃❀ ${prefix}cerpen-budaya 
┃❀ ${prefix}cerpen-cinta 
┃❀ ${prefix}cerpen-cintaislami 
┃❀ ${prefix}cerpen-cintapertama 
┃❀ ${prefix}cerpen-cintaromantis 
┃❀ ${prefix}cerpen-cintasedih 
┃❀ ${prefix}cerpen-cintasegitiga 
┃❀ ${prefix}cerpen-cintasejati 
┃❀ ${prefix}cerpen-galau 
┃❀ ${prefix}cerpen-gokil 
┃❀ ${prefix}cerpen-inspiratif 
┃❀ ${prefix}cerpen-jepang 
┃❀ ${prefix}cerpen-kehidupan
┃❀ ${prefix}cerpen-keluarga 
┃❀ ${prefix}cerpen-kisahnyata 
┃❀ ${prefix}cerpen-korea 
┃❀ ${prefix}cerpen-kristen 
┃❀ ${prefix}cerpen-liburan 
┃❀ ${prefix}cerpen-malaysia 
┃❀ ${prefix}cerpen-mengharukan 
┃❀ ${prefix}cerpen-misteri 
┃❀ ${prefix}cerpen-motivasi 
┃❀ ${prefix}cerpen-nasihat 
┃❀ ${prefix}cerpen-nasionalisme 
┃❀ ${prefix}cerpen-olahraga 
┃❀ ${prefix}cerpen-patahhati
┃❀ ${prefix}cerpen-penantian 
┃❀ ${prefix}cerpen-pendidikan 
┃❀ ${prefix}cerpen-pengalaman 
┃❀ ${prefix}cerpen-pengorbanan 
┃❀ ${prefix}cerpen-penyesalan 
┃❀ ${prefix}cerpen-perjuangan 
┃❀ ${prefix}cerpen-perpisahan 
┃❀ ${prefix}cerpen-persahabatan 
┃❀ ${prefix}cerpen-petualangan 
┃❀ ${prefix}cerpen-ramadhan 
┃❀ ${prefix}cerpen-remaja 
┃❀ ${prefix}cerpen-rindu 
┃❀ ${prefix}cerpen-rohani 
┃❀ ${prefix}cerpen-romantis 
┃❀ ${prefix}cerpen-sastra 
┃❀ ${prefix}cerpen-sedih 
┃❀ ${prefix}cerpen-sejarah 
┗━━━━━━━━━━━━━━
┏━ ⊑ *ANIME MENU* ⊒
┃❀${prefix}akira
┃❀${prefix}akiyama
┃❀${prefix}ana
┃❀${prefix}art
┃❀${prefix}asuna
┃❀${prefix}ayuzawa
┃❀${prefix}boruto
┃❀${prefix}bts
┃❀${prefix}chino
┃❀${prefix}chitoge
┃❀${prefix}cosplay
┃❀${prefix}cosplayloli
┃❀${prefix}cosplaysagiri
┃❀${prefix}cyber
┃❀${prefix}deidara
┃❀${prefix}doraemon
┃❀${prefix}elaina
┃❀${prefix}emilia
┃❀${prefix}erza
┃❀${prefix}exo
┃❀${prefix}gamewalpaper 
┃❀${prefix}gremoy
┃❀${prefix}hacker
┃❀${prefix}hestia
┃❀${prefix}hinata
┃❀${prefix}husbu
┃❀${prefix}inori
┃❀${prefix}islamic
┃❀${prefix}isuzu
┃❀${prefix}itachi
┃❀${prefix}itori
┃❀${prefix}jennie
┃❀${prefix}jiso
┃❀${prefix}justina
┃❀${prefix}kaga
┃❀${prefix}kagura
┃❀${prefix}kakasih
┃❀${prefix}kaori
┃❀${prefix}cartoon
┃❀${prefix}shortquete
┃❀${prefix}kaneki
┃❀${prefix}kotori
┃❀${prefix}kurumi
┃❀${prefix}lisa
┃❀${prefix}madara
┃❀${prefix}megumin
┃❀${prefix}mikasa
┃❀${prefix}mikey
┃❀${prefix}miku
┃❀${prefix}minato
┃❀${prefix}mountain
┃❀${prefix}naruto
┃❀${prefix}neko2
┃❀${prefix}nekoanime
┃❀${prefix}nezuko
┃❀${prefix}onepiece
┃❀${prefix}pentol
┃❀${prefix}pokemon
┃❀${prefix}progaming
┃❀${prefix}randomanime
┃❀${prefix}randomanime2
┃❀${prefix}rize
┃❀${prefix}rose
┃❀${prefix}sagiri
┃❀${prefix}sakura
┃❀${prefix}sasuke
┃❀${prefix}satanic
┃❀${prefix}shina
┃❀${prefix}shinka
┃❀${prefix}shinomiya
┃❀${prefix}ahizuka
┃❀${prefix}shota
┃❀${prefix}space
┃❀${prefix}tejina
┃❀${prefix}tecnology
┃❀${prefix}toukachan
┃❀${prefix}sunade
┃❀${prefix}yotsuba
┃❀${prefix}yuki
┃❀${prefix}yulibocil
┃❀${prefix}yumekk
┃
┗━━━━━━━━━━━━━━
┏━ ⊑ *CPANEL MENU* ⊒
┃❀${prefix}listsrv
┃❀${prefix}delsrv
┃❀${prefix}listusr
┃❀${prefix}delusr
┃❀${prefix}addadmin
┃❀${prefix}deladmin
┃❀${prefix}listadmin
┃❀${prefix}cadmin
┃❀${prefix}1gb
┃❀${prefix}2gb
┃❀${prefix}3gb
┃❀${prefix}4gb
┃❀${prefix}5gb
┃❀${prefix}6gb
┃❀${prefix}7gb
┃❀${prefix}8gb
┃❀${prefix}9gb
┃❀${prefix}10gb
┃❀${prefix}unli
┃❀${prefix}suspend
┃❀${prefix}unsuspend
┃❀${prefix}reinstall
┃❀${prefix}startsrv
┃❀${prefix}stopsrv
┃❀${prefix}restartsrv
┗━━━━━━━━━━━━━━
┏━ ⊑ *QUOTES MENU* ⊒
┣» *${prefix}quotesanime* 
┣» *${prefix}quotesbacot* 
┣» *${prefix}quotesbucin* 
┣» *${prefix}quotesmotivasi* 
┣» *${prefix}quotesgalau* 
┣» *${prefix}quotesgombal* 
┣» *${prefix}quoteshacker* 
┣» *${prefix}quotesbijak*
┗━━━━━━━━━━━━━━
┏━ ⊑ *RANDOM MENU* ⊒
│❀${prefix}apakah
│❀${prefix}quotesanime
│❀${prefix}quotesdilan
│❀${prefix}quotesbucin
│❀${prefix}katasindiran
│❀${prefix}katahacker
│❀${prefix}katacinta
│❀${prefix}katabijak 
│❀${prefix}katailham
│❀${prefix}katasenia
│❀${prefix}faktaunik
│❀${prefix}quotesislamic
│❀${prefix}motivasi
│❀${prefix}pantun
│❀${prefix}puisi
│❀${prefix}quotes
│❀${prefix}bisakah
│❀${prefix}bagaimanakah
│❀${prefix}gantengcek
│❀${prefix}cekganteng
│❀${prefix}cantikcek
│❀${prefix}cekcantik
│❀${prefix}sangecek
│❀${prefix}ceksange
│❀${prefix}gaycek
│❀${prefix}cekgay
│❀${prefix}lesbicek
│❀${prefix}ceklesbi
│❀${prefix}kapankah
│❀${prefix}wangy
│❀${prefix}cekmati
┗━━━━━━━━━━━━━━
┏━ ⊑ *TIKTOK MENU* ⊒
┃❀${prefix}tiktokgirl 
│❀${prefix}tiktoknukthy 
│❀${prefix}tiktokkayes
│❀${prefix}tiktokpanrika
│❀${prefix}tiktoknotnot
│❀${prefix}tiktokghea
│❀${prefix}tiktoksantuy
┗━━━━━━━━━━━━━━
┏━ ⊑ *OTHER MENU* ⊒
┃❀${prefix}carbon
│❀${prefix}videydownloader
│❀${prefix}create-model2
│❀${prefix}create-model1
┗━━━━━━━━━━━━━━
┏━ ⊑ *PUSHKONTAK MENU* ⊒
┃❀${prefix}pushkontak
┃❀${prefix}pushkontak2
┃❀${prefix}pushkontakid
┃❀${prefix}pushkontakgc
┃❀${prefix}pushkontakidjd
┃❀${prefix}pushkontakgcjd
┃❀${prefix}savecontact
┃❀${prefix}savecontact2
┃❀${prefix}save
┃❀${prefix}cekidgc
┗━━━━━━━━━━━━━━
┏━ ⊑ *GROUP MENU* ⊒
┃❀${prefix}tagall
┃❀${prefix}hidetag
┃❀${prefix}kick @user
┃❀${prefix}add @user
┃❀${prefix}promote
┃❀${prefix}demote
┃❀${prefix}antilink
┗━━━━━━━━━━━━━━
┏━ ⊑ *STICKER MENU* ⊒
┃❀${prefix}sticker
┃❀${prefix}qx
┃❀${prefix}brat
┃❀${prefix}bratvid
┃❀${prefix}attp
┃❀${prefix}ttp
┗━━━━━━━━━━━━━━
┏━ ⊑ *CHATAI  MENU* ⊒
┃❀${prefix}gpt
┃❀${prefix}gpt4
┃❀${prefix}tts
┃❀${prefix}kurami
┃❀${prefix}ai-rimuru
┃❀${prefix}kyy
┃❀${prefix}codyai
┃❀${prefix}youai
┃❀${prefix}llama
┗━━━━━━━━━━━━━━
┏━ ⊑ *NSFW  MENU* ⊒
┃${prefix}trap
┃❀${prefix}ahegao
┃❀${prefix}animespank
┃❀${prefix}milf
┃❀${prefix}hentai-waifu
┃❀${prefix}hentai-neko
┃❀${prefix}ass
┃❀${prefix}bdsm
┃❀${prefix}blowjob
┃❀${prefix}cuckold
┃❀${prefix}cum
┃❀${prefix}eba
┃❀${prefix}ero
┃❀${prefix}fendom
┃❀${prefix}foot
┃❀${prefix}gangbang
┃❀${prefix}glasses 
┃❀${prefix}jahy
┃❀${prefix}manga
┃❀${prefix}masturbation 
┃❀${prefix}neko-hentai
┃❀${prefix}neko-hentai2
┃❀${prefix}nsfwloli
┃❀${prefix}orgy
┃❀${prefix}panties
┃❀${prefix}pusy
┃❀${prefix}tentacles
┃❀${prefix}thighs
┃❀${prefix}yuri
┃❀${prefix}zettai
┃❀${prefix}gifblowjob
┃❀${prefix}gifhentai
┃❀${prefix}foot
┗━━━━━━━━━━━━━━
┏━┏━ ⊑ *TEXTWANGSAF  MENU* ⊒
┃❀${prefix}fakec1
┃❀${prefix}fakec2
┃❀${prefix}fakec3
┃❀${prefix}fakec4
┃❀${prefix}fakec5
┃❀${prefix}fakec6
┃❀${prefix}fakec7
┃❀${prefix}fakec8
┃❀${prefix}fakec9
┃❀${prefix}fakec10
┃❀${prefix}fakec11
┃❀${prefix}textunbanv1
┃❀${prefix}textunbanv2
┃❀${prefix}textunbanv3
┃❀${prefix}textunbanv4
┃❀${prefix}textunbanv5
┃❀${prefix}textunbanv6
┃❀${prefix}textunbanv7
┃❀${prefix}textunbanv8
┃❀${prefix}textunbanv9
┃❀${prefix}textunbanv10
┃❀${prefix}textunbanv11
┃❀${prefix}textunbanv12
┃❀${prefix}textunbanv13
┃❀${prefix}textunbanv14
┃❀${prefix}textunbanv15
┃❀${prefix}textunbanv16
┃❀${prefix}textunbanv17
┃❀${prefix}textunbanv18
┃❀${prefix}textunbanv19
┃❀${prefix}textunbanv20
┃❀${prefix}textunbanv21
┃❀${prefix}textbanv1
┃❀${prefix}textbanv2
┃❀${prefix}textbanv3
┃❀${prefix}textbanv4
┃❀${prefix}textbanv5
┃❀${prefix}textbanv6
┃❀${prefix}textbanv7
┃❀${prefix}textbanv8
┃❀${prefix}textbanv9
┃❀${prefix}textbanv10
┃❀${prefix}textbanv11
┃❀${prefix}textbanv12
┃❀${prefix}textbanv13
┃❀${prefix}textbanv14
┃❀${prefix}textbanv15
┃❀${prefix}textbanv16
┃❀${prefix}textbanv17
┃❀${prefix}textbanv18
┃❀${prefix}textbanv19
┃❀${prefix}textbanv20
┃❀${prefix}textbanv21
┃❀${prefix}textbanv22
┃❀${prefix}textbanv23
┃❀${prefix}textbanv24
┃❀${prefix}textbanv25
┃❀${prefix}textbanv26
┃❀${prefix}textbanv27
┃❀${prefix}textbanv28
┃❀${prefix}textbanv29
┃❀${prefix}textbanv30
┃❀${prefix}textbanv31
┃❀${prefix}textbanv32
┃❀${prefix}textbanv33
┃❀${prefix}textbanv34
┃❀${prefix}textbanv35
┃❀${prefix}textbanv36
┃❀${prefix}textbanv37
┃❀${prefix}textbanv38
┃❀${prefix}textunbanpremv1
┃❀${prefix}textunbanpremv2
┃❀${prefix}textunbanpremv3
┗━━━━━━━━━━━━━━
  `;

  let message = `${wek}\n\n${allMenu}\n\n${wak}`;

  zanspiw.sendMessage(m.chat, { video: await fs.readFileSync("./v.mp4"),caption: message, fileName: "v.mp4", mimetype: "video/mp4", gifPlayback: true, contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "Mannn md",
								body: 'Created by Hymannn',
								thumbnailUrl: thumbnail,
								sourceUrl: "https://portofoliomannn8124.pages.dev/",
          mimeType: "image/jpeg",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
}
break;


case 'ownermenu': case "menuowner": {
  zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }})
  
  let wow = `👋 Hallo » ${pushname}

*「 Owner menu 」*
1. ${prefix}addcase
2. ${prefix}addsaldo
3. ${prefix}minsaldo
4. ${prefix}delsesi
5. ${prefix}upch
6. ${prefix}tovn
7. ${prefix}backup
8. ${prefix}addplug
9. ${prefix}cgplug
10. ${prefix}rmplug
11. ${prefix}getplug
12. ${prefix}public
13. ${prefix}self
14. ${prefix}getcase

*📮Mannn* adalah bot WhatsApp yang dikembangkan menggunakan NodeJS dan Baileys. Terima kasih atas dukungannya.`;

  m.reply(wow);
}
break;

case 'internetmenu': {
  zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }})
  
  let wow = `👋 Hallo » ${pushname}

*「 Internet Menu 」*
1. ${prefix}play
2. ${prefix}tiktok
3. ${prefix}mp4
4. ${prefix}mp3
5. ${prefix}facebook
6. ${prefix}imgursearch
7. ${prefix}filmsearch
*📮Mannn* adalah bot WhatsApp yang dikembangkan menggunakan NodeJS dan Baileys. Terima kasih atas dukungannya.`;

  m.reply(wow);
}
break;

case 'shopmenu':
case 'marketing': {
  let wow = `👋 Hallo » ${pushname}

*「 Shop Menu 」*
1. ${prefix}alightmotion - Akun Alightmotion Premium, Rp15.000k
2. ${prefix}jasaeditsc - Edit Script WhatsApp, Rp20.000k
3. ${prefix}caraorder - Cara order
4. ${prefix}suntiktiktok - Suntik Tiktok View, Like, Followers
5. ${prefix}vps - VPS Digital Ocean, Harga tersedia

*📮Mannn* adalah bot WhatsApp yang dikembangkan menggunakan NodeJS dan Baileys. Terima kasih atas dukungannya.`;

  m.reply(wow);
}
break;

case 'coganmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(COGANMENU)*
││❀${prefix}jungkook
││❀${prefix}jimin
││❀${prefix}jhope
││❀${prefix}huangzitao
││❀${prefix}dohyungsoo
││❀${prefix}baekhyungsoo
││❀${prefix}kimjondae
││❀${prefix}kimjong
││❀${prefix}kimjunmyeon
││❀${prefix}kimminseok
││❀${prefix}kimnajoon
││❀${prefix}kimsoek
││❀${prefix}kimtaehyung
││❀${prefix}luhan
││❀${prefix}ohsehun
││❀${prefix}parkchanyeol
││❀${prefix}suga
││❀${prefix}wufiyan
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Mannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'ephotomenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(EPHOTOMENU)*
││❀${prefix} glitchtext
││❀${prefix} writetext
││❀${prefix} advancedglow
││❀${prefix} typographytext	
││❀${prefix} pixelglitch
││❀${prefix} neonglitch
││❀${prefix} flagtext
││❀${prefix} flag3dtext
││❀${prefix} deletingtext
││❀${prefix} blackpinkstyle
││❀${prefix} glowingtext
││❀${prefix} underwatertext
││❀${prefix} logomaker
││❀${prefix} cartoonstyle
││❀${prefix} papercutstyle
││❀${prefix} watercolortext
││❀${prefix} effectclouds
││❀${prefix} blackpinklogo
││❀${prefix} gradienttext
││❀${prefix} summerbeach
││❀${prefix} luxurygold
││❀${prefix} multicoloredneon
││❀${prefix} sandsummer
││❀${prefix} galaxywallpaper
││❀${prefix} 1917style
││❀${prefix} makingneon
││❀${prefix} royaltext
││❀${prefix} freecreate	
││❀${prefix} galaxystyle	
││❀${prefix} lighteffects
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Mannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Mannn Botz Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'aimenu': case "menuai":{
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Ai Menu 」*
* ${prefix}ai
* ${prefix}bard
* ${prefix}codyai
* ${prefix}youai
* ${prefix}llama
*Indonesian version*

_Hallo!! Selamat datang Di Menu Mannn Botz Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'gamemenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Game Menu 」*
* ${prefix}tebaklagu
* ${prefix}family100
* ${prefix}kuismath
* ${prefix}tebakgambar
* ${prefix}tebakkata
* ${prefix}caklontong
* ${prefix}tebakkalimat
* ${prefix}tebaklirik
* ${prefix}tebaktebakan
* ${prefix}tebakbendera
* ${prefix}tebakbendera2
* ${prefix}tebakkimia
* ${prefix}asahotak
* ${prefix}siapakahaku
* ${prefix}tebaksusunkata
* ${prefix}tebaktekateki
*📮MannnMd* adalah bot WhatsApp yang dikembangkan dengan menggunakan NodeJS dan Baileys. Terima kasih.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'nsfwmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 nsfw Menu 」*
* ${prefix}trap
* ${prefix}ahegao
* ${prefix}animespank
* ${prefix}milf
* ${prefix}hentai-waifu
* ${prefix}hentai-neko
* ${prefix}ass
* ${prefix}bdsm
* ${prefix}blowjob
* ${prefix}cuckold
* ${prefix}cum
* ${prefix}eba
* ${prefix}ero
* ${prefix}fendom
* ${prefix}foot
* ${prefix}gangbang
* ${prefix}glasses 
* ${prefix}jahy
* ${prefix}manga
* ${prefix}masturbation 
* ${prefix}neko-hentai
* ${prefix}neko-hentai2
* ${prefix}nsfwloli
* ${prefix}orgy
* ${prefix}panties
* ${prefix}pusy
* ${prefix}tentacles
* ${prefix}thighs
* ${prefix}yuri
* ${prefix}zettai
* ${prefix}gifblowjob
* ${prefix}gifhentai
* ${prefix}foot

*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'animemenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Anime Menu 」*
* ${prefix}akira
* ${prefix}akiyama
* ${prefix}ana
* ${prefix}art
* ${prefix}asuna
* ${prefix}ayuzawa
* ${prefix}boruto
* ${prefix}bts
* ${prefix}chino
* ${prefix}chitoge
* ${prefix}cosplay
* ${prefix}cosplayloli
* ${prefix}cosplaysagiri
* ${prefix}cyber
* ${prefix}deidara
* ${prefix}doraemon
* ${prefix}elaina
* ${prefix}emilia
* ${prefix}erza
* ${prefix}exo
* ${prefix}gamewalpaper 
* ${prefix}gremoy
* ${prefix}hacker
* ${prefix}hestia
* ${prefix}hinata
* ${prefix}husbu
* ${prefix}inori
* ${prefix}islamic
* ${prefix}isuzu
* ${prefix}itachi
* ${prefix}itori
* ${prefix}jennie
* ${prefix}jiso
* ${prefix}justina
* ${prefix}kaga
* ${prefix}kagura
* ${prefix}kakasih
* ${prefix}kaori
* ${prefix}cartoon
* ${prefix}shortquete
* ${prefix}kaneki
* ${prefix}kotori
* ${prefix}kurumi
* ${prefix}lisa
* ${prefix}madara
* ${prefix}megumin
* ${prefix}mikasa
* ${prefix}mikey
* ${prefix}miku
* ${prefix}minato
* ${prefix}mountain
* ${prefix}naruto
* ${prefix}neko2
* ${prefix}nekoanime
* ${prefix}nezuko
* ${prefix}onepiece
* ${prefix}pentol
* ${prefix}pokemon
* ${prefix}progaming
* ${prefix}randomanime
* ${prefix}randomanime2
* ${prefix}rize
* ${prefix}rose
* ${prefix}sagiri
* ${prefix}sakura
* ${prefix}sasuke
* ${prefix}satanic
* ${prefix}shina
* ${prefix}shinka
* ${prefix}shinomiya
* ${prefix}ahizuka
* ${prefix}shota
* ${prefix}space
* ${prefix}tejina
* ${prefix}tecnology
* ${prefix}toukachan
* ${prefix}sunade
* ${prefix}yotsuba
* ${prefix}yuki
* ${prefix}yulibocil
* ${prefix}yumekk


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'rpgmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Rpg Menu 」*
* ${prefix}mining
* ${prefix}inventory
* ${prefix}sell
* ${prefix}hunting
* ${prefix}leaderboard
* ${prefix}buy/beli
* ${prefix}mancingikan
* ${prefix}jualikan
* ${prefix}belipancing
* ${prefix}totalikan
* ${prefix}lihattangkapan
* ${prefix}joinperang
* ${prefix}shoot
* ${prefix}statustentara
* ${prefix}senjatareload
* ${prefix}cleanupperang
* ${prefix}mulaidungeon
* ${prefix}joinDungeon
* ${prefix}exploredungeon
* ${prefix}cleanupdungeon
* ${prefix}mulaitank
* ${prefix}joinperangtank
* ${prefix}aksitank
* ${prefix}statustank
* ${prefix}cleanuptank

*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;
case 'soundmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Sound Menu 」*
* ${prefix}sound1
* ${prefix}sound2
* ${prefix}sound3
* ${prefix}sound4
* ${prefix}sound5
* ${prefix}sound6
* ${prefix}sound7
* ${prefix}sound8
* ${prefix}sound9
* ${prefix}sound10
* ${prefix}sound11
* ${prefix}sound12
* ${prefix}sound13
* ${prefix}sound14
* ${prefix}sound15
* ${prefix}sound16
* ${prefix}sound17
* ${prefix}sound18
* ${prefix}sound19
* ${prefix}sound20
* ${prefix}sound21
* ${prefix}sound22

*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'animemenuv2': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Animev2 Menu 」*
• ${prefix}animeawoo
• ${prefix}animemegumin
• ${prefix}animeshinobu
• ${prefix}animehandhold
• ${prefix}animehighfive
• ${prefix}animecringe
• ${prefix}animedance
• ${prefix}animehappy
• ${prefix}animeglomp
• ${prefix}animesmug
• ${prefix}animeblush
• ${prefix}animewave
• ${prefix}animesmile
• ${prefix}animepoke
• ${prefix}animewink 
• ${prefix}animebonk
• ${prefix}animebully
• ${prefix}animeyeet
• ${prefix}animebite
• ${prefix}animelick
• ${prefix}animekill
• ${prefix}animecry
• ${prefix}animewlp
• ${prefix}animekiss
• ${prefix}animehug
• ${prefix}couplepp 
• ${prefix}animeneko
• ${prefix}animepat
• ${prefix}animeslap
• ${prefix}animecuddle
• ${prefix}animewaifu
• ${prefix}animenom
• ${prefix}animefoxgirl
• ${prefix}animetickle 
• ${prefix}animegecg          
• ${prefix}dogwoof           
• ${prefix}8ballpool            
• ${prefix}goosebird 
• ${prefix}animefeed            
• ${prefix}animeavatar            
• ${prefix}lizardpic            
• ${prefix}catmeow

*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'panelmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 Panel Menu 」*
⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}tutorial
⭔${prefix}ramlist
⭔${prefix}premlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}updatesrv
⭔${prefix}suspend *id*
⭔${prefix}unsuspend *id*
⭔${prefix}crateadmin
⭔${prefix}listadmin
*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'textWangsaf': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「 text Menu 」*
● ${prefix}fakec1
● ${prefix}fakec2
● ${prefix}fakec3
● ${prefix}fakec4
● ${prefix}fakec5
● ${prefix}fakec6
● ${prefix}fakec7
● ${prefix}fakec8
● ${prefix}fakec9
● ${prefix}fakec10
● ${prefix}fakec11
● ${prefix}textunbanv1
● ${prefix}textunbanv2
● ${prefix}textunbanv3
● ${prefix}textunbanv4
● ${prefix}textunbanv5
● ${prefix}textunbanv6
● ${prefix}textunbanv7
● ${prefix}textunbanv8
● ${prefix}textunbanv9
● ${prefix}textunbanv10
● ${prefix}textunbanv11
● ${prefix}textunbanv12
● ${prefix}textunbanv13
● ${prefix}textunbanv14
● ${prefix}textunbanv15
● ${prefix}textunbanv16
● ${prefix}textunbanv17
● ${prefix}textunbanv18
● ${prefix}textunbanv19
● ${prefix}textunbanv20
● ${prefix}textunbanv21
● ${prefix}textbanv1
● ${prefix}textbanv2
● ${prefix}textbanv3
● ${prefix}textbanv4
● ${prefix}textbanv5
● ${prefix}textbanv6
● ${prefix}textbanv7
● ${prefix}textbanv8
● ${prefix}textbanv9
● ${prefix}textbanv10
● ${prefix}textbanv11
● ${prefix}textbanv12
● ${prefix}textbanv13
● ${prefix}textbanv14
● ${prefix}textbanv15
● ${prefix}textbanv16
● ${prefix}textbanv17
● ${prefix}textbanv18
● ${prefix}textbanv19
● ${prefix}textbanv20
● ${prefix}textbanv21
● ${prefix}textbanv22
● ${prefix}textbanv23
● ${prefix}textbanv24
● ${prefix}textbanv25
● ${prefix}textbanv26
● ${prefix}textbanv27
● ${prefix}textbanv28
● ${prefix}textbanv29
● ${prefix}textbanv30
● ${prefix}textbanv31
● ${prefix}textbanv32
● ${prefix}textbanv33
● ${prefix}textbanv34
● ${prefix}textbanv35
● ${prefix}textbanv36
● ${prefix}textbanv37
● ${prefix}textbanv38
● ${prefix}textunbanpremv1
● ${prefix}textunbanpremv2
● ${prefix}textunbanpremv3

*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Mannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Mannn, Enjoy our Botz Features_.`;
    zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;


case 'alightmotion':
case 'alightprem': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

𝗋𝖾𝗌𝖾𝗅𝗅𝖾𝗋 𝗮𝗅𝗂𝗀𝗁𝗍 𝗆𝗈𝗍𝗂𝗈𝗇 🪷
 ──────────
𖥻 ֺ ·─ ❥︎ 𝗃𝗈𝗂𝗇 ⨾ *𓊆 15.000 𓊇*
⊹ ►. Dapat harga AM 15.000k, dan promo setiap Jumat 12.000k
⊹ ►. Proses 5 - 30 menit max 1x24 jam
⊹ ►. Bergaransi 15 hari
⊹ ►. Bonus kebsos murah berawal 10.000k.`;
    zanspiw.sendMessage(m.chat, { text: wow });
}
break;
 case "facebook": case "fb": {
if (!text.includes("facebook.com")) return m.reply("Masukan link facebook!")
try {
  axios({ "method": "GET", "url": `${global.xyro}facebook?url=${text}&apikey=${global.xyiroapi}`}).then(_ => {
    zanspiw.sendMessage(m.chat, { video: { url: (pickRandom(_.data.result.result)).url}, caption: "Ini dia kak" }, { quoted: m })
  })
} catch ({ message }) {
  m.reply(message)
}
}
break
case 'ig':
case 'igdl':
case 'instagram': {

if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('instagram.com')) return m.reply('Harus berupa link instagram!')
zanspiw.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jor = await fetchJson(`https://skizo.tech/api/igdl?apikey=${skizapi}&url=${text}`)
return await zanspiw.sendMessage(m.chat, { video: { url: jor.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await igdown(text)
let c = 0
for (let gom of anu.data) {
if (gom.type === 'video') return await zanspiw.sendMessage(m.chat, { video: { url: gom.url }, caption: `© ${wm}` }, { quoted: m })
if (gom.type === 'image') {
if (c === 0) await zanspiw.sendMessage(m.chat, { image: { url: gom.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await zanspiw.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada igdown:', err)
try {
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
return await zanspiw.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API aemt.me:', err)
m.reply('Terjadi kesalahan')
}}
}}
break
case 'tiktok':
case 'tt': {
  async function tiktokk(url) {
  try {
    const response = await req('https://ttsave.app/download', {
      method: "POST",
      params: {
      query: url,
      language_id: '1'
    },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      }
  });
    const html = response.content;
    const $ = cheerio.load(html);
    const creator = $('h2.font-extrabold.text-xl').text().trim();
    const videoTitle = $('p.text-gray-600').text().trim();
    const downloadLinks = {
      "nowm": '',
      "wm": '',
      "audio": '',
      "profile": '',
      "cover": ''
    };
    $('a[onclick^="bdl"]').each((i, element) => {
      const linkType = $(element).attr('type');
      const linkUrl = $(element).attr('href');

      if (linkType === 'no-watermark') downloadLinks.nowm = linkUrl;
      if (linkType === 'watermark') downloadLinks.wm = linkUrl;
      if (linkType === 'audio') downloadLinks.audio = linkUrl;
      if (linkType === 'profile') downloadLinks.profile = linkUrl;
      if (linkType === 'cover') downloadLinks.cover = linkUrl;
    });
    const result = {
      creator: creator,
      vtname: videoTitle,
      download: downloadLinks
    };
return result
  } catch (error) {
    console.error('Error:', error);
  }
}
  if (!text) return reply(`Contoh: ${prefix + command} link`);
var t = m.text
 await m.reply("Memuat video...")
let src = await tiktokk(t)
if (!src) return await m.reply("Maaf server Error")
await m.reply(`Creator: ${src.creator}
Vid title ${src.vtname}`)
await zanspiw.sendMessage(m.chat, { video: { url: src.download.nowm},
caption: "Ni video nya",
mimeType: "video/mp4",
fileName: `${src.vtname}.mp4`
}, { quoted: m})
}
break;

case 'suntiktiktok': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}
 *人⁠  ׅ ۫ ⑅ ᥣіst kеbutuhɑn tіktоk ✯ ׅ ۫ ੭* 

 *𓄯 ✧ ࣪ 𓈒 𝖿оᥣᥣs tіktоk nо rе𝖿іᥣ*

𖹭 ࣪ ⑅ ᤻ 100 *𝖿᥆ᥣᥣᥕs* : 3.000
𖹭 ࣪ ⑅ ᤻ 200 *𝖿᥆ᥣᥣᥕs* : 5.000 
𖹭 ࣪ ⑅ ᤻ 300 *𝖿᥆ᥣᥣᥕs* : 7.000
𖹭 ࣪ ⑅ ᤻ 400 *𝖿᥆ᥣᥣᥕs* : 9.000
𖹭 ࣪ ⑅ ᤻ 500 *𝖿᥆ᥣᥣᥕs* : 11.000
𖹭 ࣪ ⑅ ᤻ 1000 *𝖿᥆ᥣᥣᥕs* : 18.000

 *𓄯 ✷ ࣪ 𓈒 𝖿оᥣᥣs tіktоk rе𝖿іᥣ 30 dɑуs* 

𖹭 ࣪ ⑅ ᤻ 100 *𝖿᥆ᥣᥣᥕs* : 5.000
𖹭 ࣪ ⑅ ᤻ 200 *𝖿᥆ᥣᥣᥕs* : 7.000
𖹭 ࣪ ⑅ ᤻ 300 *𝖿᥆ᥣᥣᥕs* : 9.000
𖹭 ࣪ ⑅ ᤻ 400 *𝖿᥆ᥣᥣᥕs* : 11.000
𖹭 ࣪ ⑅ ᤻ 500 *𝖿᥆ᥣᥣᥕs* : 13.000
𖹭 ࣪ ⑅ ᤻ 1000 *𝖿᥆ᥣᥣᥕs* : 20.000

 *𓄯 ✿ ࣪ 𓈒 ᥣіkе tіktоk nо rе𝖿іᥣ* 

𖹭 ࣪ ⑅ ᤻ 100 *ᥣіkᥱ* : 800p
𖹭 ࣪ ⑅ ᤻ 200 *ᥣіkᥱ* : 1.000
𖹭 ࣪ ⑅ ᤻ 300 *ᥣіkᥱ* : 2.000
𖹭 ࣪ ⑅ ᤻ 400 *ᥣіkᥱ* : 3.000
𖹭 ࣪ ⑅ ᤻ 500 *ᥣіkᥱ* : 4.000
𖹭 ࣪ ⑅ ᤻ 1000 *ᥣіkᥱ* : 8.000

 *𓄯 θ ࣪ 𓈒 ᥣіkе tіktоk rе𝖿іᥣ 30 dɑуs* 

𖹭 ࣪ ⑅ ᤻ 100 *ᥣіkᥱ* : 1.000
𖹭 ࣪ ⑅ ᤻ 200 *ᥣіkᥱ* : 2.000
𖹭 ࣪ ⑅ ᤻ 300 *ᥣіkᥱ* : 3.000
𖹭 ࣪ ⑅ ᤻ 400 *ᥣіkᥱ* : 4.000
𖹭 ࣪ ⑅ ᤻ 500 *ᥣіkᥱ* : 5.000
𖹭 ࣪ ⑅ ᤻ 1000 *ᥣіkᥱ* : 10.000

 *𓄯 人 ࣪ 𓈒 vіеws tіktоk* 

𖹭 ࣪ ⑅ ᤻ 100 *᥎іᥱᥕs* : 500⍴
𖹭 ࣪ ⑅ ᤻ 200 *᥎іᥱᥕs* : 1.000
𖹭 ࣪ ⑅ ᤻ 300 *᥎іᥱᥕs* : 1.500
𖹭 ࣪ ⑅ ᤻ 400 *᥎іᥱᥕs* : 2.000
𖹭 ࣪ ⑅ ᤻ 500 *᥎іᥱᥕs* : 2.500
𖹭 ࣪ ⑅ ᤻ 1000 *᥎іᥱᥕs* : 5.000

 *𓄯 ʘ ࣪ 𓈒 shɑrе tіktоk* 

𖹭 ࣪ ⑅ ᤻ 100 *sһᥲrᥱ* : 800⍴
𖹭 ࣪ ⑅ ᤻ 200 *sһᥲrᥱ* : 1.500
𖹭 ࣪ ⑅ ᤻ 300 *sһᥲrᥱ* : 2.000
𖹭 ࣪ ⑅ ᤻ 400 *sһᥲrᥱ* : 2.500
𖹭 ࣪ ⑅ ᤻ 500 *sһᥲrᥱ* : 3.000
𖹭 ࣪ ⑅ ᤻ 1000 *sһᥲrᥱ* : 6.000

 *𓄯 ⁠❛ ࣪ 𓈒 sɑvе/dоwnᥣоɑd tіkok* 

𖹭 ࣪ ⑅ ᤻ 100 *sᥲ᥎ᥱ* : 500⍴
𖹭 ࣪ ⑅ ᤻ 200 *sᥲ᥎ᥱ* : 1.000
𖹭 ࣪ ⑅ ᤻ 300 *sᥲ᥎ᥱ* : 1.500
𖹭 ࣪ ⑅ ᤻ 400 *sᥲ᥎ᥱ* : 2.000
𖹭 ࣪ ⑅ ᤻ 500 *sᥲ᥎ᥱ* : 2.500
𖹭 ࣪ ⑅ ᤻ 1000 *sᥲ᥎ᥱ* : 5.000

 *𓄯  ⁠ਊ⁠  ࣪ 𓈒 cоmmеnts tіktоk custоm* 

𖹭 ࣪ ⑅ ᤻ 100 *c𝘰𝗆𝗆ᥱᥒt* : 6.000
𖹭 ࣪ ⑅ ᤻ 200 *c𝘰𝗆𝗆ᥱᥒt* : 12.000
𖹭 ࣪ ⑅ ᤻ 300 *c𝘰𝗆𝗆ᥱᥒt* : 18.000
𖹭 ࣪ ⑅ ᤻ 400 *c𝘰𝗆𝗆ᥱᥒt* : 24.000
𖹭 ࣪ ⑅ ᤻ 1000 *c𝘰𝗆𝗆ᥱᥒt* : 65.000

*𓄯  ⁠ਊ⁠  ࣪ 𓈒 cоmmеnts tіktоk Req* 

𖹭 ࣪ ⑅ ᤻ 1 *c𝘰𝗆𝗆ᥱᥒt* : 7.000
𖹭 ࣪ ⑅ ᤻ 2 *c𝘰𝗆𝗆ᥱᥒt* : 14.000
𖹭 ࣪ ⑅ ᤻ 3 *c𝘰𝗆𝗆ᥱᥒt* : 21.000
𖹭 ࣪ ⑅ ᤻ 4 *c𝘰𝗆𝗆ᥱᥒt* : 30.000
𖹭 ࣪ ⑅ ᤻ 1000 *c𝘰𝗆𝗆ᥱᥒt* : 85.000

 *𓄯 ♪ ࣪ 𓈒 vіеws ᥣіvе strеɑm stɑу 30 mеnіt* 

𖹭 ࣪ ⑅ ᤻ 100 *᥎іᥱᥕs* : 25.000
𖹭 ࣪ ⑅ ᤻ 200 *᥎іᥱᥕs* : 50.000
𖹭 ࣪ ⑅ ᤻ 300 *᥎іᥱᥕs* : 75.000
𖹭 ࣪ ⑅ ᤻ 400 *᥎іᥱᥕs* : 100.000
𖹭 ࣪ ⑅ ᤻ 500 *᥎іᥱᥕs* : 125.000
𖹭 ࣪ ⑅ ᤻ 1000 *᥎іᥱᥕs* : 250.00

⎙ note : 

*⪧ salah link? bukan tanggung jawab admin*
*⪧ akun tidak boleh privat/ganti username*
*⪧ proses 30menit max 24jam*
*⪧ jika dalam 1x24jam belum masuk hub admin*
*⪧ order sabar*
*⪧ comments req ( bisa req komen mau nya apa)*
*⪧ oder= paham!!*
*⪧ all trx no reff!!!*
order?: .caraorder
`;
    zanspiw.sendMessage(m.chat, { text: wow });
}
break;

case 'caraorder':{
zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }})
let wow = `👋Hallo » ${pushname}

 ❥ .. ‘ cara order !
 ㅤ “ 𑁯 ׄ 

ﾟ☞ ✿⁠ pc admin atau tag admin Mannn 
ﾟ☞ ✿⁠ tanyakan stok yang ingin kalian beli terlebih dahulu
ﾟ☞ ✿⁠ jika redi, ketik *pay* di grub
ﾟ☞ ✿⁠ lalu tf ke payment & qr admin 
ﾟ☞ ✿ jika sudah tf..
ﾟ☞ ✿⁠ isi format menyesuaikan pembelian kalian
ﾟ☞ ✿⁠ kirim bukti tf beserta format ke grup

 ㅤⓘ .. 𝗻𝗼𝘁𝗲 — for cara order !

ﾟ☞ ✿. nomor admin wa.me/6282199509537
ﾟ☞ ✿. all trx noreff jika sudah melakukan pay, jadi wajib tanyakan stok terlebih dahulu sebelum melakukan pay.
ﾟ☞ ✿. Setiap transaksi wajib mengunakan keterangan dengan kata *(kalian mau pesan apa)*.`
m.reply(wow)
}
break

case 'jasaeditsc':
case 'editscript':{
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ciaa xyzz\nORG: Mannn\nTITLE:soft\nitem1.TEL;waid=628974719922:628974719922\nitem1.X-ABLabel:Ponsel\nitem2.URL:https://www.youtube.com/@muhilman03\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: compakzii@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }})
let wow = `👋Hallo » ${pushname}

*📌 Jasa Edit Script Bot*

Optimalkan interaksi bisnis Anda dengan layanan edit script bot WhatsApp kami. Kami siap membantu Anda membuat komunikasi yang lebih responsif dan personal, mulai dasar dari 20,000 dan akan menyesuaikan dengan kualitas. Segera hubungi untuk solusi terbaik

> Developer Only Script WhatsApp.
order?: .caraorder`
m.reply(wow)
const sentMsg = await zanspiw.sendMessage(m.chat, {
contacts: {
displayName: author,
contacts: [{ vcard }],
}}, { quoted: m });
zanspiw.sendMessage(from, { text : `Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: m })
}
break

case 'vps':
case 'vpsocen':{
    let wow = `*🛒PILIH VPS YANG MAU DI BUY*

☁️ *Vps Ram 1 Core 1* - 15.000k
List Harga Vps Digital Ocean ✅

☁️ *Vps Ram 2 Core 2* - 27.000k
List Harga Vps Digital Ocean ✅

☁️ *Vps Ram 4 Core 2* - 35.000k
List Harga Vps Digital Ocean ✅

☁️ *Vps Ram 8 Core 4* - 47.320k
List Harga Vps Digital Ocean ✅

☁️ *Vps Ram 16 Core 4* - 52.000k
List Harga Vps Digital Ocean ✅

Ketik .caraorder untuk informasi lebih lanjut.`
    
    await zanspiw.sendMessage(m.chat, { text: wow });
}
break


//===================[ TEMPAT CASE MENU STORE ]=====================\\
case 'list': case 'store': {
	zanspiw.sendMessage(from, {
		react: {
			text: "🧐",
			key: m.key
		}
	})
	if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
	if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
	let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
	for (let i of db_respon_list) {
		if (i.id === m.chat) {
			teks += `- ${i.key.toUpperCase()}\n`
		}
	}
	teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
	zanspiw.sendMessage(m.chat, {
		text: teks,
		mentions: [m.sender]
	}, {
		quoted: m
	})
}
break
        
//=========================\\
case 'addlist':
if (!isCreator) return reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return reply("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return reply(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await quoted.download()
mem = await uploadFile(media, "img.jpg")
addResponList(m.chat, args1, args2, true, mem, db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Successful Add List With Key : *${args1}*`)
}
break
//=========================\\
case 'dellist':
if (!isCreator) return reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return reply("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!q) return reply(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(m.chat, q, db_respon_list)) return reply(`Item list by Name *${q}* not in the database!`)
delResponList(m.chat, q, db_respon_list)
reply(`Successfully delete list message with key *${q}*`)
break
//=========================\\
case 'updatelist': case 'update':
zanspiw.sendMessage(from, {
	react: {
		text: "🧐",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let imgsrc = await uploadFile(await quoted.download(), "img.jpg")
			updateResponList(m.chat, args1, args2, true, imgsrc, db_respon_list)
			reply(`Sukses update respon list dengan key *${args1}*`)
} else {
	updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
	reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
 case 'sell': case 'jual':{
 if (!q) reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
 case 'mining': case 'mine':{
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
zanspiw.sendMessage(m.chat, { image: { url: './baseoka/image/tambang.jpg' }, caption: caption }, { quoted: m })
}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
 case 'leaderboard':
{ 
let txt = ` *LEADERBOARD* \n\n`
for (let i of _buruan){
txt += `*🐾ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
 case 'heal':{
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break
case 'hunt': case 'hunting': case 'berburu':{
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './baseoka/image/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./baseoka/image/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './baseoka/image/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './baseoka/image/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './baseoka/image/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './baseoka/image/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
zanspiw.sendMessage(m.chat, { image: { url: image }, caption: teksehmazeh }, { quoted: m })
}, 5000)
setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'inventori': case 'inventory': case 'profile':{
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*🌡️Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*⛓️Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🎗️Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*🔰Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*🌟Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
//=========================\\
case 'proses': {
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];
	reply(`✧━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *PROSES*

*TUNGGU BANG* ${namastore} *PROSES YA KAK*`)
}
break
case 'done': {
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];
	reply(`✧━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

*TERIMA KASIH TELAH ORDER DI* ${namastore} *JANGAN LUPA ORDER LAGI YA*🙏`)
}
break
//===================[ TEMPAT CASE MENU AI ]=====================\\
case 'luminai': {
	zanspiw.sendMessage(from, {
		react: {
			text: "🧐",
			key: m.key
		}
	})
	if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
	const requestData = {
		content: text,
		user: m.sender
	};
	const quoted = m && (m.quoted || m);
	try {
		let response;
		if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
			requestData.imageBuffer = await quoted.download();
		}
		response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
		m.reply(response);
	} catch (err) {
		m.reply(err);
	}
}
break

//=========================\\

case 'gpt4': {
  if (!text) return reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://zanspiwteverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Mannn, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
reply(kanjuthann)
}
break

case "tts": {
if (!text) return m.reply(`[ ! ] ${prefix}${command} halo world`);
const a = await (
await axios.post(
"https://gesserit.co/api/tiktok-tts",
{ text: text, voice: "id_001" },
{
headers: {
Referer: "https://gesserit.co/tiktok",
"User-Agent":
"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
responseType: "arraybuffer",
},
},
)
).data;
const b = Buffer.from(a.audioUrl);
zanspiw.sendMessage(m.chat, {
audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
mimetype: "audio/mpeg",
})
}
break
case 'brat': {
  const quo = args.length >= 1 
    ? args.join(" ") 
    : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;

  if (!quo) return m.reply("Masukkan teksnya woi!");

  try {
    const res = await fetch(`https://fgsi-brat.hf.space/?text=${encodeURIComponent(quo)}`);
    if (!res.ok) throw new Error("Failed to fetch from API");

    const buf = await res.buffer();
    await zanspiw.sendImageAsSticker(m.chat, buf, m, { 
      packname: "MANNN MD", 
      author: "Hymannn" 
    });
  } catch (error) {
    m.reply(`Error: ${error.message || error}`);
  }
}
break;

case 'kurumi': {

  if (!text) return reply(`Hai, apa yang kamu hari ini?`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};

const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

const prompt = `Nama kamu adalah Kurumi, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;

    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);

        if (response) {

            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {

            zanspiw.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);

        zanspiw.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }

    try {

        let res = await generateVoice(messagee)
await reply(messagee)
        if (res) await zanspiw.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await reply(e)
    }

}
break


case "kyy": {
zanspiw.sendMessage(from, {react: {text: "🧐", key: m.key}})
  if (!text) {
    return reply(`Contoh: ${prefix + command} hai luminai`);
  }
  const prompt = "mulai dari sekarang nama anda adalah Mannn, anda adalah seorang kecerdasan buatan yang di buat oleh a. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    reply(response);
  } catch (err) {
    reply(err.toString());
  }
}
break;

case "gpt":{
addCountCmd('#gpt', m.sender, _cmd)
if (!text) return reply('Apa itu peta')
zanspiw.sendMessage(m.chat, { react: { text: "👾", key: m.key, }})
let gpt = await fetchJson(`https://widipe.com/v3/gpt4?text=${text}`)
let hasil = gpt.result
reply(`RESULT BY: *CHATGPTV3*\n\n${hasil}`)
}
break


//========BERITAMENU=======\\
case 'fajar':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':

CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':

if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':

CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':

TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':

IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':

KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':

DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':

DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':

iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':

OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':

SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':

TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':

AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":

KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":

MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'ai': 
case 'chatgpt':
case 'zansai': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai zans`)
let result = await (await fetch(`${global.xyro}openai?query=${text}&prompt=kamu+adalah+zans+ai&apikey=${global.xyiroapi}`)).json()
console.log(result)
const gpt = result.result
m.reply(gpt)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'simi':
case 'simisimi': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai simi`)
let result = await fetchJson(`https://skizo.tech/api/simi?apikey=${skizapi}
&text=${encodeURIComponent(full_args)}&level=1`)
const simi = `${result.result}`
if (simi === "undefined") return m.reply('Hah? Maksud?')
m.reply(`${simi} ${emji}`)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break


case 'hd':
  case 'remini':{
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
reply(mess.wait)
const { remini } = require('../lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
zanspiw.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
}
break
//===================[ TEMPAT CASE MENU OWNER ]=====================\\
case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ciaa xyzz\nORG: Hymannn\nTITLE:soft\nitem1.TEL;waid=628974719922:628974719922\nitem1.X-ABLabel:Ponsel\nitem2.URL:https://www.youtube.com/@muhilman03\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: compakzii@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
const sentMsg = await zanspiw.sendMessage(m.chat, {
      contacts: {
        displayName: author,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R",
          body: "",
          thumbnailUrl: `https://8030.us.kg/file/3tvq2yY8rGtK.jpg`,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        }}}, { quoted: fkontak });
}
break
case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Sukses Change To Public Mode')
}
break

case 'editcase':
    if (!q) return reply('Mana case yang ingin diedit? Format: .editcase case \'namafitur\':\n\n<kode baru>');
    if (!isCreator) return reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return reply('Format tidak benar. Contoh: .editcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); 

   
    const filenyabang = path.join(__dirname, './stik/message.js');

    try {
        
        let data = fs.readFileSync(filenyabang, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

           
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                const updatedCode = `case '${caseName}':\n${newCode}\n`;
                data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
                fs.writeFileSync(filenyabang, data, 'utf8');
                reply(`Succesfully update case ${q}!`);
            } else {
                reply('Break nya ga ke detek.');
            }
        } else {
            reply('Sorry, case nya gada di file message.js');
        }
    } catch (err) {
        console.error(err);
        reply('Eror bang, silahkan cek console untuk lihat apa yang eror');
    }
    break;

case 'addprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				zanspiw.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				zanspiw.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
						}
					}
				break;


case 'ramlist': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

*「Ramlist」*
❀ ${prefix}1gb
❀ ${prefix}2gb
❀ ${prefix}3gb
❀ ${prefix}4gb
❀ ${prefix}5gb
❀ ${prefix}6gb
❀ ${prefix}7gb
❀ ${prefix}8gb
❀ ${prefix}unli

`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'librarymenu': {
 zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
 let wow = `👋Hallo » ${pushname}

*「 Library Menu 」*
┏❐『 Library 』
┃❀ ${prefix}cerpen-anak 
┃❀ ${prefix}cerpen-bahasadaerah 
┃❀ ${prefix}cerpen-bahasainggris 
┃❀ ${prefix}cerpen-bahasajawa 
┃❀ ${prefix}cerpen-bahasasunda
┃❀ ${prefix}cerpen-budaya 
┃❀ ${prefix}cerpen-cinta 
┃❀ ${prefix}cerpen-cintaislami 
┃❀ ${prefix}cerpen-cintapertama 
┃❀ ${prefix}cerpen-cintaromantis 
┃❀ ${prefix}cerpen-cintasedih 
┃❀ ${prefix}cerpen-cintasegitiga 
┃❀ ${prefix}cerpen-cintasejati 
┃❀ ${prefix}cerpen-galau 
┃❀ ${prefix}cerpen-gokil 
┃❀ ${prefix}cerpen-inspiratif 
┃❀ ${prefix}cerpen-jepang 
┃❀ ${prefix}cerpen-kehidupan
┃❀ ${prefix}cerpen-keluarga 
┃❀ ${prefix}cerpen-kisahnyata 
┃❀ ${prefix}cerpen-korea 
┃❀ ${prefix}cerpen-kristen 
┃❀ ${prefix}cerpen-liburan 
┃❀ ${prefix}cerpen-malaysia 
┃❀ ${prefix}cerpen-mengharukan 
┃❀ ${prefix}cerpen-misteri 
┃❀ ${prefix}cerpen-motivasi 
┃❀ ${prefix}cerpen-nasihat 
┃❀ ${prefix}cerpen-nasionalisme 
┃❀ ${prefix}cerpen-olahraga 
┃❀ ${prefix}cerpen-patahhati
┃❀ ${prefix}cerpen-penantian 
┃❀ ${prefix}cerpen-pendidikan 
┃❀ ${prefix}cerpen-pengalaman 
┃❀ ${prefix}cerpen-pengorbanan 
┃❀ ${prefix}cerpen-penyesalan 
┃❀ ${prefix}cerpen-perjuangan 
┃❀ ${prefix}cerpen-perpisahan 
┃❀ ${prefix}cerpen-persahabatan 
┃❀ ${prefix}cerpen-petualangan 
┃❀ ${prefix}cerpen-ramadhan 
┃❀ ${prefix}cerpen-remaja 
┃❀ ${prefix}cerpen-rindu 
┃❀ ${prefix}cerpen-rohani 
┃❀ ${prefix}cerpen-romantis 
┃❀ ${prefix}cerpen-sastra 
┃❀ ${prefix}cerpen-sedih 
┃❀ ${prefix}cerpen-sejarah 
┗❐
*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case "runtime":
			case "tes":
			case "bot":
				{
					if (text && text.startsWith("--") && isCreator) {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Bot Settings",
											rows: [
												{ title: "Anti Call On🟢", description: "Mengaktifkan Anti Call", id: ".bot anticall on" },
												{ title: "Anti Call Off🔴", description: "Mematikan Anti Call", id: ".bot anticall off" },
												{ title: "Auto Bio On🟢", description: "Mengaktifkan Auto Bio", id: ".bot autobio on" },
												{ title: "Auto Bio Off🔴", description: "Mematikan Auto Bio", id: ".bot autobio off" },
												{ title: "Auto Read On🟢", description: "Mengaktifkan Auto Read", id: ".bot autoread on" },
												{ title: "Auto Read Off🔴", description: "Mematikan Auto Read", id: ".bot autoread off" },
												{ title: "Auto Type On🟢", description: "Mengaktifkan Auto Type", id: ".bot autotype on" },
												{ title: "Auto Type Off🔴", description: "Mematikan Auto Type", id: ".bot autotype off" },
												{ title: "Read SW On🟢", description: "Mengaktifkan Read SW", id: ".bot readsw on" },
												{ title: "Read SW Off🔴", description: "Mematikan Read SW", id: ".bot readsw off" },
												{
													title: "Multi Prefix On🟢",
													description: "Mengaktifkan Multi Prefix",
													id: ".bot multiprefix on",
												},
												{
													title: "Multi Prefix Off🔴",
													description: "Mematikan Multi Prefix",
													id: ".bot multiprefix off",
												},
											],
										},
									],
								},
							},
						]
						await zanspiw.sendButtonMsg(
							m.chat,
							"Bot Settings",
							ucapanWaktu,
							"Silahkan dipilih Owner🫡",
							null,
							buttonnya,
							m,
						)
					} else if (text && isCreator) {
						if (text === "anticall on") (db.set[botNumber].anticall = true), m.reply("Sukses Mengaktifkan Anticall")
						if (text === "anticall off") (db.set[botNumber].anticall = false), m.reply("Sukses Mematikan Anticall")
						if (text === "autobio on") (db.set[botNumber].autobio = true), m.reply("Sukses Mengaktifkan Autobio")
						if (text === "autobio off") (db.set[botNumber].autobio = false), m.reply("Sukses Mematikan Autobio")
						if (text === "autoread on") (db.set[botNumber].autoread = true), m.reply("Sukses Mengaktifkan Autoread")
						if (text === "autoread off") (db.set[botNumber].autoread = false), m.reply("Sukses Mematikan Autoread")
						if (text === "autotype on") (db.set[botNumber].autotyping = true), m.reply("Sukses Mengaktifkan Autotype")
						if (text === "autotype off") (db.set[botNumber].autotyping = false), m.reply("Sukses Mematikan Autotype")
						if (text === "readsw on") (db.set[botNumber].readsw = true), m.reply("Sukses Mengaktifkan Read SW")
						if (text === "readsw off") (db.set[botNumber].readsw = false), m.reply("Sukses Mematikan Read SW")
						if (text === "multiprefix on")
							(db.set[botNumber].multiprefix = true), m.reply("Sukses Mengaktifkan Multiprefix")
						if (text === "multiprefix off")
							(db.set[botNumber].multiprefix = false), m.reply("Sukses Mematikan Multiprefix")
						let settingsBot = Object.entries(db.set[botNumber])
							.map(([key, value]) => {
								let qhk = typeof value === "boolean" ? (value ? "on🟢" : "off🔴") : value
								return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`
							})
							.join("\n")
						if (text === "settings") m.reply(settingsBot)
					} else {
						zanspiw.sendMessage(
							m.chat,
							{ text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` },
							{ quoted: m },
						)
					}
				}
				break;

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmins) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmins) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await zanspiw.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await zanspiw.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break;

case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `══✪〘 *👥 Tag All* 〙✪══
 
                ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                zanspiw.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break;
			
case "delcase":
				{
					if (!isCreator) return m.reply(mess.owner)
					if (!text) return m.reply("Masukkan Nama Casenya!")
					fs.readFile("./stik/Yuhao.js", "utf8", (err, data) => {
						if (err) {
							console.error("Terjadi kesalahan saat membaca file:", err)
							return
						}
						const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, "g")
						const modifiedData = data.replace(regex, "")
						fs.writeFile("./stik/Yuhao.js", modifiedData, "utf8", (err) => {
							if (err) {
								m.reply("Terjadi kesalahan saat menulis file: ", err)
							} else {
								m.reply("Case berhasil dihapus dari file")
							}
						})
					})
				}
				break;

case 'bocchi': {
if (!isCreator) return onlyOwn()
if (!text) return reply(`Contoh: ${prefix+command} Hai, perkenalkan dirimu`)
let kasuami = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`)
zanspiw.sendMessage(m.chat, { text : `${kasuami.result}`}, {quoted:m})
}
break

case 'quotesanime':
case 'quotesanim': {
 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { indo, character, anime } = json.result[0]
 reply(`${indo}\n\n📮By: _${character}_ \nAnime:\n${anime}`)
}
break
//=========================================\\======

case 'quotesbacot': {
function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
 let bacotan = pickRandom(bacot)
 reply(bacotan)
}
break
//=========================================\\======

case 'quotesbucin': {
const bucin = [
 "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
 "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
 "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
 "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
 "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
 "Pacar orang adalah jodoh kita yang tertunda.",
 "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
 "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
 "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
 "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
 "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
 "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
 "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
 "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
 "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
 "Aku ingin menjadi satu-satunya, bukan salah satunya.",
 "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
 "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
 "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
 "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
 "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
 "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
 "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
 "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
 "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
 "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
 "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
 "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
 "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
 "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
 "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
 "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
 "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
 "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
 "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
 "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
 "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
 "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
 "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
 "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
 "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
 "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
 "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
 "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
 "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
 "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
 "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
 "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
 "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
 "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
 "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
 "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
 "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
 "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
 "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
 "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
 "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
 "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
 "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
 "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
 "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
 "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
 "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
 "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
 "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
 "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
 "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
 "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
 "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
 "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
 "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
 "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
 "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
 "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
 "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
 "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
 "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
 "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
 "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
 "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
 "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
 "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
 "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
 "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
 "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
 "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
 "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
 "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
 "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
 "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
 "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
 "Saben dino kegowo ngimpi tapi ora biso nduweni.",
 "Ora ketemu koe 30 dino rasane koyo sewulan.",
 "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
 "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
 "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
 "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
 "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
 "Kanyaah akang moal luntur najan make Bayclean.",
 "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
 "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
 "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
 "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
 "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
 "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
 "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
 "Cukup jaringan aja yang hilang, kamu jangan.",
 "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
 "Musuhku adalah mereka yang ingin memilikimu juga.",
 "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
 "Jam tidurku hancur dirusak rindu.",
 "Cukup China aja yang jauh, cinta kita jangan.",
 "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
 "Cuma satu keinginanku, dicintai olehmu..",
 "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
 "Cukup antartika aja yang jauh. Antarkita jangan."
]
const zanspiwtruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${zanspiwtruth}`)
}
break

case 'quotesmotivasi': {
function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
 reply(`"${motivasii}"`)
}
break

case 'quotesgalau': {
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const galau = [
 "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
 "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
 "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
 "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
 "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
 "Tak semudah itu melupakanmu",
 "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
 "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
 "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
 "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
 "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
 "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
 "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
 "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
 "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
 "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
 "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
 "Tolong jangan pergi saat aku sudah sangat sayang padamu",
 "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
 "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
 "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
 "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
 "Karenamu aku jadi tau cinta yang sesungguhnya",
 "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
 "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
 "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
 "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
 "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
 "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
 "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
 "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
 "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
 "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
 "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
 "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
 "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
 "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
 "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
 "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
 "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
 "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
 "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
 "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
 "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
 "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
 "Aku berdiri disini sendiri menunggu kehadiran dirimu",
 "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
 "Maaf aku lupa ternyata aku bukan siapa-siapa",
 "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
 "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
 "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
 "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
 "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
 "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
 "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
 "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
 "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
 "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
 "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
 "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
 "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
 "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
 "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
 "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
 "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
 "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
 "Dari sekian lama menunggu apa yang sudah didapat",
 "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
 "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
 "Aku terlahir sederhana dan ditinggal sudah biasa",
 "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
 "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
 "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
 "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
 "Jangan paksa aku menjadi cewek seperti seleramu",
 "Hanya yang sabar yang mampu melewati semua kekecewaan",
 "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
 "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
 "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
 "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
 let bacotan = pickRandom(galau)
 reply(bacotan)
}
break

case 'quotesgombal': {
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const gombal = [
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
 "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
 "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
 "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
 "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
 "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
 "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
 "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
 "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
 "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
 "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
 "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
 "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
 "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
 "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
 "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
 "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
 "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
 "Akuu tuh bikin aku ga bisa tidur tau ga?",
 "Soalnya kamu selalu ada dibayang-bayang aku terus.",
 "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
 "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
 "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
 "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
 "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
 "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
 "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
 "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
 "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
 "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
 "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
 "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
 "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
 "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
 "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
 "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
 "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
 "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
 "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
 "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
 "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
 "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
 "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
 "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
 "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
 "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
 "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
 "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
 "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
 "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
 "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
 "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
 "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
 reply(bacotan)

}
break
//=========================================\\======

case 'quoteshacker': {
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const heker = [
 "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
 "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
 "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
 "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
 "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
 "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
 "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
 "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
 "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
 "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
 "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
 "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
 "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
 "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
 "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
 "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
 "SQLI ( Structured Query Love Injection )",
 "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
 "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
 "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
 "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
 "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
 "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
 "Jangan men-dualboot-kan hatiku kepadamu.",
 "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
 "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
 "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
 "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
 reply(bacotan)
}
break

case 'quotesbijak':{
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
 reply(bacotan)
}
break//==================================================================

case 'quotesmenu': {
 zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
 let wow = `👋Hallo » ${pushname}

*「 Quotes Menu 」*
┣» *${prefix}quotesanime* 
┣» *${prefix}quotesbacot* 
┣» *${prefix}quotesbucin* 
┣» *${prefix}quotesmotivasi* 
┣» *${prefix}quotesgalau* 
┣» *${prefix}quotesgombal* 
┣» *${prefix}quoteshacker* 
┣» *${prefix}quotesbijak*
*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'cecanasia': {
 zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
 let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(CECANASIAMENU)*
││❀${prefix} japan
││❀${prefix} korea
││❀${prefix} thailand
││❀${prefix} Indonesia	
││❀${prefix} china
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'artimimpi': case 'tafsirmimpi': {
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break

case 'ramalanjodoh': case 'ramaljodoh': {


 if (!text) throw `Example : ${prefix + command}Hymannn Official , 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//

case 'artinama': {


if (!text) return reply(`Contoh: ${prefix + command}Hymannn Official  Hw`);
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {


 if (!text) return reply(`Contoh: ${prefix + command}Hymann Official , 7, 7, 2005, Putri, 16, 11, 2004`);
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {


if (!text) return reply(`Contoh: ${prefix + command}Hymannn Official  Hw`);
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {


 if (!text) return reply(`Contoh: ${prefix + command}Hymannn Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {


if (!text) return reply(`Contoh: ${prefix + command}Hymann Official |Fani`);
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendImage(from, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {


 if (!text) return reply(`Contoh: ${prefix + command} 6, 12, 2020`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {


 if (!text) return reply(`Contoh: ${prefix + command} 28, 12, 2021`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {


 if (!text) return `reply ('Contoh: ${prefix + command}Hymannn Official , 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {


 if (!text) return `reply ('Contoh: ${prefix + command}HW MODS WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {


 if (!text) return reply(`Contoh: ${prefix + command}Hymannn Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {


 if (!text) return reply(`Contoh: ${prefix + command}Hymannn Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {


if (!text) return reply(`Contoh: ${prefix + command} 12, 1, 2022`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {


 if (!text) return `reply ('Contoh: ${prefix + command}12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {


if (!text) return reply(`Contoh: ${prefix + command} 12, 1, 2022`);
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {


if (!text) return reply(`Contoh: ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`);
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================pri

case 'primbonmenu': {
 zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
 let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(PRIMBONMENU)*
$prefix} ᴀʀᴛɪɴᴀᴍᴀ 
${prefix} ᴀʀᴛɪᴍɪᴍᴘɪ 
${prefix} ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
${prefix} ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
${prefix} ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
${prefix} ʀᴇᴊᴇᴋɪ 
${prefix} ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
${prefix} ᴘᴇᴋᴇʀᴊᴀᴀɴ 
${prefix} ᴀʀᴛɪᴛᴀʀᴏᴛ 
${prefix} ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
${prefix} ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
${prefix} ʜᴀʀɪꜱᴀɴɢᴀʀ 
${prefix} ʜᴀʀɪʙᴀɪᴋ 
${prefix} ꜰᴇɴɢꜱʜᴜɪ 
${prefix} ɴᴀɢᴀʜᴀʀɪ
${prefix} ʜᴀʀɪɴᴀᴀꜱ 
${prefix} ᴡᴇᴛᴏɴ 
${prefix} ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
${prefix} jodoh
${prefix} carikawangc
${prefix} ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
${prefix} namaninja
${prefix} cekkhodam
${prefix} ꜱɪꜰᴀᴛ 
${prefix} ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
${prefix} ᴍᴇᴍᴀɴᴄɪɴɢ 
${prefix} ᴍᴀꜱᴀꜱᴜʙᴜʀ 
${prefix} ᴢᴏᴅɪᴀᴋ 
${prefix} ꜱʜɪᴏ

└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;


case "wallpapersearch": case "wallpaperhd": {
 async function wallpaper(title, page = '1') {
 return new Promise((resolve, reject) => {
 axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
 .then(({ data }) => {
 let $ = cheerio.load(data);
 let hasil = [];
 $('div.grid-item').each(function (a, b) {
 hasil.push({
 title: $(b).find('div.info > a > h3').text(),
 type: $(b).find('div.info > a:nth-child(2)').text(),
 source: 'https://www.besthdwallpaper.com/' + $(b).find('div > a:nth-child(3)').attr('href'),
 image: [
 $(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'),
 $(b).find('picture > source:nth-child(1)').attr('srcset'),
 $(b).find('picture > source:nth-child(2)').attr('srcset')
 ]
 });
 });
 resolve(hasil);
 })
 .catch(error => reject(error));
 });
}
if (!text) return reply("masukan query")
let datas = pickRandom(await wallpaper(text.trim()))
let img = pickRandom(datas.image)
zanspiw.sendMessage(m.chat, { image: { url: img }}, { quoted: m })
}
break
case "detailresep": case "resepdetail": case "resep-d": {
  async function detailresep(query) {
    return new Promise(async(resolve,
        reject) => {
        axios.get(query).then(({
            data
        }) => {
            const $ = cheerio.load(data)
            const abahan = [];
            const atakaran = [];
            const atahap = [];
            $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-name').each(function(a, b) {
                let bh = $(b).text();
                abahan.push(bh)
            })
            $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-amount').each(function(c, d) {
                let uk = $(d).text();
                atakaran.push(uk)
            })
            $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-content > div.single-steps > table > tbody > tr > td.single-step-description > div > p').each(function(e, f) {
                let th = $(f).text();
                atahap.push(th)
            })
            const judul = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-title.title-hide-in-desktop > h1').text();
            const waktu = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-cooking-time > span').text();
            const hasil = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-serves > span').text().split(': ')[1]
            const level = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-difficulty > span').text().split(': ')[1]
            const thumb = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-main-media > img').attr('src')
            let tbahan = 'bahan\n'
            for (let i = 0; i < abahan.length; i++) {
                tbahan += abahan[i] + ' ' + atakaran[i] + '\n'
            }
            let ttahap = 'tahap\n'
            for (let i = 0; i < atahap.length; i++) {
                ttahap += atahap[i] + '\n\n'
            }
            const tahap = ttahap
            const bahan = tbahan
            const result = {
                creator: 'Fruatre Maou',
                data: {
                    judul: judul,
                    waktu_masak: waktu,
                    hasil: hasil,
                    tingkat_kesulitan: level,
                    thumb: thumb,
                    bahan: bahan.split('bahan\n')[1],
                    langkah_langkah: tahap.split('tahap\n')[1]
                }
            }
            resolve(result)
        })
        .catch(reject)
    })
}
if (!text.includes("https://")) return reply("harus berupa link")
let dt = await detailresep(text.trim())
let txt = `Detail: 
judul: ${dt.data.judul}
waktu masak: ${dt.data.waktu_masak}
hasil: ${dt.data.hasil}
bahan: ${dt.data.bahan}
langkah langkah: ${dt.data.langkah_langkah}`
reply(txt)
}
break
case "cariresep": case "reseps": case "resep": {
async function cariresep(query) {
 return new Promise(async(resolve, reject) => {
 axios.get('https://resepkoki.id/?s=' + query).then(({
 data
 }) => {
 const $ = cheerio.load(data)
 const link = [];
 const judul = [];
 const upload_date = [];
 const format = [];
 const thumb = [];
 $('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-media > a').each(function(a, b) {
 link.push($(b).attr('href'))
 })
 $('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-content > header > h3 > a').each(function(c, d) {
 let jud = $(d).text();
 judul.push(jud)
 })
 for (let i = 0; i < link.length; i++) {
 format.push({
 judul: judul[i],
 link: link[i]
 })
 }
 const result = {
 creator: 'Fruatre Maou',
 data: format.filter(v => v.link.startsWith('https://resepkoki.id/resep'))
 }
 resolve(result)
 })
 .catch(reject)
 })
}
if (!text) return reply("ingin cari resep apaan")
let k = await cariresep(text.trim())
let txt = ".resepdetail link untuk detail resepnya\nresults:\n"
k.data.forEach((res, index) => {
txt += `\njudul: ${res.judul}\n link: ${res.link}\n`
})
reply(txt)
}
break

case "steam": case "steamsearch": case "steams": {
async function Steam(search) {
 return new Promise(async (resolve, reject) => {
 try {
 const { data } = await axios.get('https://store.steampowered.com/search/?term=' + search);
 const $ = cheerio.load(data);
 const hasil = [];

 $('#search_resultsRows > a').each((_, b) => {
 const link = $(b).attr('href');
 const judul = $(b).find(`div.responsive_search_name_combined > div.col.search_name.ellipsis > span`).text();
 const harga = $(b).find(`div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow`).text().trim();
 let rating = $(b).find(`div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span`).attr('data-tooltip-html');
 const img = $(b).find(`div.col.search_capsule > img`).attr('src');
 const rilis = $(b).find(`div.responsive_search_name_combined > div.col.search_released.responsive_secondrow`).text().trim();

 if (!rating) rating = 'No Ratings';
 else {
 let hhh = rating.split('<br>');
 rating = `${hhh[0]} ${hhh[1]}`;
 }

 hasil.push({
 judul,
 img,
 link,
 rilis,
 harga: harga || 'No Price',
 rating
 });
 });

 if (hasil.length === 0) return resolve({ developer: '@Fruatre', mess: 'No result found' });
 resolve(hasil);
 } catch (err) {
 reject(err);
 }
 });
}
if (!text) return reply("judul?")
let k = await Steam(text)
let t = "results: \n"
k.forEach((d, index) => {
t += `judul: ${d.judul}\nlink: ${d.link}\n`
})
reply(t)
}
break

case "steamdetail": case "detailsteam": case "steamd": {
async function Steam_Detail(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);

 const title = $('.apphub_AppName').text().trim() || 'No Title';
 const img = $('#gameHeaderImageCtn > img').attr('src') || 'https://i.ibb.co/G7CrCwN/404.png';
 const desc = $('div.game_description_snippet').text().trim() || 'No Description';
 const release = $('div.date').text().trim() || 'No Release Date';
 const price = $('.game_purchase_price').text().trim() || $('.discount_final_price').text().trim() || 'No Price';

 let rating = $('.user_reviews_summary_row').first().find('.game_review_summary').attr('data-tooltip-html');
 rating = rating ? rating.replace(/<br>/g, ' ') : 'No Ratings';

 const info = $('#genresAndManufacturer').html()
 ?.replace(/\n/g, '')
 .replace(/<br>/g, '\n')
 .replace(/\t/g, '')
 .replace(/<b>/g, '')
 .replace(/<\/div>/g, '\n')
 .replace(/ /g, '')
 .replace(/<\/b>/g, ' ')
 .replace(/<[^>]*>/g, '') || 'No Info';

 const system = {};
 $('div.game_area_sys_req').each((_, el) => {
 let title = $(el).find('h2, strong').first().text().trim();
 let requirements = [];

 $(el).find('ul > li').each((_, li) => {
 let text = $(li).text().trim();
 if (text) requirements.push(text);
 });

 if (title && requirements.length) {
 system[title] = requirements;
 }
 });

 resolve({
 title,
 img,
 desc,
 release,
 price,
 rating,
 info,
 system,
 link: url
 });
 } catch (err) {
 reject(err);
 }
 });
}
if (!text) return reply("masukan url steamnya")
let dt = await Steam_Detail(text)
reply(`judul: ${dt.title}
deskripsi: ${dt.desc}
price: ${dt.price}
System: \n${dt.system["Minimum"].join("\n")}
link: ${dt.link}
`)
}
break
case 'addcase': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'stik/Yuhao.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`Total Features of ${botname} is ${zanspiwfeature()}`)
        break

case 'acc': case 'addsaldo':{
if (!isCreator) return reply(mess.OnlyOwner)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
 }
        case 'kirim': {       
if (!isCreator) return reoly(mess.OnlyOwner)
 let messageText = `「 DEPOSIT SUKSES 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}

Deposit kamj teleh di konfomasi sama admin kami, silahkan cek saldo anda *#saldo*`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  zanspiw.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted: fkontak
  }).then(() => {
    reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    reply('Gagal mengirim pesan!');
  });
}
break

case "tes":{
reply(`on`)
}
break

case 'minsaldo':
if (!isCreator) return reply(mess.OnlyOwner)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${hariini}
 • Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break

case 'editcase': {
 if (!text) return reply(`Contoh penggunaan: ${prefix + command} <nama_case> | <isi_case_baru>`);
 let [caseName, ...newContentArr] = text.split('|');
 caseName = caseName.trim();
 let newContent = newContentArr.join('|').trim();
 if (!caseName || !newContent) {
 return reply('Format salah! Gunakan format: .editcase <nama_case> | <isi_case_baru>');
 }
 const fs = require('fs');
 const filePath = 'stik/message';
 try {
 if (!fs.existsSync(filePath)) {
 return reply(`File bot tidak ditemukan.`);
 }
 let fileContent = fs.readFileSync(filePath, 'utf-8');
 const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break;`, 'g');
 if (!regex.test(fileContent)) {
 return reply(`Case *${caseName}* tidak ditemukan.`);
 }
 const updatedFileContent = fileContent.replace(regex, `case '${caseName}': {\n${newContent}\n}\nbreak`);
 fs.writeFileSync(filePath, updatedFileContent, 'utf-8');
 reply(`Case *${caseName}* berhasil diedit.`);
 } catch (error) {
 console.error('Error:', error);
 return reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.');
 }
}
//EPHOTO
case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
			
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-zanspiw-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					
					let haldwhd = await ephoto(link, q)
					await zanspiw.sendMessage(m.chat, {
						image: {
							url: haldwhd
						}
					}, {
						quoted: m
					})
				} catch (error) {
					reply('Sedang eror kak Mohon maaf ya')
				}
			}
			break
			//donghua fitur 
			case 'lora': {
if (!isPremium) return onlyPrem()
let [text1, text2] = text.split("|")
console.log({ text1, text2 })
if (!text1 || !text2) {
return m.reply(`*INI TUTORIAL NYA*\n\nPerhatikan petunjuk berikut ini!\n( StableDiffusion - Lora++ )\n\nContoh: ${prefix+command} <ID>|<prompt>\n\n ID adalah jumlah model yang tersedia dalam daftar\n\n*(ID) (NAME)*\n \n1. (Donghua#01)\n2. (YunXi - PerfectWorld)\n3. (Sea God (Tang San) - Douluo Dalu)\n4. (XiaoYiXian - Battle Through the Heavens)\n5. (God of Angels (Xian Renxue) - Douluo Dalu)\n6. (Sheng Cai'er - Throne of Seals)\n7. (HuTao - Genshin Impact)\n8. (TangWutong - Unrivaled Tang Sect)\n9. (CaiLin (Medusa) - Battle Through the Heavens)\n10. (Elaina - Majo No TabiTabi)\n11. (Jiang Nanan - The Unrivaled Tang Sect)\n12. (Cailin (Queen Medusa) - BTTH ( 4KUltraHD))\n13. (MaXiaoTao - The Unrivaled Tang Sect)\n14. (Yor Forger - Spy x Family)\n15. (Boboiboy Galaxy)\n16. (Hisoka morow)\n17. (Ling Luochen - Unrivaled Tang Sect)\n18. (Tang Wutong - Unrivaled Tang Sect)\n19. (Huo Yuhao - Unrivaled Tang Sect)`)}
await zanspiw.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Bell409`
await zanspiw.sendMessage(m.chat, { image: { url: imageUrl } }, {quoted: m })
}
break
			case 'donghua': {
   
    const args = text.split(' '); // Ambil argumen untuk pencarian
    const genreSearch = args.slice(1).join(' ').toLowerCase(); // Ambil genre yang dicari

    const donghuaList = [
    { title: "The King's Avatar", year: 2017, genre: "Action, Drama, eSports", rating: "8.4/10" },
    { title: "Mo Dao Zu Shi", year: 2018, genre: "Action, Fantasy, Supernatural", rating: "8.9/10" },
    { title: "Scissor Seven", year: 2020, genre: "Action, Comedy, Drama", rating: "7.8/10" },
    { title: "Big Fish & Begonia", year: 2016, genre: "Fantasy, Romance, Adventure", rating: "8.0/10" },
    { title: "White Cat Legend", year: 2021, genre: "Comedy, Fantasy", rating: "7.5/10" },
    { title: "The King's Avatar: For the Glory", year: 2021, genre: "Action, Drama, eSports", rating: "7.6/10" },
    { title: "Thunderbolt Fantasy", year: 2016, genre: "Action, Fantasy, Puppetry", rating: "8.1/10" },
    { title: "Cang Lan Jue", year: 2021, genre: "Fantasy, Romance", rating: "8.5/10" },
    { title: "Ling Long", year: 2020, genre: "Action, Sci-Fi, Fantasy", rating: "7.4/10" },
    { title: "Fog Hill of the Five Elements", year: 2020, genre: "Action, Fantasy, Martial Arts", rating: "8.0/10" },
    { title: "Xian Wang De Richang Shenghuo", year: 2020, genre: "Comedy, Fantasy, Romance", rating: "7.6/10" },
    { title: "Great Journey of Teenagers", year: 2019, genre: "Action, Adventure, Fantasy", rating: "7.8/10" },
    { title: "The King's Avatar: The Animation", year: 2019, genre: "Action, Drama, eSports", rating: "7.9/10" },
    { title: "White Snake", year: 2019, genre: "Fantasy, Romance, Drama", rating: "7.7/10" },
    { title: "The Legend of Lu Zhen", year: 2013, genre: "Drama, Fantasy, Historical", rating: "7.5/10" },
    { title: "Heaven's Lost Property", year: 2009, genre: "Comedy, Romance, Supernatural", rating: "7.9/10" }
];

    const result = donghuaList.filter(donghua => donghua.genre.toLowerCase().includes(genreSearch));
    
    if (result.length === 0) {
        return m.reply(`Tidak ada donghua dengan genre "${genreSearch}".`);
    }

    let message = `Hasil Pencarian untuk Genre: ${genreSearch}\n`;
    result.forEach(donghua => {
        message += `\nTitle: ${donghua.title}\nYear: ${donghua.year}\nGenre: ${donghua.genre}\n`;
    });

    m.reply(message);
    break;
}

//batas donghua 
case 'textunbanv1':
if (!isCreator) return reply(`Sok asik bangsat`);
const vaga = ` ${textunbanv1}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(vaga)

break
//=======================================================//
case 'textunbanv2':
if (!isCreator) return reply(`Sok asik bangsat`);
const bandar = ` ${textunbanv2}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bandar)

break
//=======================================================//
case 'textunbanv3':
if (!isCreator) return reply(`Sok asik bangsat`);
const masokpakeok = ` ${textunbanv3}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masokpakeok)

break
//=======================================================//
case 'textunbanv4':
if (!isCreator) return reply(`Sok asik bangsat`);
const typo = ` ${textunbanv4}


Powered By Hymann
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(typo)

break
//=======================================================//
case 'textunbanv5':
if (!isCreator) return reply(`Sok asik bangsat`);
const sokasim = ` ${textunbanv5}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sokasim)

break
//=======================================================//
case 'textunbanv6':
if (!isCreator) return reply(`Sok asik bangsat`);
const akakaka = ` ${textunbanv6}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isCreator) return reply(`Sok asik bangsat`);
const kopok = ` ${textunbanv7}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isCreator) return reply(`Sok asik bangsat`);
const tehyung = ` ${textunbanv8}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isCreator) return reply(`Sok asik bangsat`);
const ahhyan = ` ${textunbanv9}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isCreator) return reply(`Sok asik bangsat`);
const yamete = ` ${textunbanv10}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isCreator) return reply(`Sok asik bangsat`);
const suuu = ` ${textunbanv11}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isCreator) return reply(`Sok asik bangsat`);
const huuuu = ` ${textunbanv12}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isCreator) return reply(`Sok asik bangsat`);
const gaje = ` ${textunbanv13}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isCreator) return reply(`Sok asik bangsat`);
const well = ` ${textunbanv14}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const lempo = ` ${textunbanv15}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const cok = ` ${textunbanv16}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const sayasuka = ` ${textunbanv17}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const oooooooo= ` ${textunbanv18}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const omaaavaaaaaaaa = ` ${textunbanv19}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const bykepo = ` ${textunbanv20}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const unbannned = ` ${textunbanv21}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
//=================[ BACOT🗿 ]=========================//
case 'textunbanpremv1':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const premi = ` ${textunbanpremv1}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(premi)

break
//=======================================================//
case 'textunbanpremv2':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const kelasss = ` ${textunbanpremv2}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kelasss)

break
//=======================================================//
case 'textunbanpremv3':
if (!isPremium && !isCreator) return reply(`Sok asik bangsat`);
const eek = ` ${textunbanpremv3}


Powered By Hymannn
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(eek)

break

case 'tebakgambar': {
  
let timeout = 60000
let id = m.chat

async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 10.000 money`
 Zanspiw.tebakgambar[id] = [
    await zanspiw.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (zanspiw.tebakgambar[id])
 reply(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete zanspiw.tebakgambar[id]
 }, 60000)
	 ]
}
break
//==================================================================
case 'tebaklagu': {
  
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await zanspiw.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 zanspiw.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zanspiw.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
}
break
case 'tebakkata': {

  let timeout = 60000
  let id = m.chat

 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 10.000 money`
 zanspiw.tebakkata[id] = [
	await reply(`${caption}`),
	json,
 setTimeout(() => {
 if (zanspiw.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 reply(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete zanspiw.tebakkata[id]
 }, 60000)
 ]
}
break
//==================================================================
case 'tebakkalimat': {
  
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zanspiw.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zanspiw.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'tebaklirik':{
  
let users = global.db.users[m.sender]
	let timeout = 60000
	let poin = 10000
	let id = m.chat
	
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money
	`.trim()
	zanspiw.tebaklirik[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (zanspiw.tebaklirik[id]) 
users.money -= 200
reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zanspiw.tebaklirik[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'caklontong': {
  
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zanspiw.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zanspiw.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'family100': {
  
  let winScore = 10000
 let id = m.chat



	
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n\nSoal : ${json.soal}\n\nHadiah : 10.000 money\n\nTerdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 zanspiw.family100[id] = {
			id,
			msg: await reply(`${hasil}`),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }
}
break
//==================================================================
case 'upvn':{
if (!DanzTheCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
const media = await zanspiw.downloadAndSaveMediaMessage(quoted)
zanspiw.sendMessage('status@broadcast', {audio: { url: media }, mimetype: 'audio/mp3', ptt:true },{
backgroundColor: getRandomHexColor(),
statusJidList: Object.keys(db.users)
});
}
reply(`*Sukses mengirim status whatsapp ke  Orang Yang Ada Di database*`)
break
//==================================================================
case 'tebaktebakan': {
  
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'tebakbendera': {
  
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakbenderav2': {
  
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkabupaten': {
  
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.title)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkimia': {
  
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.lambang)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
    delete tebakkimia[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'asahotak': {
  
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
    delete tebakasahotak[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'siapaaku':{
  
  let users = global.db.users[m.sender]
	let timeout = 60000 
	let poin = 10000
	let id = m.chat 

	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	 
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zanspiw.siapaaku[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (zanspiw.siapaaku[id]) 
users.money -= 200
reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete zanspiw.siapaaku[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'susunkata':{
  
	let timeout = 60000
	let poin = 10000
	let id = m.chat
	if (id in zanspiw.susunkata) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zanspiw.susunkata[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete zanspiw.susunkata[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tekateki':{
  
	let timeout = 60000
	let users = global.db.users[m.sender]
	let poin = 10000
	let id = m.chat
	if (id in zanspiw.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money 💸
	`.trim()
	zanspiw.tekateki[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (zanspiw.tekateki[id]) 
users.money -= 200
reply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.users[sender].money.toLocaleString()}*`)
	delete zanspiw.tekateki[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tebakbendera2': {
  
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
zanspiw.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    zanspiw.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
    delete tebakbendera2[m.sender.split('@')[0]]
}
}
break
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
zanspiw.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
}
};
break
//CERPEN//
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break

//TIKTOK MENU//
case 'tiktokgirl':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/tiktokgirl.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/gheayubi.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/ukhty.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/santuy.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/kayes.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/panrika.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
if (!isPremium) return reply(mess.prem)
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/notnot.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
zanspiw.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break
case 'trap' :
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPremium) return reply(mess.premium)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await zanspiw.sendMessage(m.chat, { caption:  `Ini dia!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ahegao':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
zanspiw.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':


reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await zanspiw.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':


reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await zanspiw.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {


reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
zanspiw.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
// CPANEL//
case '1gb': case '2gb': case '3gb': case '4gb': case '5gb': case '6gb': case '7gb': case '8gb': case '9gb': case 'unli':{
  if (!isCreator) return m.reply("kushus owner")
if (!text) return reply(`username: contoh : ikan 628xxx`)
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "unli") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
 if (args.length < 2) return m.reply("contoh .1gb ikan 62838 atau .gb ikan kirimsini")
    if (!isPremium) return reply('khusus Premium y');
let password = generateRandomPassword().replace(/-/g, '')
let f = await fetch(host + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"email": args[0] + '@gmail.com',
"username": args[0].replace(' ', '').toLowerCase(),
"first_name": args[0].replace(' ', ''),
"last_name": "zanspiw",
"language": "en",
"password": password
})
})
let ress = await f.json();
if (ress.errors) return reply(JSON.stringify(ress.errors[0], null, 2))

let f1 = await fetch(host + "/api/application/nests/" + serverCreate.nestId + "/eggs/" + serverCreate.eggId, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json();
let eggs = data.attributes

let f2 = await fetch(host + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
},
"body": JSON.stringify({
"name": args[0],
"description": hariini,
"user": parseInt(ress.attributes.id),
"egg": parseInt(serverCreate.eggId),
"docker_image": eggs.docker_image,
"startup": eggs.startup,
"environment": serverCreate.eggs.environment,
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": serverCreate.limits.db,
"backups": serverCreate.limits.backups,
"allocations": serverCreate.limits.allocation
},
deploy: {
locations: [parseInt(1)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang;
if (!isNaN(Number(args[1]))) { 
  orang = args[1].trim() + "@s.whatsapp.net"; 
  m.reply("dikirim ke " + orang); 
} else { 
  orang = m.chat; 
}
 
var teks = `
\`Berhasil Membuat Akun Panel ✅\`

- *ID :* ${server.id}
- *Nama :* ${args[0]}
- *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
- *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
- *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
- *Username :* ${args[0]}
- *Pasword :* ${password}
- *Link :* ${global.host}
`
await zanspiw.sendMessage(orang, {
  text: teks.trim(), contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": `⪼ Client - MannnnMd`,
"body": `Hallo ${pushname}`,
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fs.readFileSync(`./stik/thumnail/fake.jpg`),
"sourceUrl": "https://www.youtube.com/@YTmuhilman03" }}}, { quoted: m })
}
break
case 'reinstall': {
if (!isCreator) return reply(`Sok asik bangsat Khusus Premium`);
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {
if (!isCreator) return reply(`Sok asik bangsat Khusus Premium`);
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
                case "listsrv": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await zanspiw.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isCreator) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await zanspiw.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isCreator) return reply(`Khusus Hymannn Official Aja`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isCreator) return reply(`Khusus Hymannn Official Aja`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        
        case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zanspiw.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
                case "addusr": {

if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await zanspiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await zanspiw.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
zanspiw.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
                case "crateadmin": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isCreator) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await zanspiw.sendMessage(m.chat, listMessage)

    await zanspiw.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await zanspiw.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
if (!isCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
        
//BATAS CPANEL
case"upch":{
if (!isCreator) return reply(mess.OnlyOwner)
zanspiw.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
zanspiw.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
zanspiw.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break


/*
```Fitur : Simi , Bard , Blackbox , Geminiai , Gptgo , Openai```
```Type : Case```
```Credit : https://whatsapp.com/channel/0029Vaju3DnISTkRbWLcYn3U```

*Kalo Rame Gas Share Fitur Yang Pake Scrape*

*/

case 'simi': case 'bard': case 'geminiai': case 'blackbox': case 'gptgo': case 'openai':
try {
if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://widipe.com/` + command + `?text=${text}`)
const gpt = result.result
reply(`${gpt}`)
} catch (err) {
console.log(err)
reply('Terjadi Kesalahan')
}
break

//ISLAMMENU
case 'listsurah':
			case 'listsurat': {
				
				try {
					var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
					m.reply(surah)
			} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
				}
			}
			break

case 'jadwalsholat':
if (!text) return reply(`*Contoh:* ${prefix + command} palembang`)
axios.get(`https://apisanz.my.id/search/jadwalsholat?search=${text}}`)
.then(({ data }) => {
var tet = `\`Kota = ${data.data.kota}\`\n\n`
tet += `Tanggal = ${data.data.tanggal}`
tet += `Imsak = ${data.data.jadwal.imsak}\nSubuh = ${data.data.jadwal.subuh}\nDzuhur = ${data.data.jadwal.dzuhur}\nAshar = ${data.data.jadwal.ashar}\nMagrib = ${data.data.jadwal.magrib}\nIsya = ${data.data.jadwal.Isyak}`
reply(tet)
})
.catch(console.error)
break
case 'niatsholat': {
if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=================================================//
case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)

}
break
case 'ayatkursi': {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
reply(caption)
}
break
//=================================================//
case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
m.reply(`${contoh} + ${data}`)
}
break
//=================================================//
case 'asmaulhusna': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(`${contoh} + ${data} + ${anjuran}`)
}
break
//=================================================//

//BATAS ISLAMMENU
case 'apakah': {
if (!text) return reply( `Example : ${prefix + command} Hymannn cakep`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih iya', 'Betul']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!text) return reply( `Example : ${prefix + command} saya menjadi orang yang cakep seperti Hymannn`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih ngga', 'g', 'gatau juga', 'ngga bakal bisa', 'gk']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break
case 'bagaimana': {
if (!text) return reply( `Example : ${prefix + command} cara agar menjadi cewe yang sesuai dengan tipe nya Hymannn >////<`)
var apa = ['Gatau juga sih', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab Pertanyaan Anda', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Alamak, pusing gweh', 'mending beli eskrim', 'Gimana yeee']
var kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break
case 'cekmati': {
if (!text) return m.reply(`Yang Mau Lu Cek Siapa Bego?`)
apipanas = await axios.get(`https://api.agify.io/?name=${q}`)
m.reply(`Nama : ${apipanas.data.name}\n*Mati Pada Umur :* ${apipanas.data.age} Tahun.\n\n\n‼️*Jangan percaya teks diatas, Soalnya mati gada yg tau.Cepet Cepet Tobat Ya Bro*`)
}
break
case 'wangy': {
if (!text) return m.reply(`Contoh: ${prefix + command} Vyaaa`)
m.reply(`${q} ${q} ${q} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah Wangynya rambut ${q} wangyy aku mau nyiumin aroma wangynya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus & pat-pat ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
}
break
case 'kapankah': {
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${prefix + command} Saya Jadi Istrinya Hymannn Kun >////<`)
var kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
var kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'cekkuota': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var pulsa = ['1kb', '5mb', '20mb', '3gb', '5gb', '7gb', '10gb', '1gb', 'banteng 2gb', '2.5gb', '1tb', '7mb', 'habis', '1,3gb', '4,1gb', '0,1kb']
var pulsa = pulsa[Math.floor(Math.random() * pulsa.length)]
m.reply(`Nama : ${q}\nkuota anda : *${pulsa}*`)
}
break
case 'cekjodoh': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var jodoh = ['etek markopet', 'uni as', 'uni maria', 'uni bakwan', 'popo berby', 'mimi pery', 'uni bika', 'uni bakwan', 'kosong', 'sumiati', 'yanto']
var jodoh = jodoh[Math.floor(Math.random() * jodoh.length)]
m.reply(`Nama : ${q}\nJodoh anda : *${jodoh}*`)
}
break
case 'cekkhodam': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var khodams = ['macan putih', 'harimau hitam', 'harimau sumatera', 'burung hantu', 'macan tutul hitam', 'burung gagak', 'kipas angin', 'komodo bermata merah', 'banteng bermata merah', 'rusa bertanduk satu', 'kosong', 'burung jalak', 'kelelawar biru', 'buaya putih', 'merpati', 'rawa rontek']
var khodams = khodams[Math.floor(Math.random() * khodams.length)]
m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
}
break
case 'cekkhodamcore': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var khodams = ['ulat bulu', 'paracetamol', 'cabul', 'burung prikitiw', 'kipas cosmos', 'vitamin c', 'kipas angin', 'Buaya darat', 'meja berjalan', 'yatim', 'ikan cupang', 'kodok', 'kosong', 'mayat hidup', 'merpati', 'minyak sarimurni', 'lampu LID', 'tikus kencing', 'sirup abc']
var khodams = khodams[Math.floor(Math.random() * khodams.length)]
m.reply(`Nama : ${q}\nkhodam anda : *${khodams}*`)
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
//batas randommenu
case 'upaudio':{
if (!isCreator) return reply(mess.OnlyOwner)
if (!/audio/.test(mime)) return reply(`reply the music and caption, *Example:* ${prefix + command} Hymannn`)
ngawi = text.split("|")[0]
ngawur = text.split("|")[1]
 zanspiw.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
await sleep(5000)
zanspiw.sendMessage(`${idch}`, { 
audio: await quoted.download(), 
viewOnce: false, 
ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3", 
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: { 
newsletterName: `Sound Random : ${ngawi}`, 
newsletterJid: idch
}
}
})
await sleep(2000)
zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await zanspiw.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await zanspiw.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break

case"upsaluran":{
if (!isCreator) return
zanspiw.sendMessage(`${global.idch}`,{ 
    audio: await quoted.download(), 
    mimetype: 'audio/mp4',
    ptt: true,
    contextinfo:{
    forwardingScore: 100,
    isForwarded: true,
    forwardedNewsletterMessageInf: {
        newsletterJid: `${global.idch}`,
        serverMessage: null,
        newsletterNetter: `Always House`
    },
        externalAdReply: {
            showAdttribution: true,
            title: "𖹭 ࣪ ⑅ ᤻ hоmе`ɡɑᥣɑu 𓄯",
            sourceUrl: "https://www.youtube.com/@muhilman03",
            thumbnailUrl: "https://8030.us.kg/file/qSIoUtAElmRZ.jpg"
        }}
    })
await sleep(2000)
zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key, }
}
)
}
break
case "removebg": case "rmbg": case "hapusbg": {
 let qwi = m.quoted? m.quoted : m
if (mime.includes("image")) {
 try {
   let up = await uploadFile(await qwi.download(), "file.jpg")
   let url = `${global.xyro}removebg?apikey=${global.xyiroapi}&url=`
   let p = await m.reply("Processing..")
   let json = url + up
  if (json) m.reply("Sukses...\notw send", {edit: p.key})
  if (!json) return m.reply("gagal, " + json, { edit: p.key})
  await zanspiw.sendMessage(m.chat, {
    image: { url: json },
    filename: "yuhao-md-removebg.jpg",
    mimetype: "image/jpeg",
    caption: "ni"
  }, {quoted: m})
 } catch (e) {
   return m.reply("error: " + e)
 }
} else {
  return m.reply("hanya image")
}
}
break
case 'tourl': case "uploadimage": case "upload": {
addCountCmd('#tourl', m.sender, _cmd);
zanspiw.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
    let ms = m.quoted ? m.quoted : m
   if (!mime) return m.reply('No media found reply or send file')
  let media = await ms.download()
  let filename = Date.now() + "." + mime.split("/")[1]
  let url = await uploadFile(mime.includes("video")? Buffer.from(media) : media, filename)
  m.reply(`*File berhasil terupload*
  *filename: ${filename}*
  *url: ${url}*
  *expired: no expired*`)
  } catch (e) {
    m.reply(" error" + e.message)
  }
}
break

case 'tovn': {
addCountCmd('#tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zanspiw.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
break


case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.OnlyOwner)
fs.readdir("./sessions", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("sessions-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./sessions/${file}`)
});
await sleep(2000)
reply(`Berhasil Menghapus ${filteredArray.length} file sampah...`)
});
if (args[0] === "backup") {
await sleep(5000)
reply("Proses Backup")
await sleep(5000)
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await zanspiw.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "Yuhaomd.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
}
break

case "backup":{
if (!isCreator) return reply(mess.OnlyOwner)
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await zanspiw.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break

case 'addplug': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!q.includes("|")) return reply(`Add input, Example: *${prefix + command} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './stik/plugin', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await reply(`Plugin baru telah dibuat di ${pluginFilePath}.`)
}
break//CECANMENU
case 'vietnam':
			case 'korea':
			case 'indonesian':
			case 'japan':
			case 'thailand':
			case 'china': {
			
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "🔄",
						key: m.key,
					}
				})
				try {
					let cecan = await fetchJson(`https://www.vreden.my.id/cdn/cecan/${command}.json`)
					const dl_url = await pickRandom(cecan)
					zanspiw.sendMessage(m.chat, {
						image: {
							url: dl_url
						},
						caption: `🌊 Cewek ${command}`
					}, {
						quoted: m
					})
				} catch (error) {
				reply('Sedang error kak mohon maap🌷');
				}
			}
			break
//COGAN COMMAND
	//▢━━━━━━━━━━━━━━「 COGAN COMMAND 」━━━━━━━━━━━━━━▢
			case 'wuyifan':
			case 'suga':
			case 'parkchanyeol':
			case 'ohsehun':
			case 'luhan':
			case 'kimtaehyung':
			case 'kimsoek':
			case 'kimnanjoon':
			case 'kimminseok':
			case 'kimjunmyeon':
			case 'kimjong':
			case 'kimjondae':
			case 'jungkook':
			case 'jimin':
			case 'jhope':
			case 'huangzitao':
			case 'dohkyungsoo':
			case 'baekhyung': {
			
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${global.botkey}`)
					await zanspiw.sendMessage(m.chat, {
						image: cogan,
						caption: 'Nih Kak Cowok Gantengnya 😋'
					}, {
						quoted: m
					})
				} catch (error) {
					reply(` Error kak `);
				}
			}
			break 
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
zanspiw.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case 'animeawoo':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
zanspiw.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
zanspiw.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'toanime': case 'jadianime': {
if (!isPremium) return reply(mess.only.premium)
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await zanspiwBotz.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
const imganime = await fetchJson(`https://itzpire.com/tools/jadianime?url=${anuu}`)
zanspiwBotz.sendMessage(m.chat, { image: { url: imganime.result }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break

case 'cgplug': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!q.includes("|")) return reply(`Add Input, Example: *${prefix + command} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './stik/plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply(`Plugin di ${filePath} telah diganti`)
return
}
}
await reply(`Plugin dengan command '${mypler}' tidak ditemukan`)
}
break

case 'rmplug': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!q) return reply(`Please provide the command name of the plugin you want to remove. Example: *${prefix + command} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './stik/plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply(`Plugin di ${filePath} telah dihapus.`)
return
}
}
await reply(`Plugin dengan command '${q}' tidak ditemukan.`)
}
break

case 'getplug': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!q) return reply(`Add Input, Example: *${prefix + command} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './stik/plugin')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q)) // Perubahan disini
if (!plugin) return reply(`Plugin dengan command '${q}' tidak ditemukan.`)
await zanspiw.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Succes mengambil plugin '${q}', plugin telah dikirim.`)
}
break

//===================[ TEMPAT CASE MENU FUN ]=====================\\

//===================[ TEMPAT CASE MENU GROUP ]=====================\\
case "kick":
case "kik":{
if (m.isGroup && !isAdmins && isBotAdmins) return
if (!text && !m.quoted)reply('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zanspiw.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break

case 'inspect':
case 'getidch': {
  if(!text) return reply(`Kirim perintah ${prefix + command} https://whatsapp.com/hymannnnnel/xxxxxxxx`)
  if(!args[0] && !args[0].includes('whatsapp.com/hymannnnnel')) return m.reply("link tidak valid")
  
  await zanspiw.sendMessage(m.chat, {
    react: {
      text: "🔑",
      key: m.key,
    }
  })

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  try {
    let result = args[0].split('https://whatsapp.com/hymannnnnel/')[1]
    let data = await zanspiw.newsletterMetadata("invite", result)

    let teks = `*NEWSLETTER ID*

*Name:* ${data.name}
*ID:* ${data.id}
*Status:* ${data.state}
*Dibuat Pada:* ${formatDate(data.creation_time)}
*Subscribers:* ${data.subscribers}
*Meta Verify:* ${data.verification}
*React Emoji:* ${data.reaction_codes}
*Description:* ${data.description}
`

    await zanspiw.sendMessage(m.chat, { text: teks });
  }
  catch (error) {
    m.reply("link tidak valid")
  }
}
break
case "spotify": {
  if (!text) return m.reply("Mana link spotifynya")
  let h = await axios.get(`${global.xyro}spotify?url=${text}&apikey=${global.xyiroapi}`)
  let json = h.data.result
  await zanspiw.sendMessage(m.chat, {image: { url: json.image}, caption: `title: ${json.title}\nartis: ${json.artis}\naudio sedang dikirim`}, {quoted: m})
  await zanspiw.sendMessage(m.chat, {audio: {url: json.download }, mimetype: "audio/mpeg", filename: json.title + ".mp3"}, { quoted: m})
}
break
case 'playvid': {

        if (!text) {
            return reply('What video do you want to playvid? *Contoh*: .playvid jodoh pasti bertemu');
        }
        
        // Mengambil hasil pencarian dari YouTube
        const search = await yts(text);
        const telaso = search.all[0].url;
        try {
        reply(mess.wait);
        const response = await axios.get(`${global.xyro}youtubevideo?url=${telaso}&apikey=${global.xyiroapi}`)
        const data = response.data.result
        let download = data.dl
        if (!download) return m.reply("❌ Video tidak tersedia untuk diunduh.");
        await zanspiw.sendMessage(m.chat, {
            video: { url: download },
            mimetype: 'video/mp4',
            fileName: 'mannn.mp4',
            caption: `Here is the video: ${data.title}`,
        }, { quoted: m });

        // Kirim reaksi "✅"
        await zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (error) {
        console.error("Error:", error.message);
        return reply("An error occurred while processing your request.");
    }
}
break;

case 'play': {
if (!text) return reply(`Example: ${prefix + command} Masih hatiku`)
let resst = await yts(text)
let url = resst.all[0].url;
let res = await (await fetch(`${global.xyro}youtubeaudio?url=${url}&apikey=${global.xyiroapi}`)).json()
await m.reply(`${res.result.title}`)
return zanspiw.sendMessage(m.chat, { audio: { url: res.result.dl },
            jpegThumbnail: await (await fetch(resst.all[0].thumbnail)).buffer(),
            fileName: res.result.title + ".mp3"
        }, { quoted: m });
}
break

case "ytmp3": {
if (!text) return m.reply(`${prefix + command} mana Linknya`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await zanspiw.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson(`${global.xyro}youtubeaudio?url=${text}&apikey=${global.xyiroapi}`)

let urlMp3 = anu.result.dl
await zanspiw.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
await zanspiw.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'ytmp4': {
   if (!text) return reply(`*Contoh:* ${prefix}${command} <link yt>`);
zanspiw.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`${global.xyro}youtubevideo?url=${text}&apikey=${global.xyiroapi}`)
  let gyh = await ouh.json() 
  let hallo = ` Judul: ${gyh.result.title}\nUrl: ${text}`             
	let url = gyh.result.dl
	await zanspiw.sendMessage(m.chat, { video: { url: url },
	fileName: gyh.result.title + ".mp4",
	mimetype: "video/mp4"
	})
}
break

case 'mp3': {
	if (!m.quoted) return reply('Reply Pesan');
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Indeks URL tidak valid');
	await downloadMp3(urls);
}
break

case 'sshp':
case 'sspc':
case 'sstab': {
if (!text) return m.reply(`${prefix + command} https://yandex.com`)
m.reply(`Proses Screenshot Website ( ${text} )`)
zanspiw.sendMessage(m.chat, { image: { url: `https://widipe.com/${command}?url=${text}` }, caption: `Screenshot Website : ${text}` }, { quoted: m })
}
break
//===================[ TEMPAT CASE MENU GAME ]=====================\\
/*case 'script':
case 'sc':{
if (cekSaldo(m.sender, db_saldo) < 40000) return zanspiw.sendMessage(m.chat, { image: { url: `${global.payqris}` }, caption : `───「  *DONASI*  」────

*Payment donasi💰* 
- *Dana :* ${global.nodana}
- *Gopay :* ${global.nogopy}
- *Ovo :* ${global.payovo}
- *Qris :* Scan qr di atas
berapapun donasi dari kalian itu sangat berarti bagi kami, jangan lupa ketik *.bukti* agar kami tau bahwa anda telah transaksi` }, { quoted: m })
let wow = `to get this script
You just need to buy it
*with price :*
* IDN = Rp. 40,000 -
 Click the URL below to contact the owner`
const baten = new Button()
let ads = baten.setBody(wow);
ads += baten.addReply(display_text = "Tampilan Special", id = ".menu")
ads += baten.addUrl("Call My Owner", "https://t.me/zanspiw");
ads += baten.run(m.chat, zanspiw, m);
minSaldo(m.sender, 40000, db_saldo);
}
break*/

case "script":
case "sc":
case "buyscript":{
addCountCmd('#sc', m.sender, _cmd)
if (cekSaldo(m.sender, db_saldo) < 40000) return zanspiw.sendMessage(m.chat, { image: { url: `${global.payqris}` }, caption : `───「  *DONASI*  」────

*Payment donasi💰* 
- *Dana :* ${global.nodana}
- *Gopay :* ${global.nogopy}
- *Ovo :* ${global.payovo}
- *Qris :* Scan qr di atas
berapapun donasi dari kalian itu sangat berarti bagi kami, jangan lupa ketik *.bukti* agar kami tau bahwa anda telah transaksi` }, { quoted: m })
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await zanspiw.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "UPDATE ALFTH - MD",},{quoted: m}); await execSync("rm -rf backup.zip");
minSaldo(m.sender, 40000, db_saldo);
}
break

case 'sound22':
case 'sound21':
case 'sound20':
case 'sound19':
case 'sound18':
case 'sound17':
case 'sound16':
case 'sound15':
case 'sound14':
case 'sound13':
case 'sound12':
case 'sound11':
case 'sound10':
case 'sound9':
case 'sound8':
case 'sound7':
case 'sound6':
case 'sound5':
case 'sound4':
case 'sound3':
case 'sound2':
case 'sound1':{
let sound = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22];
let docs = pickRandom(sound);
sendvn(docs)
}
break
			
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':
			case 'sound101':
			case 'sound102':
			case 'sound103':
			case 'sound104':
			case 'sound105':
			case 'sound106':
			case 'sound107':
			case 'sound108':
			case 'sound109':
			case 'sound110':
			case 'sound111':
			case 'sound112':
			case 'sound113':
			case 'sound114':
			case 'sound115':
			case 'sound116':
			case 'sound117':
			case 'sound118':
			case 'sound119':
			case 'sound120':
			case 'sound121':
			case 'sound122':
			case 'sound123':
			case 'sound124':
			case 'sound125':
			case 'sound126':
			case 'sound127':
			case 'sound128':
			case 'sound129':
			case 'sound130':
			case 'sound131':
			case 'sound132':
			case 'sound133':
			case 'sound134':
			case 'sound135':
			case 'sound136':
			case 'sound137':
			case 'sound138':
			case 'sound139':
			case 'sound140':
			case 'sound141':
			case 'sound142':
			case 'sound143':
			case 'sound144':
			case 'sound145':
			case 'sound146':
			case 'sound147':
			case 'sound148':
			case 'sound149':
			case 'sound150':
			case 'sound151':
			case 'sound152':
			case 'sound153':
			case 'sound154':
			case 'sound155':
			case 'sound156':
			case 'sound157':
			case 'sound158':
			case 'sound159':
			case 'sound160':
			case 'sound161': {
				try {
					let link = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
					await zanspiw.sendMessage(m.chat, {
						audio: {
							url: link
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (err) {
console.error('Kesalahan Mohon maaf fitue ini tidak bisa di pakai:', err)
				}
			}
			break
			/*
*
* [ *FEATURE QC WITH MODULE* ]
* Created By Hann
*
* Follow Saluran Kami Untuk Update Fitur Selanjutnya
* Saluran: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
*
**/
const { Sticker } = require('wa-sticker-formatter')
async function createSticker(req, url, packName, authorName, quality) {
  let stickerMetadata = {
    type: 'full',
    pack: packName,
    author: authorName,
    quality
  }
  return (new Sticker(req ? req : url, stickerMetadata)).toBuffer()
}

case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
		    try {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await zanspiw.downloadAndSaveMediaMessage(qmsg)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await zanspiw.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
	        } catch (e) {
		    m.reply(`Error\nHarus Pakai Gambar!`)
		    }
            }
	       break

case 'sticker': case 's': {
 let ko = m.quoted? m.quoted : m 
 if (mime.includes("image")) {
 let media = await ko.download()
 
 zanspiw.sendImageAsSticker(m.chat, media, m, { packname: "MANNN MD", author: "Hymannn" })
 } else if (mime.includes("video")) {
 let media = await ko.download()
 
 zanspiw.sendVideoAsSticker(m.chat, media, m, { packname: "MANNN MD", author: "Hymannn" })
 }
}
break
case 'qc': {
const quoteApi = require('@neoxr/quote-api')
        if (!text) m.reply(`Example: ${prefix + command} halo`);
        let avatar = await zanspiw.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#2E4053",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": pushname,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
}

const res = await quoteApi(json)
const buffer = Buffer.from(res.image, 'base64')
 zanspiw.sendImageAsSticker(m.chat, buffer, m, { packname: "MANNN MD", author: "Hymannn" })
  }
  break
case "clear-bug":
if (!text) return reply(`*Example*: ${prefix + command} 6287392784527`)
Pe = m.mentionedJid[0x0]? m.mentionedJid[0x0]: m.quoted? m.quoted.sender: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";zanspiw.sendMessage(Pe, {text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
});
reply("done");
break
case 'menu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🗿', key: m.key }});
let wow = `*👋 Hallo kak ${pushname}*
┬────────────┈ ✈
│ 𓆩ꨄ︎𓆪𝘽𝙊𝙏 𝙄𝙉𝙁𝙊𓆩ꨄ︎𓆪 
│𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
│𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.packname}* 
│𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *Mannn V1*
│𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Hymannn*
│𝐏𝐫𝐞𝐟𝐢𝐱 :  *Prefix*
│𝐌𝐨𝐝𝐞 : *Public-Bot*
│𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
│𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Baileys-Ws*   
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙎𝙄
│𝐍𝐚𝐦𝐞 : *${pushname}*
│𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremium ? '✅' : `❌`}*
└─────────────┈ ✈
*「  Menu 」*
┌└─────────────┈ 
││❀${prefix}allmenu
││❀${prefix}ownermenu
││❀${prefix}gamemenu
││❀${prefix}aimenu
││❀${prefix}Storemenu
││❀${prefix}internetmenu
││❀${prefix}Textwangsafmenu
││❀${prefix}soundmenu
││❀${prefix}RpgMenu
││❀${prefix}nsfwmenu
││❀${prefix}animemenu
││❀${prefix}animemenuv2
││❀${prefix}panelmenu
││❀${prefix}librarymenu
││❀${prefix}asupanmenu
││❀${prefix}islammenu
││❀${prefix}randommenu
││❀${prefix}quotesmenu
││❀${prefix}Beritamenu
││❀${prefix}Coganmenu
││❀${prefix}ephotomenu
││❀${prefix}primbonmenu
└─────────────────┈ 
*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
  return zanspiw.sendMessage(m.chat, { video: await fs.readFileSync("./v.mp4"),caption: wow, fileName: "v.mp4", mimetype: "video/mp4", gifAttribution: 2, gifPlayback: true,  contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "Mannn md",
								body: 'Created by Hymannn',
								thumbnailUrl: "https://files.catbox.moe/gk0e3n.png",
								sourceUrl: "https://portofoliomannn8124.pages.dev/",
          mimeType: "image/jpeg",
								mediaType: 1,
                              previewType: "PHOTO",
								 renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
}
break;

case 'islammenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(ISLAMMENU)*
││❀${prefix}Niatsholat
││❀${prefix}bacaansholat
││❀${prefix}ayatkursi
││❀${prefix}asmaulhusna
││❀${prefix}kisahnabi
││❀${prefix}jadwalsholat
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'randommenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(RANDOMMENU)*
││❀${prefix}apakah
││❀${prefix}quotesanime
││❀${prefix}quotesdilan
││❀${prefix}quotesbucin
││❀${prefix}katasindiran
││❀${prefix}katahacker
││❀${prefix}katacinta
││❀${prefix}katabijak 
││❀${prefix}katailham
││❀${prefix}katasenia
││❀${prefix}faktaunik
││❀${prefix}quotesislamic
││❀${prefix}motivasi
││❀${prefix}pantun
││❀${prefix}puisi
││❀${prefix}quotes
││❀${prefix}bisakah
││❀${prefix}bagaimanakah
││❀${prefix}gantengcek
││❀${prefix}cekganteng
││❀${prefix}cantikcek
││❀${prefix}cekcantik
││❀${prefix}sangecek
││❀${prefix}ceksange
││❀${prefix}gaycek
││❀${prefix}cekgay
││❀${prefix}lesbicek
││❀${prefix}ceklesbi
││❀${prefix}kapankah
││❀${prefix}wangy
││❀${prefix}cekmati
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;
case 'beritamenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(BERITAMENU)*
││❀${prefix}fajar
││❀${prefix}cnn
││❀${prefix}layarkaca
││❀${prefix}cnbc
││❀${prefix}tribun
││❀${prefix}indozone
││❀${prefix}kompas
││❀${prefix}daily
││❀${prefix}detik
││❀${prefix}inews
││❀${prefix}okezone
││❀${prefix}sindo
││❀${prefix}tempo
││❀${prefix}antara
││❀${prefix}kontan
││❀${prefix}merdeka
││❀${prefix}jalantikus-meme
││❀${prefix}afk
││❀${prefix}gempa
└─────────────────┈ 
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'asupanmenu': {
    zanspiw.sendMessage(m.chat, { react: { text: '🌊️', key: m.key }});
    let wow = `👋Hallo » ${pushname}

┌└─────────────┈ ✈
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 𝗔𝗦𝗨𝗣𝗔𝗡
││❀${prefix}tiktokgirl 
││❀${prefix}tiktoknukthy 
││❀${prefix}tiktokkayes
││❀${prefix}tiktokpanrika
││❀${prefix}tiktoknotnot
││❀${prefix}tiktokghea
││❀${prefix}tiktoksantuy
└─────────────────┈ ✈
 │𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 : _@Hymannn_
 │𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝘽𝙮 : _@MannnMd_
 └─────────────────┈ ✈


*Indonesian version*

_Hallo!! Selamat datang Di Menu Botz Mannn Multidevice Pencipta bot ini Adalah Hymannn, Selamat Menikmati Fitur Botz kami__

*English version*
_Hello!! Welcome to the Mannn Multidevice Botz Menu. The creator of this bot is Hymannn, Enjoy our Botz Features_.`;
zanspiw.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/vsw7k0.jpg"}, caption: wow});
}
break;

case 'storemenu': {
  let wow = `*👋 Hallo kak ${pushname}*
📌 Di sini adalah Zans Multi Device yang dilengkapi berbagai macam fitur bot Whatsapp, seperti download, dan lain-lain.

⪼ *Informasi Bot*
🤖 *Nama Bot*: MannnMD
🪀 *Nomor Owner*: 628974719922
🏦 *Saldo User*: Rp${toRupiah(cekSaldo(sender, db_saldo))}

⪼ *Shop Otomatis*
1. 🌊 *Alight Motion*
   Harga: 15.000k
   Deskripsi: Akun Alightmotion Premium.
   Ketik: .alightmotion

2. 🪀 *Jasa Edit Script*
   Harga: 20.000k
   Deskripsi: Edit Script WhatsApp.
   Ketik: .jasaeditsc

3. 🎟️ *Suntik To Tiktok*
   Harga: Sudah Tersedia
   Deskripsi: Suntik Tiktok View, Like, Followers.
   Ketik: .suntiktiktok

4. 🍀 *List VPS Ocean*
   Harga: Sudah Tersedia
   Deskripsi: VPS Digital Ocean.
   Ketik: .vps

5. 📢 *Sc Mannn-Md New*
   Harga: 40k
   Deskripsi: Sell Script Store + Md.
   Ketik: .script`;

  m.reply(wow);
}
break;

case "pushkontak1": {
if (!isCreator) return;
if (!text) return m.reply("idgrup|pesannya\n\nketik *.cekidgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("idgrup|pesannya\n\nketik *.cekidgc* untuk melihat semua list id grup")
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await zanspiw.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await zanspiw.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await zanspiw.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}}
break
case 'cekidgc': {
if (!isCreator) return reply(mess.OnlyOwner)
let getGroups = await zanspiw.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `${monospace("LIST  GRUP")}\n\nTotal grup: ${anu.length} Grup\n\n`
for (let x of anu) {
let metadata2 = await zanspiw.groupMetadata(x)
teks += `- Nama: ${metadata2.subject}\n- ID: ${metadata2.id}\n- Member: ${metadata2.participants.length}\n\n`
}
m.reply(teks)
}
break
case "pushkontak2": {
if (!isCreator) return;
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.cekidgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.cekidgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.cekidgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await zanspiw.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await zanspiw.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await zanspiw.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
//===================[ BATAS CASE ]=====================\\
default:

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
async function t2sp(buffer) {
  const groq = new Groq({ apiKey: "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" });

  await fs.writeFileSync("./audio.mp3", buffer);
  const transcription = await groq.audio.transcriptions.create({
    file: await fs.createReadStream("./audio.mp3"),
    model: "whisper-large-v3-turbo",
    language: "id",
    response_format: "verbose_json",
  });
  return transcription.text;
}

if ((mime.includes("audio") || budy) && m.chat.includes("@s.whatsapp.net")) {
  if (!autoaidb.aktif[sender]) {
    if (budy && budy.toLowerCase() === "help") {
      autoaidb.aktif[sender] = { lastsend: now };
      autoaidb.session[sender] = { chat: [] };
      aiwriteDB(dbPath, autoaidb);
      return m.reply(`Halo ${m.pushName}, AI aktif. Tanya apapun ke saya!`);
    }
    return;
  }
  
  if (budy && budy.toLowerCase() === "matikanai") {
    delete autoaidb.aktif[sender];
    delete autoaidb.session[sender];
    m.reply("AI dimatikan.");
    return aiwriteDB(dbPath, autoaidb);
  }
if (!budy && mime.includes("audio")) budy = await t2sp(await m.download())
  try {
    autoaidb.aktif[sender].lastsend = now;
    autoaidb.session[sender].chat = autoaidb.session[sender].chat || [];

    const userMessage = { role: "user", content: budy };
    const groq = new Groq({ apiKey: "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" });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Kamu adalah AI yang santai, suka bercanda, dan menggunakan bahasa sehari-hari. Jika awalnya menggunakan bahasa Indonesia, lanjutkan berbahasa Indonesia.",
        },
        ...autoaidb.session[sender].chat,
        userMessage,
      ],
      model: model_saatini,
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const assistantReply =
      chatCompletion.choices[0]?.message?.content || "Maaf, ada kesalahan.";
    autoaidb.session[sender].chat.push(userMessage);
    autoaidb.session[sender].chat.push({ role: "assistant", content: assistantReply });

    aiwriteDB(dbPath, autoaidb);

    m.reply(assistantReply);
  } catch (error) {
    console.error("Error in AI chat:", error);
    m.reply("Maaf, terjadi kesalahan saat memproses pesan.");
  }
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
