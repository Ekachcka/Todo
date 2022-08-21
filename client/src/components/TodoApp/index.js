import React from "react";
import "../TodoGeneral.css";
import "./TodoApp.css";
import Todos from "../Todos";
import TodoForm from "../TodoForm";
import TodoStatistic from "../TodoStatistic";

const TodoApp = () => {
  return (
    <div className="main">
      <div className="container-todo">
        <h1 className="todo-text">Todo App</h1>
        <TodoForm />
        <Todos />
        <TodoStatistic />
      </div>
    </div>
  );
};
export default TodoApp;
