let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Log'

let schema = new Schema({
  title: { type: String },
  body: { type: String },
  author: { type: ObjectId, ref: 'User' },
  ship: { type: ObjectId, ref: 'Ship' },
  starDate: { type: Number, default: Date.now(), required: true }
})

module.exports = mongoose.model(name, schema)
