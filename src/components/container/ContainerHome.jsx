import React from 'react';
import { Col, Row, Avatar } from 'antd';
import './containerHome.css';
const ContainerHome = () => {
  return (
    <div className="container">
      <Row className="container__flex">
        <Col xl={{ span: 14 }} lg={{ span: 24 }} className="container__left">
          <div>
            <Row className="container__left__top">
              <Col xl={{ span: 12 }}>
                <div className="container__left__heading">
                  <h3>PRIZE POOL UP TO</h3>
                  <span>$2000</span>
                </div>
                <div className="container__left__title">The best way to enjoy Peergame</div>
                <div className="container__left__time">
                  <div className="container__left__time__heading">REMAINING TIME</div>
                  <div className="container__left__time__content">hello</div>
                </div>
              </Col>
              <Col xl={{ span: 12 }}>
                <img
                  className="container__left__image"
                  src="https://peergame.com/assets/images/races-logo-3ec55ccca32f253cdb34aa53a0bcfced.png"
                  alt=""
                />
              </Col>
            </Row>
            <Row>
              <Col xl={{ span: 12 }}>hello</Col>
              <Col xl={{ span: 12 }}>hello</Col>
            </Row>
          </div>
        </Col>
        <Col xl={{ span: 10 }} lg={{ span: 0 }} className="container__right">
          <h3 className="container__right__heading">Top Winners</h3>
          <div className="container__right__list">
            <div className="container__right__item">
              <div className="container__right__item__name">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <div className="container__right__item__user">DinhNguyen</div>
              </div>
              <img
                src="https://peergame.com/assets/images/1st-fab2f10306197b44da5c1e963ea5836e.png"
                className="container__right__item__icon"
              />
              <div className="container__right__item__money">$789</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContainerHome;
