const productData = require("../controllers/createProductData");

let getProductsByCategory = async (req, res) => {
  let productCategory = await productData.find({ category: req.params.products })
  console.log(productCategory);
  res.send({ process: true, productCategory })
}

module.exports = getProductsByCategory