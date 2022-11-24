import React, { useEffect, useState } from "react";
import GameContainer from "./components/gameContainer/GameContainer";
import TimerTurtle from "./components/timer/TimerTurtle";
import "./gameTurtle.css";
import socket from "./../../socket.io/socket.io";
import Bet from "./components/bet/Bet";

const GameTurtle = () => {
  const [idRooms, setIdRooms] = useState("");
  useEffect(() => {
    socket.emit("join--room-turtle");
  }, []);
  useEffect(() => {
    socket.on("server--join--room-uid", (data) => {
      setIdRooms(data);
    });
  }, []);
  return (
    <div className="turtle__big">
      <div className="game__turtle__box">
        <div className="game__turtle game__turtle__brg">
          <TimerTurtle />
          <GameContainer />
        </div>
      </div>
      <Bet idRooms={idRooms} />
    </div>
  );
};

export default GameTurtle;
