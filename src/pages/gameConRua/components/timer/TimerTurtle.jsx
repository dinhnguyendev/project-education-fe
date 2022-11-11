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
      socket.emit("turtle-delay", "hello");
    }
  }, [timer]);
  const handle = () => {
    socket.emit("turtle-start", "hello");
  };
  return (
    <div className="timer__flex">
      <button onClick={() => handle()}>ádasdsadasd</button>
      <div className="timer">
        <div className="timer__heading">Thời gian: </div>
        <div className="timer__flex">
          <div className="timer__icon">
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/zfpphchw.json"
              trigger="loop"
              delay="2000"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
          {timer && timer <= 10 ? (
            <div className="timer__count timer__color">{timer}</div>
          ) : (
            <div className="timer__count">{timer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimerTurtle;
