import React, { useEffect } from "react";
import "./timer.css";
import { useState } from "react";
import socket from "./../../../../socket.io/socket.io";
const TimerTurtle = () => {
  const [timer, setTimer] = useState();
  socket.on("server--turtle--watting", (count) => {
    setTimer(count);
  });
  useEffect(() => {
    if (timer == 0) {
      setTimer("...");
      socket.emit("turtle-delay", "hello");
    }
  }, [timer]);
  const handle = () => {
    socket.emit("turtle-start", "hello");
  };
  return (
    <div className="timer__flex">
      <div className="timer__count">
        {timer && timer <= 10 ? (
          <div className="timer__count timer__color">{timer}</div>
        ) : (
          <div className="timer__count">{timer}</div>
        )}
      </div>
    </div>
  );
};

export default TimerTurtle;
