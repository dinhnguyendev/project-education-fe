import React from "react";
import { Card, Statistic } from "antd";
const ConnectionSystem = () => {
  return (
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
  );
};

export default ConnectionSystem;
