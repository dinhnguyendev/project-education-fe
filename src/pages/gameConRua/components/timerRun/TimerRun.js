import React, { useEffect, useState } from "react";
import socket from "../../../../socket.io/socket.io";
import "./timeRun.css";
const TimerRun = () => {
  const [timer, setTimer] = useState();
  socket.on("server--turtle--run--timer", (count) => {
    setTimer(count);
  });
  useEffect(() => {
    if (timer == 1) {
      setTimer("Run");
    }
    if (timer == 0) {
      setTimer();
    }
  }, [timer]);
  return (
    <div className="timer__box">
      <div className="timer__start">
        <div className="timer__heading__text">{timer}</div>
      </div>
    </div>
  );
};

export default TimerRun;
