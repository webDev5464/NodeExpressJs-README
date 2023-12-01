const express = require("express")
const postData = require("./Controllers/postData.controller")
const getData = require("./Controllers/getData.controller")
const app = express()
app.use(express.json())
const PORT = 8080

// Require mongodb connection file
require("./Configs/mongoose.config")

// post data
app.post("/postData", postData)

// get data
app.get("/getData", getData)

app.listen(PORT, () => {
  console.log("Server Started...");
})