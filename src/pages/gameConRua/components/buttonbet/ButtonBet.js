import React from "react";
import "./buttonbet.css";
import { useEffect, useState } from "react";
const ButtonBet = ({ handleChangeBet, title, bets, colors, active }) => {
  const [colorState, setColorState] = useState();
  const handleAddClassList = () => {
    const idClass = `.bet__flex__${bets}`;
    const elements = document.querySelector(idClass);
    if (active == bets) {
      console.log(elements);
      elements.classList.add("bet__active");
    } else {
      elements.classList.remove("bet__active");
    }
  };
  useEffect(() => {
    setColorState(colors);
  }, [colors]);
  useEffect(() => {
    handleAddClassList();
  }, [active]);
  return (
    <div className="bet">
      <div
        style={{ backgroundColor: `${colorState}` }}
        onClick={() => handleChangeBet(bets)}
        className={`bet__flex bet__flex__${bets}`}
      >
        <div className="bet__heading">{title}</div>
        <div className="bet__number">2x</div>
      </div>
    </div>
  );
};

export default ButtonBet;
