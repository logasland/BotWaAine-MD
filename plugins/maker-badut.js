const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require ("axios")
const fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://ardhixsquerpants.herokuapp.com/api/maker/badut?img=${url}`
  let stiker = await getBuffer(wanted)
  if (stiker) return conn.sendMessage(m.chat, { image: stiker}, {quoted: m})
  
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['badut']
handler.tags = ['maker']
handler.command = /^badut$/i
handler.limit = true
handler.fail = null

module.exports = handler

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
