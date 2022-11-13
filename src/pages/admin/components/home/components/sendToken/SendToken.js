import React from "react";
import { Select, Typography } from "antd";
const { Text } = Typography;
const SendToken = () => {
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
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
              value: "lucy",
              label: "Lucy (101)",
            }}
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Lucy (101)",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SendToken;
