let mongoose = require('mongoose')
let Schema = mongoose.Schema
let name = "Ship"

let schema = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model(name, schema)