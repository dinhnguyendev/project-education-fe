import { message } from "antd";
import { useEffect } from "react";
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
  console.log(dataLocation);
  console.log(user);
  const [game, SetGame] = useState({
    id: dataLocation?.id,
    room: dataLocation?.idRooms,
    isMyTurn: dataLocation?.isMyTurn,
    isX: dataLocation?.isX,
    boardData: boardData,
    showNotification: false,
    textNotification: [],
  });
  console.log(game.boardData);
  socket.on("server--update-check", (data) => {
    console.log("data server--update-check");
    let updateGameBoardData = game.boardData;
    updateGameBoardData[data.y][data.x].isClicked = true;
    updateGameBoardData[data.y][data.x].isX = data.isX;
    updateGameBoardData[data.y][data.x].Ischeck = data.isX;
    let isMyTurn = false;
    if (user.phone == data.phone) {
      isMyTurn = true;
    }
    SetGame({ boardData: updateGameBoardData, isMyTurn });
  });

  socket.on("server--watting--end", (data) => {
    if (data == user.phone) {
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
      // console.log("socket.emit('client--timer-update', request)");
      // console.log(request);
      socket.emit("client--timer-update", request);
      SetGame({
        isMyTurn: true,
        boardData: game.boardData,
        showNotification: true,
        textNotification: NOTIFICATION.TIMER__END,
      });
    }
  });
  const handleClick = (x, y) => {
    console.log("handleClick");
    if (game.isMyTurn) {
      return message.warning("đợi đối thủ");
    } else {
      let req = {
        id: dataLocation.id,
        x,
        y,
        isMyTurn: game.isMyTurn,
        isX: dataLocation.isX,
        oppID: dataLocation.oppID,
        room: dataLocation.idRooms,
        phone: user.phone,
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
