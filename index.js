const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 4000;
const database = require("./database");

app.use(cors());

app.get("/", async (req, res, next) => {
  res.send(database);
});

app.set("PORT", process.env.PORT || PORT);
app.listen(app.get("PORT"), (server) => {
  console.info(`Server listen on port ${app.get("PORT")}`);
});
