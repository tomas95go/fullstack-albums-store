const http = require("http");
const app = require(`${__dirname}/app`);

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}. URL: http://localhost:${PORT}`);
});
