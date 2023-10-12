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

## 📌 Create A home page route

```js
const express = require("express");
const app = express();
const port = 7070;

// Home page route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

#### 🔺 multiple page create route

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

**`./config/mongoConnecting.js`**

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

## 📌 data post in mongodb.

Create new dir `model` end new file `createData.js`

create model in database.

**`controllers/createData.js`**

```js
const mongoose = require("mongoose");

const createData = mongoose.Schema({
  title: String,
});

const dataCreated = mongoose.model("createdData", createData);

module.exports = dataCreated;
```

Create new dir `model` end new file `dataControl.js`

data detail end save data in mongodb.

**`model/dataControl.js`**

```js
const createData = require("../controllers/createData.js");

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
app.use(express());
app.use(express.json());
const postData = require("./controllers/postData.js");

// some code

app.post("/data", postData);
```

## 📌 Data post with postman

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

## 📌 Data get
