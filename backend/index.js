const express = require('express')
const app = express()
require('./configs/databaseConnection')

app.get('/', (req, res) => {
  res.send("Hello Express")
})

const port = 8080
app.listen(port, () => {
  console.log(`Server Started : http://localhost:${port}`);
})