import { SendOutlined } from "@ant-design/icons";
import { Button, InputNumber, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ButtonBet from "./../buttonbet/ButtonBet";
import sand__brg from "../../../../assets/image/sand__brg.png";
import "./bet.css";
import handleContract from "../../../../utils/blockchain/handleContract";
import { BLOCKCHAIN, ERRORS } from "../../../../constants/constants";
import { useSelector } from "react-redux";
const Bet = () => {
  const [active, setActive] = useState(0);
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableBet, setDisableBet] = useState(false);
  const contract = useRef();
  const currentAddress = useSelector((state) => state.user.currentAddress);
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
  const handleChangeBet = (bet) => {
    setActive(bet);
    console.log(bet);
  };
  const onChange = (value) => {
    console.log("changed", value);
    setCoin(value);
  };
  const handleSendTokenTurtle = () => {
    if (!active) {
      return message.warning("Vui lòng con để cược");
    }
    if (!coin) {
      return message.warning("Vui lòng nhập peer cược");
    }
    if (disableBet) {
      return message.warning("Ván này bạn đã cược");
    }
    setLoading(true);
    contract.current.methods
      .transfer(BLOCKCHAIN.ADDRESS__SM__GAMES__TURTLE, `${coin}000000000000000000`)
      .send({
        from: currentAddress,
      })
      .then((data) => {
        console.log(data);
        message.success(`Bạn đã cược thành công ${coin} Peer`);
        setDisableBet(true);
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
            <InputNumber placeholder="Peer" min={1} max={10000} onChange={onChange} />
          </div>
          <div className="bet__game__submit">
            <div className="bet__game__submit__btn">
              <Button
                onClick={() => handleSendTokenTurtle()}
                icon={<SendOutlined />}
                type="primary"
                danger
                loading={loading}
                disabled={disableBet}
              >
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
