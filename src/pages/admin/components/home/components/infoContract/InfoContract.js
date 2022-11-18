import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Statistic, Select, Typography } from "antd";
const { Text } = Typography;
const InfoContract = ({ contract, address, inf }) => {
  const [totalPeer, setTotalPeer] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleCheckTotalToken = () => {
    setLoading(true);
    contract.methods
      ?.balanceOf(inf?.value)
      .call()
      .then((total) => {
        setTotalPeer(total);
        setLoading(false);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    setTotalPeer(0);
  }, [inf]);
  return (
    <>
      {inf ? (
        <div className="info__contract">
          <div className="token__caro__heading">Thông tin {inf?.label} </div>
          <Row gutter={24}>
            <Col span={24}>
              <Card>
                <Statistic
                  title="Địa chỉ đồng Token"
                  value={inf?.value}
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
                  {totalPeer ? totalPeer / 1000000000000000000 : 0} peer
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="infor__contract__empty">
          <Text italic={true} type={"warning"}>
            Vui lòng chọn contract để chuyển
          </Text>
        </div>
      )}
    </>
  );
};

export default InfoContract;
