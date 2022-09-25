import React from "react";
import "./timer.css";
import "https://cdn.lordicon.com/xdjxvujz.js";
import socket from "../../../../socket.io/socket.io";
import { useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(60);
  socket.on("server--time--watting", (count) => {
    setTimer(count);
  });

  return (
    <div className="timer">
      <div className="timer__heading">Thời gian: </div>
      <div className="timer__flex">
        <div className="timer__icon">
          <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com/mgmiqlge.json"
            trigger="loop"
            delay="50"
            colors="primary:#3a3347,secondary:#f24c00,tertiary:#4bb3fd,quaternary:#ebe6ef"
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
  );
};

export default Timer;
