import axios from "axios";
import { API__URL } from "../../constants/constants";

export const handleHistoryTransaction = async (addressContract, pageSize, pageNumber) => {
  const result = await axios.get(
    `https://api-goerli.etherscan.io/api?module=account&action=tokentx&address=${addressContract}&startblock=0&endblock=99999999&page=${pageNumber}&offset=${pageSize}&sort=desc&apikey=FK4PQGK1QPF568J8M93221HIKHA3R1K3VB`
  );
  return result?.data;
};
export const handleHistoryTransactionAll = async (addressContract) => {
  const result = await axios.get(
    `https://api-goerli.etherscan.io/api?module=account&action=tokentx&address=${addressContract}&startblock=0&endblock=99999999&apikey=FK4PQGK1QPF568J8M93221HIKHA3R1K3VB`
  );
  return result?.data;
};
