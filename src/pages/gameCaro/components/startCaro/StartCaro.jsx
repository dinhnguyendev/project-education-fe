import { Col, Row, Avatar } from "antd";
import React from "react";
import "./startCaro.css";
import iconStart from "../../../../assets/image/start-caro.png";
import iconName from "../../../../assets/image/name-game.png";
const StartCaro = () => {
  const handleSearch=()=>{
    
  }
  return (
    <>
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
    </>
  );
};

export default StartCaro;
