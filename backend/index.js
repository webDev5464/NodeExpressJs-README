const express = require("express");
const app = express();
app.use(express());
app.use(express.json());

require("./config/mongoConnecting.js");
const dataControl = require("./controllers/dataControl.js");

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.post("/data", dataControl);

const PORT = 5464;
app.listen(PORT, () => {
  console.log(`Running : http://localhost:${PORT}`);
});
