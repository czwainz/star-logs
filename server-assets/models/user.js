let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT = 15
let name = "User"

let schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  shipId: { type: ObjectId, ref: 'Ship', required: true }
})

schema.statics.hashPassword = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hash)
}

module.exports = mongoose.model(name, schema)