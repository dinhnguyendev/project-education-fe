import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import socket from "../../../../socket.io/socket.io";
import "./cells.css";
const Cells = ({ id, x, y, isMyTurn, isX, oppID, room, isClicked }) => {
  const [inState, setInState] = useState("");
  const boardData = useSelector((state) => state.gamecaro.boardData);
  const location = useLocation();
  const dataLocation = location.state.data;
  // console.log("locationzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  // console.log(location);
  const handleClick = () => {
    let req = {
      id: dataLocation.id,
      in: inState,
      x,
      y,
      isMyTurn,
      isX: dataLocation.isX,
      oppID,
      room: dataLocation.idRooms,
    };
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
