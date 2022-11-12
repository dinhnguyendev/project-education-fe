import { BLOCKCHAIN } from "../../constants/constants";

export const sendToken = (contract, currentAddress, amount) => {
    console.log(amount);
    const addreceive = BLOCKCHAIN.ADDRESS_CONTRACT_RECEIVE;
    if (contract && currentAddress && addreceive) {
      contract.methods.transfer(addreceive,`${amount}000000000000000000`).send({
        from: currentAddress,
      }).then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      })
    }
}