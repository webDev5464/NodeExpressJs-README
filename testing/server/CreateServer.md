# 📌 How to Create Server ?

#### ⚙️ Installation

```bash
npm init -y
```

```bash
npm i express
```

****

- Create `index.js` file

```js
const express = require("express")
const app = express()
const PORT = 8080

app.listen(PORT, () => {
  console.log("Server Started...");
})
```