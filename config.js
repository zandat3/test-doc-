const fs = require('fs')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

global.d = new Date()
global.calender = d.toLocaleDateString('id')

    //General Settings 
global.apikey = 'ptla_aORomnjMxKbutwJmXJmaB9bPORK7I0NyjAIxxtwhMCr' //Ganti pake apikey panel lu
global.capikey = 'ptlc_U5fwq86umF5wiwy8cI2VwTcP5jqBCi4X9KYmNW4o8X2' //Ganti Pake Capikey Panel Lu
global.domain = 'https://order.jasavirtex.pro'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu
global.prefa = ['','!','.',',','🐤','🗿']
global.Contributor = '254102074064','','',
global.NamaOwner = '𝐃𝚺𝐕𝐈𝐋 𝐃𝐑𝚺𝐗' //gausah diganti 
global.sessionName = 'ryokunsession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝐃𝐑𝐄𝐗 𝐕𝐈𝐒𝐈𝐎𝐍' //ganti aj klo mau
global.author = '.𝐘𝐎𝐔𝐑 𝐏𝐀𝐏𝐀 𝐃𝐑𝐄𝐗\n\n+254102074064' //ganti aj klo mau
global.packname = '𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐁𝐘' //ganti aj klo mau
global.yt = 'https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v' //gausah diganti
global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`

global.country = `254`

global.system = {
    gmail: `drexmose@gmail.com`,
}

   //Respon
global.mess = { // bagian ini gausah diganti 
    ingroup: '\`𝐇𝐮𝐡, 𝐢𝐬 𝐭𝐡𝐢𝐬 𝐚 𝐠𝐫𝐨𝐮𝐩?💢\`',
    admin: '\`𝐀𝐫𝐞 𝐲𝐨𝐮 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧 𝐛𝐫𝐮𝐡?😝\`',
    owner: '\`𝐅𝐮𝐜𝐤 𝐨𝐟𝐟! 𝐎𝐰𝐧𝐞𝐫𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐨𝐧𝐥𝐲!🗣️\`',
    premium: '\`𝐇𝐮𝐡, 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐚 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐮𝐬𝐞𝐫 𝐧𝐢𝐭𝐰𝐢𝐭?🐦\`',
    seller: '\`𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐥𝐥𝐨𝐰𝐞𝐝 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐬𝐢𝐧𝐜𝐞 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚 𝐬𝐞𝐥𝐥𝐞𝐫😹\`',
    usingsetpp: '\`𝐒𝐞𝐭𝐩𝐩 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐦𝐲 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, 𝐝𝐨 𝐲𝐨𝐮 𝐭𝐡𝐢𝐧𝐤 𝐭𝐡𝐚𝐭 𝐢 𝐚𝐦 𝐬𝐭𝐮𝐩𝐢𝐝?🤓\`',
    wait: '\`𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭🕙\`',
    succes: '\`🌆𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐛𝐫𝐮𝐡😆\`',
    bugrespon: '> 🌆\`𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐢𝐧 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬, 𝐰𝐚𝐢𝐭 𝐟𝐨𝐫 1 𝐦𝐢𝐧𝐮𝐭𝐞\`'
}

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})