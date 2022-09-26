import React from "react";
import "./peerCoin.css";
const PeerCoin = ({ image, coinNumber, handleCoin }) => {
  return (
    <div onClick={(e) => handleCoin(e)} id={coinNumber} className="peer__coin peer__coin__transparent">
      <img className="peer__coin__image" src={image} alt="peercoin" />
      <div className="peer__coin__number">{coinNumber}</div>
    </div>
  );
};

export default PeerCoin;
