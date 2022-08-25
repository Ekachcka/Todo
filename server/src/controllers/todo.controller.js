const Todo = require("../db/models/todo");

module.exports.createTodo = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const todo = await Todo.create(body);

    res.status(201).send({ data: todo });
  } catch (error) {
    next(error);
  }
};
module.exports.getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.status(200).send({ data: todos });
  } catch (error) {
    next(error);
  }
};
module.exports.updateTodo = async (req, res, next) => {
  try {
    const {
      body,
      params: { todoId },
    } = req;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, body, {
      new: true,
    });

    res.status(200).send({ data: todo });
  } catch (error) {
    next(error);
  }
};
module.exports.doAllTodos = async (req, res, next) => {
  try {
    await Todo.updateMany(_,isDune, {
      isDune:true
    });

    res.status(200).send({ data: Todo });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
    } = req;

    const todo = await Todo.findByIdAndDelete(todoId);

    res.status(201).send({ data: todo });
  } catch (error) {
    next(error);
  }
};
