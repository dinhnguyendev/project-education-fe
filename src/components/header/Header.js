import { useEffect, useRef, useState } from "react";
import "./header.css";
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
import { WalletOutlined, GiftOutlined } from "@ant-design/icons";

import {
  addWalletListener,
  checkMN,
  connectMn,
  removeWalletListener,
} from "../../utils/blockchain";
import { handleNotification } from "./../../utils/notification";
import { handlecurrentAddress } from "../../redux/userSlice";
import { ConverAccoutWallet } from "../../utils/caro";
import handleContract from "../../utils/blockchain/handleContract";
import { getRandomInt } from "../../pages/admin/components/ultil";

const { Option } = Select;
const Header = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login?.data);
  const walletSave = useSelector((state) => state.user.currentAddress);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingClaimToken, setLoadingClaimToken] = useState(false);
  const contract = useRef();
  const avartars = useRef();
  avartars.current = getRandomInt(20, 40);
  useEffect(() => {
    const contract_MM = new handleContract();
    const createContract = contract_MM.createContractGameFree();
    if (createContract) {
      contract.current = createContract;
      // createContract.methods
      //   .checkUserClaim()
      //   .call()
      //   .then((data) => {
      //     console.log(data);
      //     console.log(data);
      //   })
      //   .catch((err) => {});
    }
  }, []);
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
  const handleClaimToken = () => {
    setLoadingClaimToken(true);
    if (contract && walletSave) {
      contract.current.methods
        .claim_TokenXu()
        .send({
          from: walletSave,
        })
        .then((data) => {
          console.log(data);
          message.success("B???n ???? nh???n ???????c Peer mi???n ph??");
        })
        .catch((err) => {
          console.log(err);
          message.error("B???n ???? t??? ch???i !");
        })
        .finally(() => {
          setLoadingClaimToken(false);
        });
    } else {
      message.warning("Vui l??ng k???t n???i v???i v?? !");
      setLoadingClaimToken(false);
    }
  };
  return (
    <Row>
      <div className="header">
        <Col>
          <div className="header__big">
            <Col>
              <div className="header__left">
                <Space>
                  <MenuOutlined onClick={showDrawer} style={{ fontSize: 20 }} />
                </Space>

                <Drawer
                  placement={placement}
                  closable={true}
                  onClose={onClose}
                  visible={visible}
                  key={placement}
                  closeIcon={<CloseCircleOutlined style={{ justifyContent: "end" }} />}
                >
                  <div className="header__flex">
                    <Select defaultValue="1" style={{ width: "50%" }} onChange={handleChange}>
                      <Option value="1">
                        <img
                          src="https://peergame.com/assets/images/english-9560c9c1db78921b92b64e8c150f35e6.png"
                          alt=""
                          className="icon__language"
                        />
                        English
                      </Option>
                      <Option value="2">
                        <img
                          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4DCXgAxCcpHQM2LJ2MPuAjYKOqqMPk6y5a-rblRhpFs03pLH3FXoMp7--BuLUagmlPypJbORioRrIpsoYlX3aNkiHH1RubPynM3iye4JC-_ROZ7CymdT5OF7Sk0-4QKPyIxIz6dbtnyY6CuCzFDg24yPi7XeRVtQDU4-gNTr0P7YtF5O5PW6pNVy36g/s558/C599C2BC-7C02-48C7-ACC6-1B9EA2B7F961.png"
                          alt=""
                          className="icon__language"
                        />
                        Vi???t Nam
                      </Option>
                      <Option value="3">
                        <img
                          src="https://peergame.com/assets/images/japanese-070af876ed819707c37bf9f2ba7e1865.png"
                          alt=""
                          className="icon__language"
                        />
                        ?????????
                      </Option>
                      <Option value="4">
                        <img
                          src="https://peergame.com/assets/images/spanish-c44f71020a41f2344759c5f195a28a61.png"
                          alt=""
                          className="icon__language"
                        />
                        Espa??ol
                      </Option>
                    </Select>
                  </div>
                </Drawer>

                <Link to={LINKTO.HOME} className="header__logo">
                  <img className="header__logo__image" src={LogoGame} alt="" />
                </Link>
              </div>
            </Col>
            {/* <Col
              xl={{ span: 10 }}
              lg={{ span: 9 }}
              md={{ span: 0 }}
              sm={{ span: 0 }}
              xs={{ span: 0 }}
            >
              <div className="header__center">
                <div className="header__navbar">
                  <div className="header__navbar__item">
                    <img src={IconGame} alt="" className="header__navbar__icon" />
                    <div className="header__navbar__text">Games</div>
                  </div>
                  <div className="header__navbar__item">
                    <img src={IconGame} alt="" className="header__navbar__icon" />
                    <div className="header__navbar__text">Games</div>
                  </div>
                </div>
              </div>
            </Col> */}
          </div>
        </Col>

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
                <Button
                  onClick={() => handleClaimToken()}
                  className="header__account__free"
                  icon={<GiftOutlined />}
                  danger
                  type="primary"
                  loading={loadingClaimToken}
                >
                  L???y Peer mi???n ph??
                </Button>
                <Avatar
                  src={
                    <Image
                      src={`https://peergame.com/assets/images/avatar/avatar-${avartars.current}.png`}
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: "cover",
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

export default Header;
