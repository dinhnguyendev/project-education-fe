import { Col, Row, Avatar } from "antd";
import React from "react";
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
const StartCaro = () => {
  const user = useSelector((state) => state.user.login?.data);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (user) {
      console.log("bat dau tom doi thu");
      console.log(user);
      socket.emit("join-room", user);
    }
  };
  useLayoutEffect(() => {
    socket.on("server--rooms--sucessfylly", (data) => {
      if (data) {
        const idRooms = data.idRooms;
        console.log("navigate");
        console.log(navigate);
        navigate(`${LINKTO.PLAYCARO}/${idRooms}`, { state: { data }, replace: true });
      }
    });
  }, []);

  return (
    <div className="game__box">
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
      <Row>
        <Col span={18}>
          <video width="320" height="240" autoPlay>
            <source src="https://youtu.be/wC9UsnFiU4c" type="video/mp4" />
          </video>
        </Col>
        <Col span={6}>
          <button onClick={handleSearch} className="start__caro__button">
            <span>Bat dau tim doi thu</span>
            <img src={iconStart} alt="" className="start__caro__image" />
          </button>
        </Col>
      </Row>
      <Row >
        <PeerCoin image={yellowCoin} coin={"0.001"} />
        <PeerCoin image={blueCoin} coin={"0.001"} />
        <PeerCoin image={redCoin} coin={"0.001"} />
        <PeerCoin image={greenCoin} coin={"0.001"} />
      </Row>
    </div>
  );
};

export default StartCaro;
