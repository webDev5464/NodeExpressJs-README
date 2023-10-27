const mongoose = require("mongoose")

const createProductData = mongoose.Schema({
  category: String,
  brand: String,
  img_1: String,
  img_2: String,
  img_3: String,
  title: String,
  weight: String,
  price: Number,
  discount: Number
})

const productData = mongoose.model("productData", createProductData)

module.exports = productData