const { Schema, model } = require('mongoose')

const IconPack = model('iconpack', new Schema({
  name: String,
  icons: Array
}))

module.exports = IconPack