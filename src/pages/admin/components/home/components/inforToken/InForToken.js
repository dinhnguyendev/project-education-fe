import React, { useState } from "react";
import { Button, Card, Col, Row, Statistic, Select, Typography, InputNumber, message } from "antd";
import { DollarCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./infoToken.css";
import BigNumber from "big-number";
const { Text } = Typography;
const InForToken = ({ contract, address, isWithraw }) => {
  console.log(contract);
  console.log(address);
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const [totalPeer, setTotalPeer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingWithdraw, setLoadingWithdraw] = useState(false);
  const [total, setTotal] = useState();
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
  const handleWithdrawnToken = () => {
    if (total) {
      const coinsss = BigNumber(1000000000000000000 * +total);
      let amount = "";
      for (let i = coinsss.number.length - 1; i >= 0; i--) {
        amount = amount + coinsss.number[i];
      }
      setLoadingWithdraw(true);
      contract.methods
        ?.wirthraw(amount)
        .send({
          from: currentAddress,
        })
        .then((data) => {
          console.log(data);
          message.success(`Bạn đã rút ${total} Peer token thành công`);
          // setTotalPeer(total);
          // setLoading(false);
        })
        .catch((err) => {
          message.error("Lỗi giao dịch");
        })
        .finally(() => {
          setLoadingWithdraw(false);
        });
    }
  };
  const onChange = (value) => {
    console.log("changed", value);
    setTotal(value);
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
            {isWithraw ? (
              <div className="withdrawn__token__games">
                <div className="withdrawn__token__games__flex">
                  <div className="withdrawn__token__games__heading">Nhập số token cần rút: </div>
                  <div className="withdrawn__token__games__input">
                    <InputNumber
                      style={{
                        width: "100%",
                      }}
                      min={0.01}
                      max={10000}
                      // defaultValue={}
                      onChange={onChange}
                      prefix={<QuestionCircleOutlined />}
                      allowClear={true}
                    />
                  </div>
                </div>
                <div className="withdrawn__token__games__button">
                  <Button
                    onClick={handleWithdrawnToken}
                    disabled={loadingWithdraw}
                    icon={<DollarCircleOutlined />}
                    type="primary"
                    danger
                    loading={loadingWithdraw}
                  >
                    Rút token
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InForToken;
