const createdProductData = require("../controllers/createProductData")

const postProductData = async (req, res) => {
  console.log(req.body);
  const data = createdProductData({
    category: req.body.category,
    brand: req.body.brand,
    img_1: req.body.img_1,
    img_2: req.body.img_2,
    img_3: req.body.img_3,
    title: req.body.title,
    weight: req.body.weight,
    price: req.body.price,
    discount: req.body.discount,
  })

  await data.save()
}

module.exports = postProductData