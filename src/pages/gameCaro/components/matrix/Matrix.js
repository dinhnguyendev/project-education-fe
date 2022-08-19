import React from 'react';
import Squares from '../square/Squares';
import './matrix.css';
const Matrix = (props) => {
  const { squares } = props;
  const Array = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      Array.push(<Squares row={i} col={j} />);
    }
  }
  console.log(Array);
  return <div className="matrix">{Array}</div>;
};

export default Matrix;
