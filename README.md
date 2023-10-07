# Node Js + Express Js + MongoDb 🎓

## Dependency Install ⚙️

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

## Node end Express Install 📌

- mkdir myBackend
- cd myBackend

Now install Express in the myBackend directory and save it in the dependencies list. For example:

```bash
npm i express
```

## Write Hello World!

- create new file `index.js`.

```js
const express = require("express");
const app = express();
const port = 4194;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running... , http://localhost:${port}`);
});
```

let's run in browser. nodemon for starting server.

```bash
PS D:\NodeExpress\backend> nodemon
```

🎉 **Congratulation**: Your local host started.