import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CONFIG_GFAMES } from "../../../../constants/constants";
import Matrix from "../matrix/Matrix";
import Squares from "../square/Squares";
import User from "../user/User";
import "./Caro.css";
const GameCaro = () => {
  const location = useLocation();
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(location);
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
    <div className="game">
      <div className="game__header">game caro</div>
      <User player={location.state.data} />
      <Squares
        dataLocation={location.state.data}
        width={20}
        height={20}
        // location={location.state.data}
      />
    </div>
  );
};

export default GameCaro;
