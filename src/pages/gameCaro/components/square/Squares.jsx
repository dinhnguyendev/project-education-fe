import { message } from "antd";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NOTIFICATION } from "../../../../constants/constants";
import socket from "../../../../socket.io/socket.io";
import { initBoardData } from "../../../../utils/caro";
import { handleNotification } from "../../../../utils/notification";
import Row from "../row/Row";
import "./squares.css";
const Squares = (props) => {
  const { user, dataLocation, boardData } = props;
  const isWaitting = useRef(dataLocation?.isMyTurn);
  const [game, SetGame] = useState({
    id: dataLocation?.id,
    room: dataLocation?.idRooms,
    isMyTurn: dataLocation?.isMyTurn,
    isX: dataLocation?.isX,
    boardData: boardData,
    showNotification: false,
    textNotification: [],
  });

  socket.on("server--update-check", (data) => {
    let updateGameBoardData = game.boardData;
    updateGameBoardData[data.y][data.x].isClicked = true;
    updateGameBoardData[data.y][data.x].isX = data.isX;
    updateGameBoardData[data.y][data.x].Ischeck = data.isX;
    let isMyTurn = false;
    let isCheckWatting = false;
    if (user.phone == data.phone) {
      isMyTurn = true;
      isCheckWatting = true;
    }
    isWaitting.current = isCheckWatting;
    SetGame({ boardData: updateGameBoardData, isMyTurn });
    console.log("server--update-check" + isWaitting.current);
  });

  socket.on("server--watting--end", (data) => {
    if (data == user.phone) {
      isWaitting.current = false;
      SetGame({
        isMyTurn: false,
        boardData: game.boardData,
        showNotification: true,
        textNotification: NOTIFICATION.TIMER__START,
      });
    } else {
      const request = {
        phone: user.phone,
        room: dataLocation.idRooms,
      };
      socket.emit("client--timer-update", request);
      isWaitting.current = true;
      SetGame({
        isMyTurn: true,
        boardData: game.boardData,
        showNotification: true,
        textNotification: NOTIFICATION.TIMER__END,
      });
    }
  });
  const handleClick = (x, y) => {
    console.log("handleClick" + isWaitting.current);
    if (isWaitting.current) {
      return message.warning("đợi đối thủ");
    } else {
      let req = {
        id: dataLocation.id,
        x,
        y,
        isMyTurn: isWaitting.current,
        isX: dataLocation.isX,
        oppID: dataLocation.oppID,
        room: dataLocation.idRooms,
        idRooms: dataLocation.idRooms,
        phone: user.phone,
        idUser: dataLocation?.idUser,
        addressWallet: dataLocation?.addressWallet,
        coin: dataLocation?.coin,
        totalCoin: dataLocation?.totalCoin,
      };
      socket.emit("update--check--caro", req);
    }
  };

  return (
    <div className="squares__flex">
      {game.showNotification && handleNotification(...game.textNotification)}
      <div className="squares">
        {game?.boardData?.map((item, i) => {
          return <Row row={item} key={i} y={i} handleClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Squares;
