import React from "react";
import { Col, Row, Avatar, Button } from "antd";
import "./containerHome.css";
import { RightCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTER } from "./../../constants/constants";
const ContainerHome = () => {
  return (
    <div className="container">
      <Row className="container__flex">
        <Col xl={{ span: 11 }} lg={{ span: 24 }} className="container__left">
          <div>
            <Row className="container__left__top">
              <Col xl={{ span: 12 }}>
                <div className="container__left__heading">
                  <h3 className="container__left__heading__text">Hãy đăng nhập</h3>
                  <span className="container__left__total">10 Peer</span>
                </div>
                <div className="container__left__title">
                  Nếu bạn chưa đăng nhập. Vui lòng đăng nhập để có thể nhận được 10 peer token miễn
                  phí
                </div>
                <div className="container__left__time">
                  <div className="container__left__time__heading">
                    vui lòng xem hướng dẫn <RightOutlined />
                  </div>
                  <div className="container__left__time__content">
                    <Link to={ROUTER.HELPERS}>
                      <Button Button icon={<RightCircleOutlined />} danger>
                        Xem tại đây
                      </Button>
                    </Link>
                  </div>
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
            {/* <Row>
              <Col xl={{ span: 12 }}>hello</Col>
              <Col xl={{ span: 12 }}>hello</Col>
            </Row> */}
          </div>
        </Col>
        <Col xl={{ span: 13 }} lg={{ span: 0 }} className="container__right">
          <div className="container__right__box">
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
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContainerHome;
