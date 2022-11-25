import React, { useEffect, useRef, useState } from "react";
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
import TimerRun from "../timerRun/TimerRun";
import socket from "../../../../socket.io/socket.io";
import ModalWinner from "../modal/ModalWinner";
import { useNavigate } from "react-router";
import { LINKTO } from "./../../../../constants/constants";
const GameContainer = () => {
  const [yellowTurtleState, setYellowTurtle] = useState(yellowTurtle);
  const [blueTurtleState, setBlueTurtle] = useState(blueTurtle);
  const [pinkTurtleState, setPinkTurtle] = useState(pinkTurtle);
  const [yellowRunPx, setYellowRunPx] = useState();
  const [blueRunPx, setBlueRunPx] = useState();
  const [pinkRunPx, setPinkRunPx] = useState();
  const [result, setResult] = useState();
  const [modal, setModal] = useState(false);
  let WIN_I;
  let WIN_II;
  let WIN_III;
  const currentResult = useRef();
  const currentD = 1070;
  const currentDHidden = 1200;
  const minCurrent = 5;
  const maxCurrent = 30;
  const currentStart = 40;
  const navigate = useNavigate();
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
  const handleRunYellow = (resRunBytimmer) => {
    const elementYellow = document.querySelector(".run__svg--yellow");
    const currentLeft = elementYellow.id;
    const currentRun = +currentLeft + resRunBytimmer;
    elementYellow.setAttribute("id", `${currentRun}`);
    elementYellow.style.left = `${currentRun}px`;
  };
  const handleRunBlue = (resRunBytimmer) => {
    const elementYellow = document.querySelector(".run__svg--blue");
    const currentLeft = elementYellow.id;
    const currentRun = +currentLeft + resRunBytimmer;
    elementYellow.setAttribute("id", `${currentRun}`);
    elementYellow.style.left = `${currentRun}px`;
  };
  const handleRunPink = (resRunBytimmer) => {
    const elementYellow = document.querySelector(".run__svg--pink");
    const currentLeft = elementYellow.id;
    const currentRun = +currentLeft + resRunBytimmer;
    elementYellow.setAttribute("id", `${currentRun}`);
    elementYellow.style.left = `${currentRun}px`;
  };

  const handleStartTutleYellow = () => {
    const idInterval = setInterval(() => {
      const elementYellow = document.querySelector(".run__svg--yellow");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + currentStart;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (currentLeft >= currentDHidden) {
        elementYellow.setAttribute("id", `0`);
        elementYellow.style.left = `0px`;
        clearInterval(idInterval);
      }
    }, 500);
  };
  const handleStartTutlePink = () => {
    const idInterval = setInterval(() => {
      const elementYellow = document.querySelector(".run__svg--pink");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + currentStart;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (currentLeft >= currentDHidden) {
        elementYellow.setAttribute("id", `0`);
        elementYellow.style.left = `0px`;
        clearInterval(idInterval);
      }
    }, 500);
  };
  const handleStartTutleBlue = () => {
    const idInterval = setInterval(() => {
      const elementYellow = document.querySelector(".run__svg--blue");
      const currentLeft = elementYellow.id;
      const currentRun = +currentLeft + currentStart;
      elementYellow.setAttribute("id", `${currentRun}`);
      elementYellow.style.left = `${currentRun}px`;
      if (currentLeft >= currentDHidden) {
        elementYellow.setAttribute("id", `0`);
        elementYellow.style.left = `0px`;
        clearInterval(idInterval);
      }
    }, 500);
  };

  const handleRunStart = () => {
    handleStartTutleBlue();
    handleStartTutlePink();
    handleStartTutleYellow();
  };
  useEffect(() => {
    socket.on("turtle-next--yellow", (resRunBytimmer) => {
      handleRunYellow(resRunBytimmer);
    });
    socket.on("turtle-next--blue", (resRunBytimmer) => {
      handleRunBlue(resRunBytimmer);
    });
    socket.on("turtle-next--pink", (resRunBytimmer) => {
      handleRunPink(resRunBytimmer);
    });
  }, []);
  useEffect(() => {
    socket.on("turtle-winner", (data) => {
      currentResult.current = data;
      handleOpenModal();
      setTimeout(() => {
        handleCloseModal();
        handleRunStart();
        setTimeout(() => {
          socket.emit("join--room-turtle");
        }, 2500);
      }, 3000);
    });
  }, []);
  const handleCloseModal = () => {
    setModal(() => false);
  };
  const handleOpenModal = () => {
    setModal(() => true);
  };
  const handlePlayNow = () => {
    navigate(LINKTO.TURTLE);
  };
  return (
    <div className="game__fine">
      {modal && <ModalWinner result={currentResult} handleCloseModal={handleCloseModal} />}
      <div className="game__turtle__overflow">
        <div className="game__turtle">
          <TimerRun />
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
    </div>
  );
};

export default GameContainer;
