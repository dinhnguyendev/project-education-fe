import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { createBoardDataAction } from "../../../../redux/gameCaroSlice";
import socket from "../../../../socket.io/socket.io";
import Row from "../row/Row";
import "./squares.css";
const Squares = (props) => {
  const { height, width } = props;
  const location = useLocation();
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1111111");
  const dataLocation = location.state.data;
  console.log(dataLocation);
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
  // const [boardData, setBoarData] = useState(initBoardData(height, width));
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
    SetGame({ boardData: updateGameBoardData });
  });
  // socket.on("server--watting--check", (data) => {
  //   console.log("datasadasdasdsadasd server--update-data");
  //   console.log(data);
  //   SetGame({ isMyTurn: dataLocation.isMyTurn });
  // });
  // socket.on("server--update-check--player", (data) => {
  //   console.log("data server--update-check--players");
  //   console.log(data);
  //   SetGame({ room: data.room, isMyTurn: data.isMyTurn, isX: data.isX });
  // });
  // console.log(game.boardData);
  // const renderBoard = (data) => {
  //   let arr = [];

  //   for (let i = 0; i < data.length; i++) {
  //     arr.push(
  //       <Row
  //         id={game.id}
  //         row={data[i]}
  //         key={i}
  //         y={i}
  //         isMyTurn={game.isMyTurn}
  //         isX={game.isX}
  //         oppID={game.oppID}
  //         room={game.room}
  //       />
  //     );
  //   }

  //   return <div>{arr}</div>;
  // };
  const getPlayerName = () => {
    if (game.response) {
      return game.holdingX ? "❌" : "⭕";
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Squares;
