const express = require("express");
const cors = require("cors");
const albumsRouter = require(`${__dirname}/routes/albums.route`);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/albums", albumsRouter);

module.exports = app;
