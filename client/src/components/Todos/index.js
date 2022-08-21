import React from "react";
import {
  Button,
  Fab,
  ButtonGroup,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../TodoGeneral.css"
import "./Todos.css";

const Todos = () => {
    return (
        <ButtonGroup
        style={{
          width: "100%",
        }}
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            border: 0,
            color: "#000",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            margin: "0 0 8px 0",
            minHeight: "58px",
          }}
          variant="outlined"
          //  onMouseOver={}
          //  onMouseOut={}
        >
          <p
            style={{
              borderRadius: "4px",
              paddingLeft: "10px",
            }}
          >
            <ListItemText primary="Inbox" />
          </p>
          {/* {mouseIn ? ( */}
            <Fab
              variant="rounded"
              color="secondary"
              style={{
                padding: 0,
                borderRadius: "0 4px 4px 0",
                background: "rgb(208, 37, 37)",
              }}
            >
              <DeleteIcon />
            </Fab>
          {/* ) : null} */}
        </Button>
      </ButtonGroup>
    );
  };
  export default Todos;
  