# 🎓 Node Js + Express Js + MongoDb

## ⚙️ Dependency Install

| Link                                                      | description                            |
| :-------------------------------------------------------- | :------------------------------------- |
| [Node Js](https://nodejs.org/en)                          | Install Node Js for backend.           |
| [MongoDb](https://www.mongodb.com/try/download/community) | Install MongoDb software for database. |
| [Postman](https://www.postman.com/downloads/)             | Install Postman software for debugging |

Postman also available in Vs Code as Extension. _Search Postman_

- Now open powershell as administer.

Install nodemon in your system.

- Way install nodemon ?

:- Auto reloading server after changing code.

```bash
npm i nodemon -g
```

```bash
Set-ExecutionPolicy Unrestricted
```

## 📌 Node end Express Install

- mkdir myBackend
- cd myBackend

Now install Express in the myBackend directory and save it in the dependencies list. For example:

```bash
npm i express
```

```bash
npm init
```

## 📌 Run as a localhost.

- create new file `index.js`.

```js
const express = require("express");
const app = express();
const port = 7070;

app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

let's run in browser. nodemon for starting server.

```bash
PS D:\NodeExpress\backend> nodemon
```

🎉 **Congratulation**: Your local host started.

**`index.js`**

## 📌 Create server

```js
const express = require("express");
const app = express();

const port = 7070;
app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

## 📌 Create home page API

**`index.js`**

```js
const express = require("express");
const app = express();

/* ----- */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
/* ----- */

const port = 7070;
app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

#### 🔺 multiple API

**`index.js`**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is a about page route");
});

const port = 7070;
app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

change localhost path end check output :- `http://localhost:7070/about`

## 📌 Connect With mongoDb

- create account in mongoDb database

- create deployment

![CreateDeployment](./assets/createDeployement.png)

- enter cluster username end password.

![clusterUsernamePassword](./assets//clusterUsernamePassword.png)

- Click connect

- Click Drives end copy the link

![connecting database](./assets/connectiong.png)

- install mongoose

```bash
npm i mongoose
```

Create new dir `config` end file `mongoConnecting.js`.

**`/config/mongoConnecting.js`**

```js
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nodeExpressREADME:nodeExpressREADME@cluster0.mivh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected database");
  });
```

require in index.js

**`index.js`**

```js
require("./config/mongoConnecting.js");
```

## 📌 postData in mongodb.

#### 🔺 Create models

Create new dir `models` end new file `createData.js`

create model in database.

**`/models/createData.js`**

```js
const mongoose = require("mongoose");

const createData = mongoose.Schema({
  title: String,
});

const dataCreated = mongoose.model("createdData", createData);

module.exports = dataCreated;
```

#### 🔺 create controllers (API)

Create new dir `controllers` end new file `postData.js`

data detail end save data in mongodb.

**`/controllers/postData.js`**

```js
const createData = require("../models/createData.js");

const postData = async (req, res) => {
  console.log(req.body);
  const data = createData({
    title: req.body.title,
  });

  await data.save();
};

module.exports = postData;
```

Now require end use.

**`index.js`**

```js
const postData = require("./controllers/postData.js");
// Some Code
app.post("/data", postData);
```

#### 🔺 postData with postman

- Create a new collection.
- select post method
- Enter localhost url end path.
- Select body > row > json
- add json form data
- end send
- sending process is continue running than your data is sending successfully

![postman with post data](./assets/postmanWithPostMethod.png)

- check mongodb database cluster data is added.

![data is successfully posted](./assets/mongoDbPostData.png)

#### 🔺 getData method

**`/controllers/getData.js`**

```js
const createData = require("../models/createData");

const getData = async (req, res) => {
  let data = await createData.find({});
  console.log(data);
  res.send({ process: true, data });
};

module.exports = getData;
```

**`index.js`**

```js
const getData = require("./controllers/getData.js");
// Some Code
app.get("/getData", getData);
```

#### 🔺 getData with postman

- click get
- enter url with path

![get method in postman](./assets//getDataInPostman.png)

#### 🔺 deleteData method

**`/controllers/deleteData.js`**

```js
const createData = require("../models/createData");

const deleteData = async (req, res) => {
  const id = req.params.id
  await createData.findByIdAndDelete(id)
}

module.exports = deleteData
```

---

## 📌 createData, postData, getAllData end getCategoryData method

#### 🔺 createData method

- create a new products `models`

**`models/createProductData.js`**

```js
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
```

#### 🔺 postData method

- create new `controllers`

**`/controllers/postProductData.js`**

```js
const createdProductData = require("../models/createProductData")

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
```

**`index.js`**

```js
const postProductData = require("./controllers/postProductData.js");
// Some Code
app.post("/postProductData", postProductData)
```

#### 🔺 getAllData method

- create new `controllers`

**`/controllers/getProductData.js`**

```js
const createdProductData = require("../models/createProductData")

const getProduct = async (req, res) => {
  let data = await createdProductData.find({})
  console.log(data);
  res.send({ process: true, data })
}

module.exports = getProduct
```

**`index.js`**

```js
const getProduct = require("./controllers/getProductData.js");
//Some Code
app.get("/getAllProducts", getProduct)
```

#### 🔺 getCategoryData method

- create new `controllers`

**`/controllers/getProductsByCategory.js`**

```js
const productData = require("../models/createProductData");

let getProductsByCategory = async (req, res) => {
  let productCategory = await productData.find({ category: req.params.products })
  console.log(productCategory);
  res.send({ process: true, productCategory })
}

module.exports = getProductsByCategory
```

**`index.js`**

```js
const getProductsByCategory = require("./controllers/getProductsByCategory.js");
// Some Code
app.get("/products/category/:products", getProductsByCategory)
```