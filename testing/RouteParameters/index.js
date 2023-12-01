const express = require("express")
const personController = require("./controllers/postPersonData.controller")
const getAllPersonData = require("./controllers/getAllPersonData.controller")
const getPersonDataWithParameter = require("./controllers/getPersonDataWithParameter.controller")
const app = express()
app.use(express.json())
const PORT = 8080
require("./configs/mongo.config")

app.post("/postPersonData", personController)
app.get("/getAllPersonData", getAllPersonData)
app.get("/personData/:city", getPersonDataWithParameter)

app.listen(PORT, () => {
  console.log("Server Started...");
})