const todoRouter = require("express").Router();
const TodoController = require("../controllers/todo.controller");

todoRouter.post("/", TodoController.createTodo);
todoRouter.get("/", TodoController.getTodo);
todoRouter.put("/:todoId", TodoController.updateTodo);
todoRouter.put("/", TodoController.doAllTodos);
todoRouter.delete("/:todoId", TodoController.deleteTodo);

module.exports = todoRouter;
