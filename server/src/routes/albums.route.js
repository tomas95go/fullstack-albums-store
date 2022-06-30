const express = require("express");
const albumsRouter = express.Router();

albumsRouter.get("/", (request, response) => {
  const albums = [
    {
      id: 1,
      name: "Hola!",
    },
  ];
  response.status(200).json({
    message: "Album list successfully retrieved",
    albums,
  });
});

albumsRouter.post("/", (request, response) => {
  const album = request.body;
  response.status(200).json({
    message: "New album successfully created",
    album,
  });
});

module.exports = albumsRouter;
