import React from "react";
import "./modalWinner.css";
import { Divider, Tag, Button } from "antd";
import { useNavigate } from "react-router";
import { LINKTO } from "./../../constants/constants";
const ModalGameCaroFailure = ({ dataGames }) => {
  const { coin, totalCoin } = dataGames;
  const navigate = useNavigate();
  const handelPlay = () => {
    navigate(LINKTO.STARTCARO);
  };
  const handelBack = () => {
    navigate(LINKTO.HOME);
  };
  return (
    <div className="modal__winner">
      <div className="modal__winner__box">
        <div className="modal__winner__box__heading">
          <lord-icon
            src="https://cdn.lordicon.com/qghygxlr.json"
            trigger="loop"
            style={{ width: "150px", height: "150px" }}
          ></lord-icon>
          <div className=" modal__winner__heading__color">
            <div className="modal__heading__fufail">Thật buồn ! Bạn đã thất bại ở trận này</div>
            <Tag color="warning">Cố lên bạn nhé</Tag>
          </div>
        </div>
        <div className="modal__winner__box__container">
          <div className="modal__winner__box__container__infor">
            <div className="modal__winner__box__container__infor__heading">Thông tin trận đấu</div>
            <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/xhbsnkyp.json"
              trigger="loop"
              delay="1000"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
          <div className="modal__winner__box__container__content">
            <div className="modal__winner__container__bet">
              <div className="modal__winner__container__bet__text">Ván cược :</div>
              <div className="modal__winner__container__bet__number">{totalCoin} Peer</div>
            </div>
            <div className="modal__winner__box__container__text">Bạn đã thua {coin} Peer</div>
          </div>
        </div>
        <div className="modal__winner__button">
          <Button onClick={() => handelBack()} className="modal__winner__button__back">
            Huỷ
          </Button>
          <Button onClick={() => handelPlay()} type="primary">
            Tiếp tục chơi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalGameCaroFailure;
