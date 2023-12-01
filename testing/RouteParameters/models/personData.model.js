const mongoose = require("mongoose")

const person = mongoose.Schema({
  fullname: String,
  email: String,
  address: {
    street: String,
    city: String,
    zip: Number
  }
})

const personModel = mongoose.model('Person', person);

module.exports = personModel