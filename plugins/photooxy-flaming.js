let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Contoh: ```!flaming Ardhixs```', m)
if (text > 10) return conn.reply(m.chat, '*Text Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
let link = 'https://axs-api.herokuapp.com/api/photooxy/flaming?text=' + text
conn.sendFile(m.chat, link, 'ArdhiXs.png', '_Nih tod_\n*_@IG:ardhixs__*', m)
}
handler.help = ['flaming']
handler.tags = ['photooxy']
handler.command = /^flaming|photooxyflaming$/i

handler.limit = true
handler.fail = null

module.exports = handler
