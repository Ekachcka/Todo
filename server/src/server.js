const http = require("http");
const app = require("./app");
const { PORT, DB_URL, DB_NAME } = require("./constans");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server started ${PORT} ${DB_URL}${DB_NAME}`);
});
