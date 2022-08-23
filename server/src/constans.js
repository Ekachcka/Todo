require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL : process.env.DB_URL,
  DB_NAME : process.env.DB_NAME,
//   PORT: 5000,
//   DB_URL: "mongodb://localhost:27017/",
//   DB_NAME: "todo",
};
