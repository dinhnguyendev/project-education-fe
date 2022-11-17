import { SendOutlined } from "@ant-design/icons";
import { Button, InputNumber } from "antd";
import React, { useState } from "react";
import ButtonBet from "./../buttonbet/ButtonBet";
import sand__brg from "../../../../assets/image/sand__brg.png";
import "./bet.css";
const Bet = () => {
  const [active, setActive] = useState(0);
  const [coin, setCoin] = useState(0);
  const handleChangeBet = (bet) => {
    setActive(bet);
    console.log(bet);
  };
  const onChange = (value) => {
    console.log("changed", value);
    setCoin(value);
  };
  return (
    <div style={{ backgroundImage: `url(${sand__brg})` }} className="bet__box__brg__sand">
      <div className="bet__box ">
        <div className="bet__box__brg">
          <div className="bet__games">
            <div className="bet__game__flex">
              <ButtonBet
                active={active}
                colors={"#ff9314"}
                title={"Yellow"}
                bets={1}
                handleChangeBet={handleChangeBet}
              />
              <ButtonBet
                active={active}
                colors={"#f23068"}
                title={"Red"}
                bets={2}
                handleChangeBet={handleChangeBet}
              />
              <ButtonBet
                active={active}
                colors={"#0d42ff"}
                title={"Blue"}
                bets={3}
                handleChangeBet={handleChangeBet}
              />
            </div>
          </div>
          <div className="bet__game__submit">
            <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange} />
          </div>
          <div className="bet__game__submit">
            <div className="bet__game__submit__btn">
              <Button icon={<SendOutlined />} type="primary" danger>
                Cược Peer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bet;
