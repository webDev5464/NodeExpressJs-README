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
npm init
```

```bash
npm i express
```

## 📌 Run as a localhost.

- create new file `index.js`.

```js
const express = require('express')
const app = express()

const port = 8080
app.listen(port, () => {
  console.log(`Server Started : http://localhost:${port}`);
})
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
const express = require('express')
const app = express()

/* ----- */
app.get('/', (req, res) => {
  res.send("Hello Express")
})
/* ----- */

const port = 8080
app.listen(port, () => {
  console.log(`Server Started : http://localhost:${port}`);
})
```

#### 🔺 multiple API

**`index.js`**

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello Express")
})

app.get('/about', (req, res) => {
  res.send("This is a about page")
})

const port = 8080
app.listen(port, () => {
  console.log(`Server Started : http://localhost:${port}`);
})
```

change localhost path end check output :- `http://localhost:7070/about`

## 📌 What is req (request) & res (response) ?

In Express.js, "request" and "response" are two fundamental objects used when handling HTTP requests and generating HTTP responses in your web applications. They represent the incoming request made by a client (usually a web browser) and the outgoing response that your server sends back to the client. Here's what each object represents:

**1. ** Request (`req`):

- The `req` object represents the HTTP request made by the client. It contains information about the incoming request, such as the URL, HTTP method (GET, POST, etc.), request headers, request parameters, and any data sent in the request body.

- You can access various properties and methods on the `req` object to retrieve data from the request, such as `req.params`, `req.query`, `req.body`, and `req.headers`.

- You can also use `req` to perform tasks like authentication, validation, and processing the incoming data.

**2. ** Response (`res`):

- The `res` object represents the HTTP response that your Express application will send back to the client. It's used to set response headers, send data to the client, and manage the response status.

- You can use methods and properties on the `res` object to send data back to the client, including `res.send()`, `res.json()`, and `res.render()`.

- You can also set HTTP response headers using methods like `res.set()` and set the HTTP status code using `res.status()`.

Here's a simple example of how you might use req and res in an Express route handler:

```js
app.get('/example', (req, res) => {
  // Access request data
  const queryParam = req.query.paramName;
  
  // Send a response to the client
  res.status(200).send('Hello, World!');
});
```

In this example, the `req` object is used to access the query parameter `paramName` from the URL, and the `res` object is used to send the "Hello, World!" response with an HTTP status code of 200.

These objects are essential for building web applications in Express.js as they allow you to handle incoming requests and send appropriate responses to the client based on those requests.

## 📌 Basic Routing

**Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

#### 🔺 get method

Respond with Hello World! on the homepage:

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

#### 🔺 post method

Respond to POST request on the root route (/), the application’s home page:

```js
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```

#### 🔺 put method

Respond to a PUT request to the /user route:

```js
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```

#### 🔺 delete method

Respond to a DELETE request to the /user route:

```js
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```

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

Create new dir `configs` end file `databaseConnection.js`.

**`/configs/databaseConnection.js`**

```js
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://readme:readme@nodeexpress-readme.5sz7pau.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected...");
})
```

require in index.js

**`index.js`**

```js
require('./configs/databaseConnection')
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