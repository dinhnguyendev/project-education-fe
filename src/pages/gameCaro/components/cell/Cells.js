import { isEqual } from "lodash";
import React from "react";
import { memo } from "react";
import "./cells.css";
const Cells = ({ x, y, isClicked, Ischeck, handleClick }) => {
  const getValueInCell = () => {
    console.log("re-render");
    if (isClicked) {
      return Ischeck ? "✖️" : "⭕";
    } else {
      return "";
    }
  };
  return (
    <div className="cells" onClick={() => handleClick(x, y)}>
      {getValueInCell()}
    </div>
  );
};
const conditions = (pre, next) => {
  return isEqual(pre.Ischeck, next.Ischeck);
};
export default memo(Cells, conditions);
