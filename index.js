const express = require("express");
//const router = require("../router/route");
const router=require("./router/route")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://atifpervez:34BmDa5XVvtznQvO@code.8mvlc.mongodb.net/My-Project",
    { useNewurlParser: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(process.env.PORT || 3000, function () {
  console.log("port is running at:" + (process.env.PORT || 3000));
});
