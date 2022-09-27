export const checkMN = () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    return true;
  } else {
    console.log("MetaMask is not installed!!!!!!!!");
    return false;
  }
};
export const connectMn = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts;
};
