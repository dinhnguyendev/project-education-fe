import React, { useEffect, useState } from "react";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import ConnectionCaro from "../../../home/components/connection/ConnectionCaro";
import socket from "../../../../../../socket.io/socket.io";

const Connection = () => {
  const [totalConnect, setTotalConnect] = useState(0);
  useEffect(() => {
    socket.on("server--connection--count--turtle", (total) => {
      console.log(total);
      setTotalConnect(() => total);
    });
    socket.emit("client--check--connection--count--turtle");
  }, []);
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Số người đang chơi"
              value={totalConnect}
              valueStyle={{
                color: "#3f8600",
              }}
              className="connection"
              suffix="user"
            />
          </Card>
        </Col>
        <Col span={12}>
          <ConnectionCaro />
        </Col>
      </Row>
    </div>
  );
};

export default Connection;
