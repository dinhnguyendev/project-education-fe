import { message } from "antd";
import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
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
const GameCaro = () => {
  const [boardDataGame, setboardDataGame] = useState(null);
  const [startClock, setStartClock] = useState(false);
  const location = useLocation();
  const isFirstStartGameClock = useRef(true);
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1111111");
  const dataLocation = location.state.data;
  console.log(dataLocation);
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(location);
  const user = useSelector((state) => state.user.login?.data);

  useEffect(() => {
    const boardData = initBoardData(20, 20);
    setboardDataGame(boardData);
    if (isFirstStartGameClock) {
      if (dataLocation.isMyTurn) {
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

  socket.on("server--notification-message", (data) => {
    message.warning(data);
  });
  socket.on("server--timer-IsSuccess", (data) => {
    if (data.isBoolean) {
      socket.emit("client--timer-update", data);
      if (data.phone !== user.phone) {
        handleMessage("success", "Đến lược bạn >");
      }
    }
  });
  return (
    <div className="game__caro">
      {console.log("game caro render again")}
      {boardDataGame && user && (
        <div className="game">
          <div className="game__header">game caro</div>
          <div className="game__header__container">
            <User player={location.state.data} />
            <Squares boardData={boardDataGame} dataLocation={location.state.data} user={user} />
            <div>
              <Timer />
              <ChatRoom user={user} dataLocation={location.state.data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCaro;
