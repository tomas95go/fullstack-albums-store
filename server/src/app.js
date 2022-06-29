const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.post("/albums", (request, response) => {
  const album = request.body;
  response.status(200).json({
    message: "New album successfully created",
    album,
  });
});

module.exports = app;
