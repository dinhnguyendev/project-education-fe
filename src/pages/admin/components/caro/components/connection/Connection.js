import React from "react";
import { Card, Col, Row, Statistic, Tabs } from "antd";

const Connection = () => {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Số người đang chơi"
              value={11.28}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              className="connection"
              suffix="user"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Số người đang kết nối với hệ thống"
              value={9.3}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              className="connection"
              suffix="user"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Connection;
