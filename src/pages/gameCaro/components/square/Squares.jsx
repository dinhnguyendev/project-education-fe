import { message } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { createBoardDataAction } from "../../../../redux/gameCaroSlice";
import socket from "../../../../socket.io/socket.io";
import Row from "../row/Row";
import "./squares.css";
const Squares = (props) => {
  const { height, width, user } = props;
  const location = useLocation();
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1111111");
  const dataLocation = location.state.data;
  console.log(dataLocation);
  console.log(user);
  const dispatch = useDispatch();
  const createEmptyArray = (height, width) => {
    let data = [];

    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isX: true,
          isClicked: false,
          isMyTurn: true,
          Ischeck: null,
        };
      }
    }
    return data;
  };
  var initBoardData = (height, width) => {
    let data = createEmptyArray(height, width);
    // dispatch(createBoardDataAction(data));
    return data;
  };
  const [game, SetGame] = useState({
    id: dataLocation?.id,
    room: dataLocation?.idRooms,
    opponent: "",
    response: false,
    isMyTurn: dataLocation?.isMyTurn,
    isX: dataLocation?.isX,
    holdingX: false,
    // oppID: "",
    boardData: initBoardData(height, width),
    height: height,
    width: width,
    modalShow: false,
    modalLoseShow: false,
    modalEmoShow: false,
    win: false,
    lose: false,
    emoji: false,
  });

  const updateInput = (event) => {
    SetGame({ playerName: event.target.value });
  };
  const handleSubmitName = () => {
    SetGame({ nameOK: true });
  };
  socket.on("server--update-check", (data) => {
    console.log("data server--update-check");
    let updateGameBoardData = game.boardData;
    updateGameBoardData[data.y][data.x].isClicked = true;
    updateGameBoardData[data.y][data.x].isX = data.isX;
    updateGameBoardData[data.y][data.x].Ischeck = data.isX;
    // for (let i = 0; i < height; i++) {
    //   for (let j = 0; j < width; j++) {
    //     updateGameBoardData[i][j].isMyTurn = data.isMyTurn;
    //   }
    // }
    let isMyTurn = false;
    if (user.phone == data.phone) {
      isMyTurn = true;
    }

    console.log(isMyTurn);
    SetGame({ boardData: updateGameBoardData, isMyTurn });
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
      console.log("req");
      console.log(req);
      socket.emit("update--check--caro", req);
    }
  };
  const getOpp = () => {
    if (game.response) {
      return !game.holdingX ? "❌" : "⭕";
    }
  };

  return (
    <div className="squares__flex">
      <div className="squares">
        {game?.boardData?.map((item, i) => {
          return (
            <Row
              id={game.id}
              row={item}
              key={i}
              y={i}
              isMyTurn={game.isMyTurn}
              isX={game.isX}
              oppID={game.oppID}
              room={game.room}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Squares;
