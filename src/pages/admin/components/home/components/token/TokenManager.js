import React from "react";
import InForToken from "../inforToken/InForToken";
import SendToken from "../sendToken/SendToken";
import "./tokenManager.css";

const TokenManager = () => {
  return (
    <div>
      <InForToken />
      <SendToken />
    </div>
  );
};

export default TokenManager;
