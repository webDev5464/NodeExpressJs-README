# 📌 How to Connect database with express.js ?

#### ⚙️ Installation

```bash
npm init -y
```

```bash
npm i express
```

```bash
npm i mongoose
```

- Create dir and file `/Configs/mongoose.config.js`

```js
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/MongooseConnection").then(() => {
  console.log("Connect Database");
})
```

- Create file `index.js`

```js
const express = require("express")
const app = express()
const PORT = 8080

// Require mongodb connection file
require("./Configs/mongoose.config")

app.listen(PORT, () => {
  console.log("Server Started...");
})
```

# 📌 Data Post in Database

- Create dir and file `/Models/data.model.js`

```js
const mongoose = require("mongoose")

const CreateData = mongoose.Schema({
  fullName: String,
  contactNumber: Number,
  email: String
})

const dataModel = mongoose.model("PersonData", CreateData)

module.exports = dataModel
```

- Create dir and file `/Controllers/postData.controller.js`

```js
const dataModel = require("../Models/data.model")

const postData = async (req, res) => {
  const data = dataModel({
    fullName: req.body.fullName,
    contactNumber: req.body.contactNumber,
    email: req.body.email
  })

  const result = await data.save()

  if (result) {
    res.send({
      success: true, message: "Data Add successfully", data: result
    })
    console.log("Data Add successfully");
  } else {
    res.send({
      success: false, message: "Data not add! Soothing Wrong"
    })
    console.log("Data not add! Soothing Wrong");
  }
}

module.exports = postData
```

****

**Using Postmen in post method and post raw json data type**

- localhost link : http://localhost:8080/postData

```json
{
    "fullName": "John Doe",
    "contactNumber": 6363636363,
    "email": "johnDoe@example.com"
}
```

# 📌 Get all data with postman

- Create new file `/Controllers/getData.controller.js`

```js
const dataModel = require("../Models/data.model")

const getData = async (req, res) => {
  let data = await dataModel.find({})
  console.log(data);

  if (data) {
    res.send({ success: true, message: "Get all data", data })
  } else {
    res.send({ success: false, message: "Soothing Wrong" })
  }
}

module.exports = getData
```

- require in `index.js`

```js
// get data
app.get("/getData", getData)
```

**Using postman thru get all data**

- select get method

- localhost link : http://localhost:8080/getData