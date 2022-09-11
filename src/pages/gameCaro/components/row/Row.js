import React from "react";
import Cells from "../cell/Cells";
import "./row.css";
const Row = (props) => {
  const { id, room, isMyTurn, isX, oppID, row, y } = props;
  const getRow = () => {
    let RowList = [];
    for (let i = 0; i < row.length; i++) {
      RowList.push(
        <Cells
          value={row[i]}
          key={i}
          y={y}
          x={i}
          id={id}
          isMyTurn={isMyTurn}
          isX={isX}
          oppID={oppID}
          room={room}
          isClicked={row[i].isClicked}
        />
      );
    }
    return RowList;
  };
  return <div className="row">{getRow()}</div>;
};

export default Row;
