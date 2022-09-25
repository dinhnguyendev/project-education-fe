import React from "react";
import "./peerCoin.css";
const PeerCoin = ({ image, coin }) => {
  return (
    <div className="peer__coin">
      <img className="peer__coin__image" src={image} alt="peercoin" />
      <div className="peer__coin__number">{coin}</div>
    </div>
  );
};

export default PeerCoin;
