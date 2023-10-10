const mongoose = require("mongoose");

const createData = mongoose.Schema({
  title: String,
});

const dataCreated = mongoose.model("createdData", createData);

module.exports = dataCreated;