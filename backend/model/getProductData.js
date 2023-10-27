const createdProductData = require("../controllers/createProductData")

const getProduct = async (req, res) => {
  let data = await createdProductData.find({})
  console.log(data);
  res.send({ process: true, data })
}

module.exports = getProduct