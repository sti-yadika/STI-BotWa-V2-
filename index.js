require("./settings")
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const CFonts = require('cfonts')
const pino = require('pino')
const axios = require('axios')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const readline = require("readline");
const _ = require('lodash')
const Spinnies = require('spinnies');
const spinnies = new Spinnies();
const fetch = require('node-fetch');
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const yargs = require('yargs/yargs')
const PhoneNumber = require('awesome-phonenumber')
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, color } = require('./lib/myfunc')
//=================================================//
const { mongoDB, MongoDBV2 } = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.DATABASE = global.db // Backwards Compatibility
CFonts.say(`Zans`)
CFonts.say(`V1.`, {
   font: 'block',
  align: 'left',
  colors: ['blue'],

});
async function startBotz() {
const readline = require("readline");
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};
async function keyoptions(url, options) {
    try {
        const methodskey = await axios({
            method: "GET",
            url: url,
            headers: {
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            },
            ...options
        });
        return methodskey.data;
    } catch (err) {
        return err;
    }
}
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
    /*let systemkeyy = false;
    if (systemkeyy === false) {
        let xkey;
        if (global.pw) {
            xkey = global.pw;
        } else {
            console.log(chalk.cyan.bold("Masuk Key Nya :"));
            
            xkey = await question(chalk.yellow(""));
        }
        //Akses key/password 
        setTimeout(async () => {
      const buff = Buffer.from("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FsaWZhdGFoZmF1emkvRmF1emlhbGlmYXRhaC9tYWluL0tleXk=", 'base64').toString("utf-8");
            let mek = await keyoptions(buff);
            if (mek.key !== xkey) {
                const errkey = { text: "Key Tidak Ada Di Dalam Database Kami" };
                spinnies.add("spinner-2", errkey);
                setTimeout(() => {
                    spinnies.fail('spinner-2', { text: "Silahkan di coba lagi" });
                }, 1000);
                await sleep(1000);
                systemkeyy = false;
                process.exit();
            } else {
                spinnies.add("spinner-1", { text: "System sedang Nomor yang kamu masukin." });
                setTimeout(() => {
                    const succeskey = { text: "Akses Key Di Berikan" };
                    spinnies.succeed("spinner-1", succeskey);
                }, 1000);
                systemkeyy = true;
            }
        }, 1000);
       await sleep(3000);
        if (systemkeyy === false) { false }
        rl.close();
    }   */ 
const { version, isLatest } = await fetchLatestBaileysVersion()
const { state, saveCreds } = await useMultiFileAuthState("./stik/pengguna")
const zanspiw = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !global.usePairingCode,
auth: state,
browser: ['Ubuntu', 'Edge', '22.04.4'], // for this issues 
});
  if (global.usePairingCode && !zanspiw.authState.creds.registered) {
const phoneNumber = await question('𝙼𝚊𝚜𝚞𝚔𝚊𝚗 𝙽𝚘𝚖𝚎𝚛 𝚈𝚊𝚗𝚐 𝙰𝚔𝚝𝚒𝚏 𝙰𝚠𝚊𝚕𝚒 𝙳𝚎𝚗𝚐𝚊𝚗 𝟼𝟸 :\n');
let code = await zanspiw.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`𝙲𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 :`, code);
}
{
store.bind(zanspiw.ev)

zanspiw.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!zanspiw.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') || (mek.key.id.startsWith('3EB0') && mek.key.id.length == 22)) return
m = smsg(zanspiw, mek, store)
require("./stik/Yuhao")(zanspiw, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
}
// Setting

zanspiw.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

zanspiw.getName = (jid, withoutContact= false) => {
id = zanspiw.decodeJid(jid)
withoutContact = zanspiw.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zanspiw.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === zanspiw.decodeJid(zanspiw.user.id) ?
zanspiw.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

zanspiw.public = true
global.welcome = true
zanspiw.serializeM = (m) => smsg(zanspiw, m, store);
zanspiw.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
startBotz();
} else if (reason === DisconnectReason.loggedOut) {
} else {
zanspiw.end(`Unknown DisconnectReason: ${reason}|${connection}`);
}
} else if (connection === 'open') {
console.log('[Connected] ' + JSON.stringify(zanspiw.user.id, null, 2));
}
});

zanspiw.ev.on('creds.update', saveCreds)

zanspiw.sendText = (jid, text, quoted = '', options) => zanspiw.sendMessage(jid, { text: text, ...options }, { quoted })

//=========================================\\
zanspiw.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//=========================================\\
zanspiw.sendTextWithMentions = async (jid, text, quoted, options = {}) => zanspiw.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\
zanspiw.sendImageAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await zanspiw.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
zanspiw.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await zanspiw.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
zanspiw.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}


zanspiw.ev.on('group-participants.update', async (anu) => {
  if (!global.welcome) return
    console.log(anu);
    try {
        let metadata = await zanspiw.groupMetadata(anu.id);
        let participants = anu.participants;

        for (let num of participants) {
            let ppuser, ppgroup;

            try {
                ppuser = await zanspiw.profilePictureUrl(num, 'image');
            } catch (err) {
                ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
            }

            try {
                ppgroup = await zanspiw.profilePictureUrl(anu.id, 'image');
            } catch (err) {
                ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
            }

            let xmembers = metadata.participants.length;

            if (anu.action == 'add') {
                let data = await fs.readFileSync('./database/welcome.json', 'utf8');
                let dtxt = JSON.parse(data).text;

                dtxt = dtxt.replace('#user', num.split('@')[0])
                           .replace('#grub', metadata.subject)
                           .replace('#total', xmembers);

                zanspiw.sendMessage(anu.id, {
                    text: dtxt.trim(),
                    contextInfo: {
                        mentionedJid: [num],
                        externalAdReply: {
                            showAdAttribution: true,
                            containsAutoReply: true,
                            title: ` ${global.botname}`,
                            body: `zanspiw`,
                            previewType: 'PHOTO',
                            thumbnailUrl: ppuser, // gunakan URL
                            sourceUrl: 'https://zanspiw-store.alands.xyz',
                        },
                    },
                });
            } else if (anu.action == 'remove') {
                let data = await fs.readFileSync('./database/left.json', 'utf8');
                let dtxt = JSON.parse(data).text;

                dtxt = dtxt.replace('#user', num.split('@')[0])
                           .replace('#grub', metadata.subject)
                           .replace('#total', xmembers);

                zanspiw.sendMessage(anu.id, {
                    text: dtxt.trim(),
                    contextInfo: {
                        mentionedJid: [num],
                        externalAdReply: {
                            showAdAttribution: true,
                            containsAutoReply: true,
                            title: ` ${global.botname}`,
                            body: `zanspiw`,
                            previewType: 'PHOTO',
                            thumbnailUrl: ppuser, // gunakan URL
                            sourceUrl: 'https://zanspiw-store.alands.xyz',
                        },
                    },
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
});
return zanspiw
}


startBotz()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
