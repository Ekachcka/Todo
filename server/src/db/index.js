const mongoose = require("mongoose");
const { DB_URL, DB_NAME } = require("../constans");


async function start() {
  console.log(`${DB_URL,DB_NAME}`)
  await mongoose.connect(`${DB_URL}`, { dbName: DB_NAME });
}

start()
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

module.exports = {
  Schema: mongoose.Schema,
  model: mongoose.model,
};
