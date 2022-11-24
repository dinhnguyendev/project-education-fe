import { message, Modal, Collapse } from "antd";
import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ModalGameCaroFailure from "../../../../components/modalGameCaroWinner/ModalGameCaroFailure";
import ModalGameCaroWinner from "../../../../components/modalGameCaroWinner/ModalGameCaroWinner";
import { CONFIG_GFAMES } from "../../../../constants/constants";
import socket from "../../../../socket.io/socket.io";
import { initBoardData } from "../../../../utils/caro";
import { handleMessage } from "../../../../utils/caro/message";
import ChatRoom from "../chat/ChatRoom";
import Matrix from "../matrix/Matrix";
import Squares from "../square/Squares";
import Timer from "../timer/Timer";
import User from "../user/User";
import "./Caro.css";
const { Panel } = Collapse;

const GameCaro = () => {
  const [boardDataGame, setboardDataGame] = useState(null);
  const [startClock, setStartClock] = useState(false);
  const [winner, setWinner] = useState(false);
  const [failure, setFailure] = useState(false);
  const [dataGames, setDataGames] = useState({});
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isFirstStartGameClock = useRef(true);
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1111111");
  const dataLocation = location.state.data;
  console.log(dataLocation);
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(location);
  const user = useSelector((state) => state.user.login?.data);

  useEffect(() => {
    socket.emit("client--join-rooms", dataLocation?.idRooms);
  }, []);
  useEffect(() => {
    const boardData = initBoardData(50, 50);
    setboardDataGame(boardData);
    if (isFirstStartGameClock) {
      if (dataLocation?.isMyTurn) {
        const data = {
          room: dataLocation.idRooms,
          phone: user.phone,
        };
        socket.emit("client--timer-update", data);
        handleMessage("warning", "Đối thủ đánh trước");
      } else {
        handleMessage("success", "Bạn đánh trước");
      }
      isFirstStartGameClock.current = false;
    }
  }, []);
  useEffect(() => {
    socket.on("server--notification-message", (data) => {
      message.warning(data);
    });
  }, []);
  socket.on("server--timer-IsSuccess", (data) => {
    if (data.isBoolean) {
      socket.emit("client--timer-update", data);
      if (data.phone !== user.phone) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  });
  useEffect(() => {
    socket.on("server--winner--game-caro", (data) => {
      console.log("server--winner--game-caro");
      console.log(data);
      const ischeckUser = data?.phone == user?.phone;

      setDataGames(data);
      if (ischeckUser) {
        setWinner(true);
      } else {
        setFailure(true);
      }
      socket.emit("client--leave--room--error", data);
    });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="game__caro">
      {show && handleMessage("success", "Đến lược bạn >")}
      {boardDataGame && user && (
        <div className="game">
          <div className="game__header">game caro</div>
          <div className="game__header__container">
            <div className="flex__box__caro">
              <Timer />
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="chat trong trận đấu" key="1">
                  <p>
                    <ChatRoom user={user} dataLocation={location.state.data} />
                  </p>
                </Panel>
                <Panel header="Thông tin trận đấu" key="2">
                  <p>
                    <User player={location.state.data} />
                  </p>
                </Panel>
              </Collapse>
            </div>
            <Squares boardData={boardDataGame} dataLocation={location.state.data} user={user} />
          </div>
        </div>
      )}
      {winner && dataLocation && <ModalGameCaroWinner dataGames={dataLocation} />}
      {failure && dataLocation && <ModalGameCaroFailure dataGames={dataLocation} />}
    </div>
  );
};

export default GameCaro;
