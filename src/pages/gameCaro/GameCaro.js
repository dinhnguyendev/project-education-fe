import React, { useEffect, useState } from 'react';
import { CONFIG_GFAMES } from '../../constants/constants';
import Matrix from './components/matrix/Matrix';
import './gameCaro.css';
const GameCaro = () => {
  const handlecurrent = () =>
    Array(CONFIG_GFAMES.QUANTITY_SQUARES)
      .fill(null)
      .map(() => {
        return Array(CONFIG_GFAMES.QUANTITY_SQUARES).fill(null);
      });
  const [current, setCurrent] = useState(handlecurrent());

  const userCheck = (row, col) => {
    let newSquares = current;
    newSquares[row][col] = 'x';
    setCurrent([...newSquares]);
  };
  useEffect(() => {
    console.log('hello');
  }, [current]);
  console.log('current');
  console.log(current);
  console.log(current);
  return (
    <div className="game">
      <div className="game__header">game caro</div>
      <div className="game__gird">
        <Matrix
          handleClick={(i, j) => {
            console.log('i' + i + '; ' + 'j' + j);
            return userCheck(i, j);
          }}
        />
      </div>
    </div>
  );
};

export default GameCaro;
