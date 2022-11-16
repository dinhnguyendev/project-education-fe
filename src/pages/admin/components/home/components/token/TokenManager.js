import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import InForToken from "../inforToken/InForToken";
import SendToken from "../sendToken/SendToken";
import "./tokenManager.css";
import { useSelector } from "react-redux";
import handleContract from "../../../../../../utils/blockchain/handleContract";
import { BLOCKCHAIN } from "../../../../../../constants/constants";

const TokenManager = () => {
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const contract = useRef();
  const contract_MM = new handleContract();
  const createContract = contract_MM.createContract();
  if (createContract) {
    contract.current = createContract;
  }
  return (
    <div>
      <InForToken address={BLOCKCHAIN.ADDRESS__SM__PEER} contract={contract.current} />
      <SendToken contract={contract.current} />
    </div>
  );
};

export default TokenManager;
