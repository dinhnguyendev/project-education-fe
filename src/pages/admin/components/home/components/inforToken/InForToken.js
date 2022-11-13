import React from "react";
import { Button, Card, Col, Row, Statistic, Select, Typography } from "antd";
const { Text } = Typography;
const InForToken = () => {
  const handleCheckTotalToken = () => {};

  return (
    <>
      <div className="token__caro__information">
        <div className="token__caro__heading">Thông tin đồng token </div>
        <Row gutter={24}>
          <Col span={24}>
            <Card>
              <Statistic
                title="Địa chỉ đồng Token"
                value={"0xd9145cce52d3812f254917e481eb44e9943f39138"}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                // prefix={<ArrowUpOutlined />}
                suffix="(Peer)"
              />
            </Card>
          </Col>
        </Row>
        <div className="home__token__action">
          <div className="home__token__action__heading">Kiểm tram số token:</div>
          <div className="home__token__content">
            <div className="home__token__item">
              <Button onClick={handleCheckTotalToken} type="primary">
                Số Token hiện tại
              </Button>
              <div className="home__token__item__total">500 peer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InForToken;
