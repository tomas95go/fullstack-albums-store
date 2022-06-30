const path = require("path");
const albums = require(path.join(
  __dirname,
  "..",
  "..",
  "models/albums/albums.model"
));

function httpGetAllAlbums(request, response) {
  response.status(200).json({
    message: "Album list successfully retrieved",
    albums,
  });
}

function httpPostNewAlbum(request, response) {
  const album = request.body;
  response.status(200).json({
    message: "New album successfully created",
    album,
  });
}

module.exports = { httpGetAllAlbums, httpPostNewAlbum };
