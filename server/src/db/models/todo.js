const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    text: { type: String, require: true, maxLength: 255 },
    isDune: { type: Boolean, default: false },
  },
  { timeseries: true });
const Todo = model("Todo", todoSchema);

module.exports = Todo;
