const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Vyciok:Hokas.123@cluster0.f3zwdrc.mongodb.net/pizzaa";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log("Mongo DB Connection failed");
});

module.exports = mongoose;
