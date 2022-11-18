import React, { useEffect } from "react";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import ConnectionSystem from "../../../ultil/connectionSystem/ConnectionSystem";
import socket from "../../../../../../socket.io/socket.io";
import { useState } from "react";
const ConnectionCaro = () => {
  const [totalConnect, setTotalConnect] = useState(0);
  useEffect(() => {
    socket.on("server--connection--count", (total) => {
      console.log(total);
      setTotalConnect(() => total);
    });
  }, []);
  return (
    <Col style={{ width: "100%" }}>
      <Card>
        <Statistic
          title="Số người đang kết nối với hệ thống"
          value={totalConnect}
          valueStyle={{
            color: "#cf1322",
          }}
          className="connection"
          // prefix={<ArrowDownOutlined />}
          suffix="user"
        />
      </Card>
    </Col>
  );
};

export default ConnectionCaro;
