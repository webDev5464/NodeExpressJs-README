const mongoose = require("mongoose")

const CreateData = mongoose.Schema({
  fullName: String,
  contactNumber: Number,
  email: String
})

const dataModel = mongoose.model("PersonData", CreateData)

module.exports = dataModel