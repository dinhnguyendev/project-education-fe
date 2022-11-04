import React, { useEffect, useState } from "react";
import "./gameContainer.css";
import yellowTurtle from "../../../../assets/image/tutrle/yellowTurle.svg";
import yellowTurtleRun from "../../../../assets/image/tutrle/yellowTurtlrRun.svg";
import blueTurtle from "../../../../assets/image/tutrle/blueTurtle.svg";
import blueTurtleRun from "../../../../assets/image/tutrle/blueTurleRun.svg";
import pinkTurtle from "../../../../assets/image/tutrle/pinkTurle.svg";
import pinkTurtleRun from "../../../../assets/image/tutrle/pinkTurleRun.svg";
import yellowFlag from "../../../../assets/image/tutrle/yellow-flag.svg";
import redFlag from "../../../../assets/image/tutrle/red-flag.svg";
import blueFlag from "../../../../assets/image/tutrle/blue-flag.svg";
const GameContainer = () => {
  const [yellowTurtleState, setYellowTurtle] = useState(yellowTurtle);
  const [blueTurtleState, setBlueTurtle] = useState(blueTurtle);
  const [pinkTurtleState, setPinkTurtle] = useState(pinkTurtle);
  let WIN_I;
  let WIN_II;
  let WIN_III;
  const currentD = 1070;
  const minCurrent = 5;
  const maxCurrent = 30;
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    const id = setInterval(() => {
      setYellowTurtle((pre) => (pre == yellowTurtle ? yellowTurtleRun : yellowTurtle));
      setBlueTurtle((pre) => (pre == blueTurtle ? blueTurtleRun : blueTurtle));
      setPinkTurtle((pre) => (pre == pinkTurtle ? pinkTurtleRun : pinkTurtle));
    }, 500);
    return () => clearInterval(id);
  }, []);
  const handleRunByMillisecondsTutleYellow = () => {
    let responTotal = 0;
    const idInterval = setInterval(() => {
      const resRunBytimmer = getRandomInt(minCurrent, maxCurrent);
      responTotal = responTotal + resRunBytimmer;
      const elementYellow = document.querySelector(".run__svg--yellow");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + resRunBytimmer;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (responTotal >= currentD) {
        if (!WIN_I) {
          WIN_I = 1;
          console.log("nhat : " + WIN_I);
        } else if (!WIN_II) {
          WIN_II = 1;
          console.log("nhi : " + WIN_II);
        } else {
          WIN_III = 1;
          console.log("ba : " + WIN_III);
        }

        clearInterval(idInterval);
      }
    }, 500);
  };
  const handleRunByMillisecondsTutlePink = () => {
    let responTotal = 0;
    const idInterval = setInterval(() => {
      const resRunBytimmer = getRandomInt(minCurrent, maxCurrent);
      responTotal = responTotal + resRunBytimmer;
      const elementYellow = document.querySelector(".run__svg--pink");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + resRunBytimmer;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (responTotal >= currentD) {
        if (!WIN_I) {
          WIN_I = 2;
          console.log("nhat : " + WIN_I);
        } else if (!WIN_II) {
          WIN_II = 2;
          console.log("nhi : " + WIN_II);
        } else {
          WIN_III = 2;
          console.log("ba : " + WIN_III);
        }
        clearInterval(idInterval);
      }
    }, 500);
  };
  const handleRunByMillisecondsTutleBlue = () => {
    let responTotal = 0;
    const idInterval = setInterval(() => {
      const resRunBytimmer = getRandomInt(minCurrent, maxCurrent);
      responTotal = responTotal + resRunBytimmer;
      const elementYellow = document.querySelector(".run__svg--blue");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + resRunBytimmer;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (responTotal >= currentD) {
        if (!WIN_I) {
          WIN_I = 3;
          console.log("nhat : " + WIN_I);
        } else if (!WIN_II) {
          WIN_II = 3;
          console.log("nhi : " + WIN_II);
        } else {
          WIN_III = 3;
          console.log("ba : " + WIN_III);
        }
        clearInterval(idInterval);
      }
    }, 500);
  };
  const handleRunByMilliseconds = () => {
    handleRunByMillisecondsTutleBlue();
    handleRunByMillisecondsTutlePink();
    handleRunByMillisecondsTutleYellow();
  };
  return (
    <div>
      <button onClick={() => handleRunByMilliseconds()}>click</button>
      <div className="game__turtle">
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div id="0" className="game__turtle__item__svg run__svg--yellow">
              <img className="game__turtle__item__svg__icon" src={yellowTurtleState} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src={yellowFlag} className="game__turtle__item__flag__image" />
          </div>
        </div>
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div className="game__turtle__item__svg run__svg--pink">
              <img className="game__turtle__item__svg__icon" src={pinkTurtleState} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src={redFlag} className="game__turtle__item__flag__image" />
          </div>
        </div>
        <div className="game__turtle__item">
          <div className="game__turtle__item__image">
            <div className="game__turtle__item__svg run__svg--blue">
              <img className="game__turtle__item__svg__icon" src={blueTurtleState} alt="" />
            </div>
          </div>

          <div className="game__turtle__item__flag">
            <img src={blueFlag} className="game__turtle__item__flag__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
