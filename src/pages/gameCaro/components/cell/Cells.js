import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import socket from "../../../../socket.io/socket.io";
import "./cells.css";
const Cells = ({ id, x, y, isMyTurn, isX, oppID, room, isClicked, Ischeck, handleClick }) => {
  const [inState, setInState] = useState("");
  const location = useLocation();
  const dataLocation = location.state.data;

  // const handleClick = () => {
  //   if (isMyTurn) {
  //     return alert("doi doi thu");
  //   } else {
  //     let req = {
  //       id: dataLocation.id,
  //       in: inState,
  //       x,
  //       y,
  //       isMyTurn,
  //       isX: dataLocation.isX,
  //       oppID,
  //       room: dataLocation.idRooms,
  //     };
  //     console.log("req");
  //     console.log(req);
  //     socket.emit("update--check--caro", req);
  //   }
  // };

  const getValueInCell = () => {
    console.log("re-render");
    if (isClicked) {
      return Ischeck ? "❌" : "⭕";
    } else {
      return "";
    }
  };
  return (
    <div className="cells" onClick={() => handleClick(x, y)}>
      {getValueInCell()}
    </div>
  );
};

export default Cells;
