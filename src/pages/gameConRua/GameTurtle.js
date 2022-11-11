import React, { useEffect } from "react";
import GameContainer from "./components/gameContainer/GameContainer";
import TimerTurtle from "./components/timer/TimerTurtle";
import "./gameTurtle.css";
import socket from "./../../socket.io/socket.io";

const GameTurtle = () => {
  useEffect(() => {
    socket.emit("join--room-turtle");
  }, []);
  return (
    <div className="game__turtle">
      <TimerTurtle />
      <GameContainer />
    </div>
  );
};

export default GameTurtle;
