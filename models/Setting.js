const { Schema, model } = require('mongoose')

const Setting = model('setting', new Schema({
  name: String,
  data: Object
}))

module.exports = Setting