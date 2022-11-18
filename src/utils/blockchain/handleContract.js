import Web3 from "web3";

const { BLOCKCHAIN } = require("../../constants/constants");

class handleContract {
  createContract = () => {
    const abi = BLOCKCHAIN.ABI;
    const addressSM = BLOCKCHAIN.ADDRESS__SM__PEER;
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    const contract_MN = new web3.eth.Contract(abi, addressSM);
    return contract_MN;
  };
  createContractGameCaro = () => {
    const abi = BLOCKCHAIN.ABI__GAMES__CARO;
    const addressSM = BLOCKCHAIN.ADDRESS__SM__GAMES;
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    const contract_MN = new web3.eth.Contract(abi, addressSM);
    return contract_MN;
  };
  createContractGameFree = () => {
    const abi = BLOCKCHAIN.ABI__GAMES__FREE;
    const addressSM = BLOCKCHAIN.ADDRESS__SM__FREE;
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    const contract_MN = new web3.eth.Contract(abi, addressSM);
    return contract_MN;
  };
  createContractGameTurtle = () => {
    const abi = BLOCKCHAIN.ABI__GAMES__TURTLE;
    const addressSM = BLOCKCHAIN.ADDRESS__SM__GAMES__TURTLE;
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    const contract_MN = new web3.eth.Contract(abi, addressSM);
    return contract_MN;
  };
}
export default handleContract;
