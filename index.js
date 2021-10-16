const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 4000;
const database = require("./database.js");

app.use(cors());

app.use(express.static("video"));

app.get("/", async (req, res, next) => {
  res.send(database.database);
});

app.set("PORT", process.env.PORT || PORT);
app.listen(app.get("PORT"), (server) => {
  console.info(`Server listen on port ${app.get("PORT")}`);
});


// http://35.226.164.118