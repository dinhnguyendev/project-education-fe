import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { CONFIG_GFAMES } from "../../../../constants/constants";
import ChatRoom from "../chat/ChatRoom";
import Matrix from "../matrix/Matrix";
import Squares from "../square/Squares";
import User from "../user/User";
import "./Caro.css";
const GameCaro = () => {
  const location = useLocation();
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(location);
  const user = useSelector((state) => state.user.login?.data);
  const handlecurrent = () =>
    Array(CONFIG_GFAMES.QUANTITY_SQUARES)
      .fill(null)
      .map(() => {
        return Array(CONFIG_GFAMES.QUANTITY_SQUARES).fill(null);
      });
  const [current, setCurrent] = useState(handlecurrent());

  const userCheck = (row, col) => {
    let newSquares = current;
    newSquares[row][col] = "x";
    setCurrent([...newSquares]);
  };
  useEffect(() => {
    console.log("hello");
  }, [current]);
  return (
    <div className="game__caro">
      <div className="game">
        <div className="game__header">game caro</div>
        <div className="game__header__container">
          <User player={location.state.data} />
          <Squares dataLocation={location.state.data} width={20} height={20} user={user} />
          <ChatRoom user={user} dataLocation={location.state.data} />
        </div>
      </div>
    </div>
  );
};

export default GameCaro;
