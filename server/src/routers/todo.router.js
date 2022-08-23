const todoRouter = require("express").Router();
const TodoController = require("../controllers/todo.controller");

todoRouter.post("/", TodoController.createTodo);
todoRouter.get("/");

module.exports = todoRouter;
