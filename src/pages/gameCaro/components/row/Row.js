import React from "react";
import Cells from "../cell/Cells";
import "./row.css";
const Row = (props) => {
  const { row, y, handleClick } = props;
  const getRow = () => {
    let RowList = [];
    for (let i = 0; i < row.length; i++) {
      RowList.push(
        <Cells
          key={i}
          y={y}
          x={i}
          isClicked={row[i].isClicked}
          Ischeck={row[i].Ischeck}
          handleClick={handleClick}
        />
      );
    }
    return RowList;
  };
  return <div className="row">{getRow()}</div>;
};

export default Row;
