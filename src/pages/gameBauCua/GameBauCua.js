import React from "react";
import BauCua from "./component/baucua/BauCua";
import Lac from "./component/lac/Lac";
import "./gameBaucua.css";
const GameBauCua = () => {
  return (
    <div>
      <div className="game__baucua">
        GameBauCua
        <div className="game__baucua__flex">
          <BauCua />
          <Lac />
        </div>
      </div>
    </div>
  );
};

export default GameBauCua;
