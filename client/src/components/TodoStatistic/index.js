import React from "react";
import {
  Fab,
} from "@mui/material";
import "../TodoGeneral.css"
import "./TodoStatistic.css";

const TodoStatistic = () => {
    return (
        <div className="todo-statistic">
          <p className="todo-text">
            You have {5} pending {false ? "tesk" : "tesks"}
          </p>
          <Fab
            className="todo-text"
            variant="rounded"
            color="secondary"
            style={{
              maxHeight: "30px",
              minWidth: "100px",
              padding: 0,
              borderRadius: "8px",
            }}
          >
            Clear All
          </Fab>
        </div>
    );
  };
  export default TodoStatistic;
  