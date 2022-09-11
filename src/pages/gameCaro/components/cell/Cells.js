import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../../../socket.io/socket.io";
import "./cells.css";
const Cells = ({ id, x, y, isMyTurn, isX, oppID, room, isClicked }) => {
  const [inState, setInState] = useState("");
  const boardData = useSelector((state) => state.gamecaro.boardData);
  const handleClick = () => {
    let req = { id, in: inState, x, y, isMyTurn, isX, oppID, room };
    console.log("req");
    console.log(req);
    // req["header"] = "update-check";
    socket.emit("update--check--caro", req);
  };
  const getValueInCell = () => {
    if (isClicked) {
      return isX ? "❌" : "⭕";
    } else {
      return "";
    }
  };
  return (
    <div className="cells" onClick={handleClick}>
      {getValueInCell()}
    </div>
  );
};

export default Cells;
