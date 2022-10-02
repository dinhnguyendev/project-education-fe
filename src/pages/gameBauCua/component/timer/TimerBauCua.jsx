import React from "react";
import "./timer.css";

import { useState } from "react";
const TimerBauCua = () => {
  const [timer, setTimer] = useState(60);
  return (
    <div className="timer">
      <div className="timer__heading">Thời gian: </div>
      <div className="timer__flex">
        <div className="timer__icon">
          <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com/zfpphchw.json"
            trigger="loop"
            delay="2000"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
        {/* {timer && timer <= 10 ? (
          <div className="timer__count timer__color">{timer}</div>
        ) : (
          <div className="timer__count">{timer}</div>
        )} */}
        60
      </div>
    </div>
  );
};

export default TimerBauCua;
