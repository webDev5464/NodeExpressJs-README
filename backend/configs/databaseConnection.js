const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://readme:readme@nodeexpress-readme.5sz7pau.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected...");
})