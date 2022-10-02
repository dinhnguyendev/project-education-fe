import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { handlecurrentAddress } from "../../redux/userSlice";

const { ethereum } = window;
export const checkMN = () => {
  console.log("window");
  console.log(ethereum);
  console.log(typeof ethereum);
  if (typeof ethereum !== "undefined") {
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
const handleChangeWallet = (isConform, setWallet, accounts, dispatch) => {
  if (isConform) {
    setWallet(accounts);
    dispatch(handlecurrentAddress(accounts));
  } else {
  }
};
export const addWalletListener = (setWallet, dispatch) => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        handleChangeWallet(true, setWallet, accounts[0], dispatch);
        // Modal.confirm({
        //   title: "Thông báo",
        //   icon: <CheckCircleOutlined />,
        //   content: "Bạn có muốn đổi địa chỉ ví của bạn không",
        //   okText: "Đồng ý",
        //   cancelText: "Không đồng ý",
        //   onOk: () => ,
        // });
      } else {
      }
    });
  } else {
  }
};
export const removeWalletListener = () => {
  if (window.ethereum) {
    window.ethereum.removeListener("accountsChanged", () => {
      console.log("remove listener >>>>");
    });
  }
};
