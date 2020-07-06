const { Schema, model } = require('mongoose')

const Category = model('category', new Schema({
  menuName: String,
  icon: String
}))

module.exports = Category