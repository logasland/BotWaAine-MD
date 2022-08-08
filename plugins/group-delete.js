let handler = function (m) {
    /*if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
    if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })*/
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(m.chat, { delete: {
  remoteJid: m.chat,
  id: m.quoted.id,
  fromMe: m.quoted.fromMe,
  participant: m.quoted.sender
}})

}
handler.help = ['del', 'delete']
handler.tags = ['group']

handler.command = /^tesss$/i
handler.owner = true

module.exports = handler
