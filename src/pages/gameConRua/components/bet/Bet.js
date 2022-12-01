import { SendOutlined } from "@ant-design/icons";
import { Button, InputNumber, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import bigInt from "big-integer";
import ButtonBet from "./../buttonbet/ButtonBet";
import sand__brg from "../../../../assets/image/sand__brg.png";
import "./bet.css";
import handleContract from "../../../../utils/blockchain/handleContract";
import { BLOCKCHAIN, ERRORS } from "../../../../constants/constants";
import { useSelector } from "react-redux";
import { createGamesTurtleAction } from "../../../../actions/gameTurtle/gameTurtleActions";
import { useSearchParams } from "react-router-dom";
const Bet = ({ idRooms, disable }) => {
  const [active, setActive] = useState(0);
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableBet, setDisableBet] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const contract = useRef();
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const user = useSelector((state) => state.user.login?.data);
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
  useEffect(() => {
    setDisableBet(disable);
  }, [disable]);
  const handleChangeBet = (bet) => {
    setActive(bet);
    console.log(bet);
  };
  const onChange = (value) => {
    console.log("changed", value);
    setCoin(value);
  };
  const handleSendTokenTurtle = async () => {
    const idRooms = searchParams.get("idRooms");
    if (!active) {
      return message.warning("Vui lòng con để cược");
    }
    if (!coin) {
      return message.warning("Vui lòng nhập peer cược");
    }
    if (disableBet) {
      return message.warning("Ván này bạn đã cược");
    }
    if (!idRooms) {
      return message.warning("Lỗi phòng");
    }
    const data = {
      coin,
      bet: active,
      idRooms,
      idUser: user._id,
    };
    setLoading(true);
    const amount = bigInt(coin * 1000000000000000000);
    console.log("coin");
    console.log(amount);
    contract.current.methods
      .transfer(BLOCKCHAIN.ADDRESS__SM__GAMES__TURTLE, `${amount.value}`)
      .send({
        from: currentAddress,
      })
      .then(async (respon) => {
        if (idRooms) {
          const req = {
            ...data,
            addressWallet: respon.from,
          };
          const response = await createGamesTurtleAction(req);
          if (response?.data) {
            message.success(`Bạn đã cược thành công ${coin} Peer`);
          }
        }
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
            <InputNumber placeholder="Peer" min={0} max={3} onChange={onChange} />
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
