const express = require('express')
const cors = require('cors')
const clientData = require('./controllers/postDataControllers')
const getData = require('./controllers/getDataControllers')
const app = express()
app.use(express())
app.use(express.json())
app.use(cors())

require('./configs/databaseConnection')

app.get('/', (req, res) => {
  let heading = `
    <h1>Server is running...</h1>
    <p>Client Side : <a href="http://localhost:5173/" target="_black">Click!</a></p>
  `
  res.send(heading)
})

app.post("/clientDataPost", clientData)
app.get("/clientDataGet", getData)

const PORT = 53779
app.listen(PORT, () => {
  console.log(`Server running :- http://localhost:${PORT}`)
})