let fetch = require('node-fetch')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .fb https://facebook.com/xxxxxx'
m.reply('*_Tunggu 10jam..._*')
let res = await fetch('https://api.violetics.pw/api/downloader/facebook?apikey=91d3-8991-85d2&url=' + encodeURIComponent(text))
let json= await res.json()
conn.sendFile(m.chat, json.result.hd.url, '_@ardhixs__', m)
}
handler.help = ['fb <url>', 'fbdl <url>', 'facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|fbdl|facebook$/i
handler.limit = true

module.exports = handler

/*let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	// let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	let res = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=91d3-8991-85d2&url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.result.hd.url
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', author, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler


let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.videoUrl
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', wm, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler*/
