const { Schema, model } = require('mongoose')

const User = model('user', new Schema({
  username: String,
  username_lower: String,
  email: String,
  password: String,
  main_usergroup: {
    type: Number,
    default: 1
  },
  usergroups: {
    type: Array,
    default: [1]
  },
  xp: {
    type: Number,
    default: 10
  },
  level: {
    type: Number,
    default: 1
  },
  avatar: {
    type: String,
    default: 'default.svg'
  },
  awards: {
    type: Array,
    default: []
  },
  signature: {
    type: String,
    default: null
  },
  discord: {
    type: String,
    default: null
  },
  website: {
    type: String,
    default: null
  },
  created: Number,
  updated: Number
}))

module.exports = User