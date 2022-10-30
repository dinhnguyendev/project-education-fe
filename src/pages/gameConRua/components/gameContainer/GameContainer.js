import React from "react";
import "./gameContainer.css";
import yellowTurtle from "../../../../assets/image/tutrle/yellowTurle.svg";
import yellowTurtleRun from "../../../../assets/image/tutrle/yellowTurtlrRun.svg";
import blueTurtle from "../../../../assets/image/tutrle/blueTurtle.svg";
import blueTurtleRun from "../../../../assets/image/tutrle/blueTurleRun.svg";
import pinkTurtle from "../../../../assets/image/tutrle/pinkTurle.svg";
import pinkTurtleRun from "../../../../assets/image/tutrle/pinkTurleRun.svg";
const GameContainer = () => {
  return (
    <div>
      <div className="game__turtle">
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div className="game__turtle__item__svg">
              <img className="game__turtle__item__svg__icon" src={yellowTurtle} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src="" className="game__turtle__item__flag__image" />
          </div>
        </div>
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div className="game__turtle__item__svg">
              <img className="game__turtle__item__svg__icon" src={pinkTurtle} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src="" className="game__turtle__item__flag__image" />
          </div>
        </div>
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div className="game__turtle__item__svg">
              <img className="game__turtle__item__svg__icon" src={blueTurtle} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src="" className="game__turtle__item__flag__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
