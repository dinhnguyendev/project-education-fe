import React, { useEffect } from "react";
import GameContainer from "./components/gameContainer/GameContainer";
import TimerTurtle from "./components/timer/TimerTurtle";
import "./gameTurtle.css";
import socket from "./../../socket.io/socket.io";
import Bet from "./components/bet/Bet";

const GameTurtle = () => {
  useEffect(() => {
    socket.emit("join--room-turtle");
  }, []);
  return (
    <div className="game__turtle__box">
      <div className="game__turtle game__turtle__brg">
        <TimerTurtle />
        <GameContainer />
        <Bet/>
      </div>
    </div>
  );
};

export default GameTurtle;
