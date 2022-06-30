const API_URL = `http://localhost:8000`;

const httpPostNewAlbum = async (newAlbum) => {
  const response = await fetch(`${API_URL}/albums`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newAlbum),
  });
  const album = await response.json();
  console.log(album);
};

const httpGetAllAlbums = async () => {
  const response = await fetch(`${API_URL}/albums`);
  const data = await response.json();
  const { albums } = data;
  return albums;
};

export { httpPostNewAlbum, httpGetAllAlbums };
