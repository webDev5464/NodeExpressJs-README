const mongoose = require('mongoose')

const dataModules = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  pass: String
})

const data = mongoose.model("clientData", dataModules)

module.exports = data