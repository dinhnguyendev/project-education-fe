import { Col, Row, Avatar, Button, Modal } from "antd";
import React, { useState } from "react";
import "./startCaro.css";
import iconStart from "../../../../assets/image/start-caro.png";
import iconName from "../../../../assets/image/name-game.png";
import socket from "../../../../socket.io/socket.io";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { LINKTO } from "../../../../constants/constants";
import PeerCoin from "../../../../components/peerGame/PeerCoin";
import yellowCoin from "../../../../assets/image/yellowCoin.png";
import redCoin from "../../../../assets/image/redCoin.png";
import greenCoin from "../../../../assets/image/greenCoin.png";
import blueCoin from "../../../../assets/image/blueCoin.png";
import { handleMessage } from "../../../../utils/caro/message";
import Typewriter from "typewriter-effect";

const StartCaro = () => {
  const user = useSelector((state) => state.user.login?.data);
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setLoading(true);
  };

  const hideModal = () => {
    setLoading(false);
  };

  const handleSearch = () => {
    if (!user) {
      handleMessage("warning", "vui lòng đăng nhập");
      return navigate(LINKTO.LOGIN);
    }
    if (coin == 0) {
      return handleMessage("warning", "vui lòng chọn số peer cược");
    }
    showModal();
    console.log("bat dau tom doi thu");
    console.log(user);
    console.log(coin);
    const data = {
      ...user,
      coin: coin,
    };

    socket.emit("join-room", data);
  };
  useLayoutEffect(() => {
    socket.on("server--rooms--sucessfylly", (data) => {
      if (data) {
        const idRooms = data.idRooms;
        console.log("navigate");
        console.log(navigate);
        hideModal();
        navigate(`${LINKTO.PLAYCARO}/${idRooms}`, { state: { data }, replace: true });
      }
    });
  }, []);
  const handleCoin = (e) => {
    const tagCoin = document.querySelectorAll(".peer__coin");
    tagCoin.forEach((item) => {
      item.classList.remove("peer__toggle");
    });
    e.target.classList.add("peer__toggle");
    setCoin(+e.target.id);
  };
  const handleCancelSearchPlayer = () => {};
  return (
    <div className="game__box">
      <Modal
        title={
          <>
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/mgmiqlge.json"
              trigger="loop"
              delay="50"
              colors="primary:#3a3347,secondary:#f24c00,tertiary:#4bb3fd,quaternary:#ebe6ef"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </>
        }
        footer={
          <Button onClick={handleCancelSearchPlayer()} className="button__cancel" danger>
            Huy tim doi thu
          </Button>
        }
        visible={loading}
        closeIcon
        cancelText="Hủy"
      >
        <p>
          <Typewriter
            options={{
              strings: ["Đang tìm đối thủ ..."],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
            }}
          />
        </p>
      </Modal>
      <div className="game">
        <div className="game__name">
          <div className="game__content">
            <img className="game__name__image" src={iconName} alt="" />
          </div>
          <div className="game__name__heading">Games Caro</div>
        </div>
      </div>

      <Row className="profile__margin">
        <Col span={12}>
          <div className="profile">
            <div className="profile__item">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </div>
            <div className="profile__item">
              <h3 className="profile__name">Dinh Nguyen</h3>
            </div>
            <div className="profile__item">
              <h3 className="profile__token">700 Peer</h3>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="profile__loading">Dang tim doi thu...</div>
        </Col>
      </Row>
      <Row className="row__flex">
        <Col className="peer__flex">
          <div className="peer">
            <PeerCoin image={yellowCoin} handleCoin={handleCoin} coinNumber={0.01} />
          </div>
          <div className="peer">
            <PeerCoin image={blueCoin} handleCoin={handleCoin} coinNumber={0.02} />
          </div>
          <div className="peer">
            <PeerCoin image={redCoin} handleCoin={handleCoin} coinNumber={0.03} />
          </div>
          <div className="peer">
            <PeerCoin image={greenCoin} handleCoin={handleCoin} coinNumber={0.04} />
          </div>
        </Col>
        <Col>
          <Button onClick={handleSearch} className="start__caro__button">
            <span>Bat dau tim doi thu</span>
            <img src={iconStart} alt="" className="start__caro__image" />
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default StartCaro;
