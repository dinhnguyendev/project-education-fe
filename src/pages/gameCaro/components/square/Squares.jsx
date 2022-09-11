import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { createBoardDataAction } from "../../../../redux/gameCaroSlice";
import Row from "../row/Row";

const Squares = (props) => {
  const { height, width, dataLocation } = props;
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

  // console.log("createEmptyArray >>>>>>>>>>>>>>>>>>>>");
  // console.log(createEmptyArray());
  // console.log("initBoardData >>>>>>>>>>>>>>>>>>>>");
  // console.log(initBoardData());
  const [game, SetGame] = useState({
    id: dataLocation?.id,
    room: dataLocation?.idRooms,
    opponent: "",
    response: false,
    isMyTurn: true,
    isX: dataLocation?.isX,
    holdingX: false,
    // oppID: "",
    boardData: initBoardData(height, width),
    // endpoint: "localhost:5001",
    height: height,
    width: width,
    modalShow: false,
    modalLoseShow: false,
    modalEmoShow: false,
    win: false,
    lose: false,
    emoji: false,
  });
  // console.log("game.boardData");
  // console.log("game.boardData");
  // console.log("game.boardData");
  // console.log(game.boardData);
  const updateInput = (event) => {
    SetGame({ playerName: event.target.value });
  };
  const handleSubmitName = () => {
    SetGame({ nameOK: true });
  };

  const renderBoard = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
        <Row
          id={game.id}
          row={data[i]}
          key={i}
          y={i}
          isMyTurn={game.isMyTurn}
          isX={game.isX}
          oppID={game.oppID}
          room={game.room}
        />
      );
    }

    return <div>{arr}</div>;
  };
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
  return <div className="squares">{renderBoard(game.boardData)}</div>;
};

export default Squares;
