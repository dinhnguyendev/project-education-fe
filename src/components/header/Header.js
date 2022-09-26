import { useState } from "react";
import "./header.css";
import IconGame from "../../assets/image/game.svg";
import LogoGame from "../../assets/image/logo.svg";
import { Avatar, Button, Space, Dropdown, Image, Drawer, Select, Col, Row } from "antd";
import iconwallet from "../../assets/image/IconWallet.svg";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { KEY, LINKTO, MENUACCOUNT } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import socket from "../../socket.io/socket.io";
import MenuAccount from "../menu/MenuAccount";
import { hadleLogout } from "../../actions/auth/authActions";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const Header = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login?.data);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleConnectWallet = () => {
    socket.emit("client", "helloword hihi !!!");
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
  return (
    <Row>
      <div className="header">
        <Col xl={{ span: 16 }} lg={{ span: 16 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <div className="header__big">
            <Col xl={{ span: 6 }} lg={{ span: 9 }} md={{ span: 18 }}>
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
                        Việt Nam
                      </Option>
                      <Option value="3">
                        <img
                          src="https://peergame.com/assets/images/japanese-070af876ed819707c37bf9f2ba7e1865.png"
                          alt=""
                          className="icon__language"
                        />
                        日本語
                      </Option>
                      <Option value="4">
                        <img
                          src="https://peergame.com/assets/images/spanish-c44f71020a41f2344759c5f195a28a61.png"
                          alt=""
                          className="icon__language"
                        />
                        Español
                      </Option>
                    </Select>
                  </div>
                </Drawer>

                <div className="header__logo">
                  <img className="header__logo__image" src={LogoGame} alt="" />
                </div>
              </div>
            </Col>
            <Col
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
            </Col>
          </div>
        </Col>

        <Col xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 0 }} lg={{ span: 8 }}>
          <div className="header__right">
            <div className="header__wallet">
              <button onClick={handleConnectWallet} className="button__wallet">
                <img src={iconwallet} alt="" />
                <span>Connect Wallet</span>
              </button>
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
                      src={user.avatar}
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

export default Header;
