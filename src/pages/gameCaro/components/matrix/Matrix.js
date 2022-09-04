import React from "react";
import { CONFIG_GFAMES } from "../../../../constants/constants";
import Squares from "../square/Squares";
import { useLocation } from "react-router-dom";
import "./matrix.css";
const Matrix = (props) => {
  const location = useLocation();
  const { squares } = props;
  const { handleClick } = props;
  console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(location);
  const Arrays = [];
  for (let i = 0; i < CONFIG_GFAMES.QUANTITY_SQUARES; i++) {
    for (let j = 0; j < CONFIG_GFAMES.QUANTITY_SQUARES; j++) {
      Arrays.push(<Squares row={i} col={j} handleClick={(row, col) => handleClick(row, col)} />);
    }
  }
  console.log(Arrays);
  return <div className="matrix">{Arrays}</div>;
};

export default Matrix;
