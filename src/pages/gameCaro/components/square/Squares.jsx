import React from 'react';
import { Button } from 'antd';
import './squares.css';
const Squares = (props) => {
  return (
    <button className="squares" onClick={() => props.handleClick(props.row, props.col)}>
      {'x'}
    </button>
  );
};

export default Squares;
