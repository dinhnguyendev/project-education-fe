import React from 'react';
import "./gird.css";
import { Col, Row } from 'antd';
import Cards from '../card/Cards';
import { Link } from 'react-router-dom';
import { LINKTO } from '../../constants/constants';
const Gird = () => {
  return (
    <div className="gird">
    <Row gutter={16}>
        <Col className="gutter-row gird-item" span={6}>
            <Link to={LINKTO.GAMECARO}>
                <Cards/>
            </Link>
        </Col>
        <Col className="gutter-row gird-item" span={6}>
            <Cards/>
        </Col>
        <Col className="gutter-row gird-item" span={6}>
            <Cards/>
        </Col>
        <Col className="gutter-row gird-item" span={6}>
            <Cards/>
        </Col>
       

    </Row>
  </div>
  )
}

export default Gird