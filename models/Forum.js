const { Schema, model } = require('mongoose')

const Forum = model('forum', new Schema({
  menuName: String,
  headerName: String,
  icon: String,
  threads: {
      type: Number,
      default: 0
  },
  posts: {
      type: Number,
      default: 0
  }
}))

module.exports = Forum