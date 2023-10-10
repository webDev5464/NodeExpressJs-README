const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://readme:readme@cluster0.c5tibbd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected database");
  });
