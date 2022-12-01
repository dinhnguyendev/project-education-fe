import React from "react";
import "./modalWinner.css";
import yellowTurtle from "../../../../assets/image/tutrle/yellowTurle.svg";
import yellowTurtleRun from "../../../../assets/image/tutrle/yellowTurtlrRun.svg";
import blueTurtle from "../../../../assets/image/tutrle/blueTurtle.svg";
import blueTurtleRun from "../../../../assets/image/tutrle/blueTurleRun.svg";
import pinkTurtle from "../../../../assets/image/tutrle/pinkTurle.svg";
import pinkTurtleRun from "../../../../assets/image/tutrle/pinkTurleRun.svg";
import { memo } from "react";
import { isEqual } from "lodash";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { Navigate, useSearchParams } from "react-router-dom";
import { LINKTO } from "../../../../constants/constants";
import socket from "../../../../socket.io/socket.io";
const ModalWinner = ({ result, handleCloseModal, handleRunStart }) => {
  const { WIN_I, WIN_II, WIN_III } = result?.current;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const colorIcon = {
    1: yellowTurtleRun,
    2: pinkTurtleRun,
    3: blueTurtleRun,
  };
  const convert = {
    one: colorIcon[WIN_I],
    two: colorIcon[WIN_II],
    three: colorIcon[WIN_III],
  };
  const handleClose = () => {
    handleCloseModal();
  };
  const handleBack = () => {
    handleCloseModal();
    socket.emit("client--leave--room--by-id", searchParams.get("idRooms"));
    navigate(LINKTO.HOME);
  };
  const handleContinue = () => {
    handleCloseModal();
    handleRunStart();
    socket.emit("client--leave--room--by-id", searchParams.get("idRooms"));
    setTimeout(() => {
      socket.emit("join--room-turtle");
    }, 3000);
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box__flex">
          <div className="">
            <div onClick={() => handleClose()} className="modal__close">
              X
            </div>
            <div className="modal__flex">
              <div className="modal__icon">
                <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/lupuorrc.json"
                  trigger="hover"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </div>
              <div className="modal__table">Bảng xếp hạng: </div>
            </div>
            <div className="modal__container">
              <div className="modal__item">
                <div className="modal__heading">Hạng nhất: </div>
                <div className="modal__text">
                  <img className="game__turtle__item__svg__icon" src={convert?.one} alt="" />
                </div>
              </div>
              <div className="modal__item">
                <div className="modal__heading">Hạng nhì: </div>
                <div className="modal__text">
                  <img className="game__turtle__item__svg__icon" src={convert?.two} alt="" />
                </div>
              </div>
              <div className="modal__item">
                <div className="modal__heading">Hạng ba: </div>
                <div className="modal__text">
                  <img className="game__turtle__item__svg__icon" src={convert?.three} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__button">
          <Button onClick={() => handleBack()}>Trở về</Button>
          <Button onClick={() => handleContinue()} type="primary">
            Chơi tiếp
          </Button>
        </div>
      </div>
    </div>
  );
};
const conditions = (pre, next) => {
  return isEqual(pre.result.current, next.result.current);
};
export default memo(ModalWinner, conditions);
