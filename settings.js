// Alwaysfauzi Devoloper Script zanspiw

global.owner = ['628974719922','6285733638294']
global.botname = 'Assistant - Hymannn'
global.author = 'My Sticker'
global.packname = 'Iam Mannn'
global.bodyfooter = 'Mannn Multi Device'
global.fotonya2 = "https://telegra.ph/file/c5eb1485207e04371bc19.jpg"
global.namastore = "Mannn"
global.wlcm = []
global.wlcmm = []
global.delaypushkontak = 5500
global.usePairingCode = true
global.footer = '© ィ• MannnMD 1.0 || Powered By pocketedition09'
global.idch = '120363409989642612@newsletter'
global.newsname = `📡 Always Support × ⌜ MannnMD 1.0 ⌟ © - pocketedition09`
global.nameid = `📡 Always Support × ⌜ MannnMD 1.0 ⌟ © - pocketedition09`
global.botkey = "yoau5Tt3fZQSouo",
// CPANEL SETTING

global.host = "https://ryzx.danzxxprivate.web.id"
global.application = {
  api_key: "ptla_pyDy3fo7g28JdmugHSQGsHFYOGvvZYwZidaEDfybOZp",
  c_api_key: "ptlc_Y0KUyVCzg2ve3qDZLFYBqlGEmJoLsr4vou5McOSO4tD"
}
global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah by telegram 
global.location = '1' // id location by telegram 
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "1", //Mending ga usah diganti
    backups: "1", //Mending ga usah diganti
    allocation: "0" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}

global.nodana = "-" //Nomor dana
global.nogopy = "-" //Nomor Gopay
global.payqris = "-" //Masukan link Qris / url
global.payovo = "-" //Nomor Ovo
global.limitawal = {

    premium: "Infinity",

    free: 100

}

//rpg

global.buruan = {

   ikan: 5,

   ayam: 5,

   kelinci: 5,

   domba: 5,

   sapi: 5,

   gajah: 5

}

global.rpg = {

   darahawal: 100,

   besiawal: 5,

   goldawal: 1,

   emeraldawal: 1,

   umpanawal: 1,

   potionawal: 1

}
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})