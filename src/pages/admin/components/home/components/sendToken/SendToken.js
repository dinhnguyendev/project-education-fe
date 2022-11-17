import React, { useEffect, useRef, useState } from "react";
import { Button, Select, InputNumber, Typography, message } from "antd";
import InfoContract from "../infoContract/InfoContract";
import { SendOutlined, QuestionCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { BLOCKCHAIN, ERRORS } from "./../../../../../../constants/constants";
import handleContract from "../../../../../../utils/blockchain/handleContract";
import { useSelector } from "react-redux";
const { Text } = Typography;
const SendToken = () => {
  const [inforContract, setInforContract] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingWithdraw, setLoadingWithdraw] = useState(false);
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const contract = useRef();
  useEffect(() => {
    const contract_MM = new handleContract();
    console.log(contract_MM);
    const createContract = contract_MM.createContract();
    console.log(createContract);
    if (createContract) {
      contract.current = createContract;
    }
    console.log(contract.current);
  }, []);
  const handleChange = (value) => {
    setInforContract(value);
  };
  const onChange = (value) => {
    console.log("changed", value);
    setTotal(value);
  };
  const handleSendToken = () => {
    setLoading(true);
    if (!inforContract) {
      setLoading(false);
      return message.warning("Vui lòng chọn địa contract");
    }
    if (!total) {
      setLoading(false);
      return message.warning("Vui lòng nhập số token");
    }
    contract.current.methods
      .transfer(inforContract?.value, `${total}000000000000000000`)
      .send({
        from: currentAddress,
      })
      .then((data) => {
        console.log(data);
        message.success(`Bạn đã chuyển thành công ${total} Peer`);
      })
      .catch((err) => {
        console.log(err);
        if (err?.code == ERRORS.CODE.ERRORS__BLOCKCHAIN__REJECT) {
          return message.error("Thất bại ! Bạn đã từ chối chuyển");
        }
        message.error("Thất bại !!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleWithdrawnToken = () => {
    setLoadingWithdraw(true);
    if (!inforContract) {
      setLoadingWithdraw(false);
      return message.warning("Vui lòng chọn địa contract");
    }
    if (!total) {
      setLoadingWithdraw(false);
      return message.warning("Vui lòng nhập số token");
    }
  };
  return (
    <div className=" home__token__action__withraw">
      <div className="home__token__action__heading">Chuyển tiền vào contract:</div>
      <Text italic={true} type={"warning"}>
        Lưu ý: Đảm bảo địa chỉ ví của bạn đang kết nối là địa chỉ ví của admin
      </Text>
      <div className="home__token__content__withraw">
        <div className="home__token__item">
          <Select
            labelInValue
            defaultValue={{
              label: "Vui lòng chọn contract để chuyển token",
            }}
            style={{
              width: 400,
            }}
            onChange={handleChange}
            options={[
              {
                value: BLOCKCHAIN.ADDRESS__SM__FREE,
                label: "contract lấy token miễn phí",
              },
              {
                value: BLOCKCHAIN.ADDRESS__SM__GAMES,
                label: "contract lấy token game",
              },
            ]}
          />
          <InfoContract inf={inforContract} contract={contract.current} />
        </div>
      </div>
      <div className="home__token__total">
        <div className="home__token__total__heading">Nhập số token :</div>
        <div className="home__token__total__number">
          <InputNumber
            style={{
              width: "100%",
            }}
            min={1}
            max={10000}
            // defaultValue={}
            onChange={onChange}
            prefix={<QuestionCircleOutlined />}
            allowClear={true}
          />
        </div>
      </div>
      <div className="home__token__content__send">
        <Button
          onClick={handleSendToken}
          disabled={!inforContract || !total}
          icon={<SendOutlined />}
          type="primary"
          danger
          loading={loading}
        >
          Chuyển token
        </Button>
        <div className="withdrawn__token">
          <Button
            onClick={handleWithdrawnToken}
            disabled={!inforContract || !total}
            icon={<DollarCircleOutlined />}
            type="primary"
            danger
            // loading={loading}
          >
            Rút token
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SendToken;
