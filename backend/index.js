const express = require("express");
const app = express();
app.use(express());
app.use(express.json());

require("./config/mongoConnecting.js");
const postData = require("./model/postData.js");
const getData = require("./model/getData.js");
const postProductData = require("./model/postProductData.js");
const getProduct = require("./model/getProductData.js");
const getProductsByCategory = require("./model/getProductsByCategory.js");

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.post("/data", postData);
app.get("/getData", getData);

app.post("/postProductData", postProductData)
app.get("/getAllProducts", getProduct)
app.get("/products/category/:products", getProductsByCategory)

const PORT = 5464;
app.listen(PORT, () => {
  console.log(`Running : http://localhost:${PORT}`);
});
