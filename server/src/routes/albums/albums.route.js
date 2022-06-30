const express = require("express");
const {
  httpGetAllAlbums,
  httpPostNewAlbum,
} = require(`${__dirname}/albums.controller`);

const albumsRouter = express.Router();

albumsRouter.get("/", httpGetAllAlbums);

albumsRouter.post("/", httpPostNewAlbum);

module.exports = albumsRouter;
