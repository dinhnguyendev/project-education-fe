import { useEffect, useRef, useState } from "react";
import "../header/header.css";
import IconGame from "../../assets/image/game.svg";
import LogoGame from "../../assets/image/logo.svg";
import {
  Avatar,
  Button,
  Space,
  Dropdown,
  Image,
  Drawer,
  Select,
  Col,
  Row,
  Tag,
  message,
} from "antd";
import iconwallet from "../../assets/image/IconWallet.svg";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { BLOCKCHAIN, KEY, LINKTO, MENUACCOUNT } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import socket from "../../socket.io/socket.io";
import MenuAccount from "../menu/MenuAccount";
import { hadleLogout } from "../../actions/auth/authActions";
import { useNavigate } from "react-router-dom";
import { WalletOutlined } from "@ant-design/icons";

import {
  addWalletListener,
  checkMN,
  connectMn,
  removeWalletListener,
} from "../../utils/blockchain";
import { handleNotification } from "./../../utils/notification";
import { handlecurrentAddress } from "../../redux/userSlice";
import { ConverAccoutWallet } from "../../utils/caro";
import { getRandomInt } from "../../pages/admin/components/ultil";

const { Option } = Select;
const HeaderAdmin = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login?.data);
  const walletSave = useSelector((state) => state.user.currentAddress);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const avartars = useRef();
  avartars.current = getRandomInt(20, 40);
  const showDrawer = () => {
    setVisible(true);
  };
  const handleOpenCloading = () => {
    setLoading(true);
  };
  const handleCloseCloading = () => {
    setLoading(false);
  };
  const onClose = () => {
    setVisible(false);
  };

  // window.onbeforeunload = function (event) {
  //   console.log("event");
  //   console.log(event);
  //   event.preventDefault();
  //   return false;
  // };
  useEffect(() => {
    addWalletListener(setWallet, dispatch);
    return () => removeWalletListener();
  }, []);
  const handleConnectWallet = () => {
    const isCheck = checkMN();
    if (isCheck) {
      if (wallet || walletSave) {
        return message.success("B???n ???? c?? v??");
      }
      handleOpenCloading();
      connectMn()
        .then(async (data) => {
          const addressWallet = await data[0];
          setWallet(addressWallet);
          dispatch(handlecurrentAddress(addressWallet));
        })
        .catch((error) => {
          handleNotification(
            "warning",
            "B???n ???? t??? ch???i k???t n???i v???i v??",
            "N???u b???n mu???n ti???p t???c. Vui l??ng m??? kh??a v?? c???a b???n v?? k???t n???i l???i !"
          );
        });
    } else {
      handleNotification(
        "warning",
        "Vui l??ng ????ng c??i V??",
        "B???n ph???i c??i v?? v??o tr??nh duy???t tr?????c ????? ti???p t???c!"
      );
    }
    handleCloseCloading();
  };
  socket.on("server", (data) => {
    console.log(data);
  });
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleAccount = async (e) => {
    if (e && e.key === KEY.LOOUT) {
      await hadleLogout(t, navigate, dispatch);
    }
  };
  console.log("BLOCKCHAIN.CURRENACCOUNT");
  console.log(wallet);
  return (
    <Row>
      <div style={{ height: "64px" }} className="header__admin">
        <Col></Col>
        <Col>
          <div className="header__right">
            <div className="header__account">
              <Tag icon={<WalletOutlined />} color="#cd201f">
                {(wallet && ConverAccoutWallet(wallet)) ||
                  (walletSave && ConverAccoutWallet(walletSave)) ||
                  "V??"}
              </Tag>
            </div>
            <div className="header__wallet">
              <Button
                loading={loading}
                onClick={() => handleConnectWallet()}
                className="button__wallet"
              >
                <img src={iconwallet} alt="" />
                <span>Connect Wallet</span>
              </Button>
            </div>
            {_.isEmpty(user) ? (
              <div className="header__account">
                <Link to={LINKTO.REGISTER}>
                  <div className="heading__link__register">{t("register.heading")}</div>
                </Link>
                <Link to={LINKTO.LOGIN}>
                  <div className="heading__link__login">{t("login.heading")}</div>
                </Link>
              </div>
            ) : (
              <div className="header__account">
                <Avatar
                  src={
                    <Image
                      src={`https://peergame.com/assets/images/avatar/avatar-${avartars.current}.png`}
                      style={{
                        width: 32,
                        backgroundColor: "#fff",
                      }}
                    />
                  }
                />
                <Dropdown
                  overlay={<MenuAccount handleAccount={handleAccount} />}
                  placement="bottomRight"
                  arrow
                >
                  <div className="header__account__name">{user.username}</div>
                </Dropdown>
              </div>
            )}
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default HeaderAdmin;
