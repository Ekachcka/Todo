const Todo = require("../db/models/todo");

module.exports.createTodo = async (req, res, next) => {
  try {
    const { body } = req;

    const todo = await Todo.create(body);

    res.status(201).send({data:todo})
} catch (error) {
    next(error);
  }
};
