const { Schema, model } = require('mongoose')

const User = model('user', new Schema({
  username: String,
  username_lower: String,
  email: String,
  password: String,
  main_usergroup: Number,
  usergroups: [],
  xp: Number,
  level: Number,
  avatar: String,
  awards: [],
  signature: String,
  discord: String,
  website: String,
  created: Number,
  updated: Number
}))

module.exports = User