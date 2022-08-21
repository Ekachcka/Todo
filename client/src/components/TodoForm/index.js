import React from "react";
import {
  TextField,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../TodoGeneral.css";
import "./TodoForm.css";

const addYourTodo = {
  minWidth: "83%",
};

const TodoForm = () => {
  return (
    <form className="todo-form">
      <TextField
        id="outlined-basic"
        label="Add your todo"
        variant="outlined"
        style={addYourTodo}
      />
      <Fab
        variant="rounded"
        color="secondary"
        style={{ padding: 0, borderRadius: "2px" }}
      >
        <AddIcon sx={{ fontSize: 40 }} />
      </Fab>
    </form>
  );
};
export default TodoForm;
