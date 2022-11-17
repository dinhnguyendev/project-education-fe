import React from "react";
import "./gird.css";
import { Col, Row } from "antd";
import Cards from "../card/Cards";
import { Link } from "react-router-dom";
import { LINKTO } from "../../constants/constants";
import brg__turtle from "../../assets/image/brg__home__turtle.png";
import brg__caro from "../../assets/image/brg__home__caro.png";
const Gird = () => {
  return (
    <div className="gird">
      <Row gutter={16}>
        <Col className="gutter-row gird-item" span={6}>
          <Link to={LINKTO.STARTCARO}>
            <Cards image={brg__caro} heading={"Game Caro"} />
          </Link>
        </Col>
        <Col className="gutter-row gird-item" span={6}>
          <Link to={LINKTO.TURTLE}>
            <Cards image={brg__turtle} heading={"Game Con Rùa"} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Gird;
