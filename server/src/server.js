const http = require("http");
const app = require("./app");
const { PORT } = require("./constans");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
