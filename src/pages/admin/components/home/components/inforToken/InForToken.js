import React, { useState } from "react";
import { Button, Card, Col, Row, Statistic, Select, Typography } from "antd";
import { useSelector } from "react-redux";
const { Text } = Typography;
const InForToken = ({ contract, address }) => {
  console.log(contract);
  console.log(address);
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const [totalPeer, setTotalPeer] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleCheckTotalToken = () => {
    setLoading(true);
    contract.methods
      ?.checkTotal()
      .call()
      .then((total) => {
        console.log(total);
        setTotalPeer(total);
        setLoading(false);
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="token__caro__information">
        <div className="token__caro__heading">Thông tin đồng token </div>
        <Row gutter={24}>
          <Col span={24}>
            <Card>
              <Statistic
                title="Địa chỉ đồng Token"
                value={address}
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
              <Button loading={loading} onClick={handleCheckTotalToken} type="primary">
                Số Token hiện tại
              </Button>
              <div className="home__token__item__total">
                {totalPeer ? new Intl.NumberFormat().format(totalPeer / 1000000000000000000) : 0}
                peer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InForToken;
