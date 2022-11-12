import { Col, Row, Avatar, Button, Modal, message } from "antd";
import React, { useState } from "react";
import "./startCaro.css";
import iconStart from "../../../../assets/image/start-caro.png";
import iconName from "../../../../assets/image/name-game.png";
import socket from "../../../../socket.io/socket.io";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { LINKTO } from "../../../../constants/constants";
import PeerCoin from "../../../../components/peerGame/PeerCoin";
import yellowCoin from "../../../../assets/image/yellowCoin.png";
import redCoin from "../../../../assets/image/redCoin.png";
import greenCoin from "../../../../assets/image/greenCoin.png";
import blueCoin from "../../../../assets/image/blueCoin.png";
import { handleMessage } from "../../../../utils/caro/message";
import Typewriter from "typewriter-effect";
import { handleNotification } from "./../../../../utils/notification";
import handleContract from "../../../../utils/blockchain/handleContract";
import { useEffect } from "react";
import { useRef } from "react";
import { BLOCKCHAIN } from './../../../../constants/constants';


const StartCaro = () => {
  const user = useSelector((state) => state.user.login?.data);
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
  const showModal = () => {
    setLoading(true);
  };

  const hideModal = () => {
    setLoading(false);
  };

  const handleSearch = () => {
    // if (!user) {
    //   handleMessage("warning", "vui lòng đăng nhập");
    //   return navigate(LINKTO.LOGIN);
    // }
    if (coin == 0) {
      return handleMessage("warning", "vui lòng chọn số peer cược");
    }
    // if (!currentAddress) {
    //   return handleNotification(
    //     "warning",
    //     "Vui lòng kết nối với ví",
    //     "kết nối với ví tiền nếu bạn muốn chơi"
    //   );
    // }
    showModal();
    console.log("bat dau tom doi thu");
    console.log(user);
    console.log(coin);
    const data = {
      ...user,
      coin: coin,
    };

    socket.emit("join-room", data);
  };
  const sendToken = (contract, currentAddress, amount,data) => {
    console.log(data);
    const addreceive = BLOCKCHAIN.ADDRESS_CONTRACT_RECEIVE;
    if (contract && currentAddress && addreceive) {
      contract.methods.transfer(addreceive,`${amount}000000000000000000`).send({
        from: currentAddress,
      }).then(data => {
        console.log(data);
      }).catch(err => {
        socket.emit("client-transfer-token--error", data);
      })
    }
}
  useLayoutEffect(() => {
    socket.on("server--rooms--sucessfylly", (data) => {
      if (data) {
        sendToken(contract.current, currentAddress,data.coin,data);
        // const idRooms = data.idRooms;
        // console.log("navigate");
        // console.log(navigate);
        // hideModal();
        // navigate(`${LINKTO.PLAYCARO}/${idRooms}`, { state: { data }, replace: true });
      }
    });
  }, []);
  useLayoutEffect(() => {
    socket.on("server--transfer-error", (data) => {
      console.log("do >>>>>>>>>>>>>>>>>>>>>>>>>");
      if (data) {
        hideModal();
        message.error("Tạo trận đấu không thành công");
        socket.emit("client--leave--room--error", data);
      }
    });
  }, []);
  
  const handleCoin = (e) => {
    const tagCoin = document.querySelectorAll(".peer__coin");
    tagCoin.forEach((item) => {
      item.classList.remove("peer__toggle");
    });
    e.target.classList.add("peer__toggle");
    setCoin(+e.target.id);
  };
  const handleCancelSearchPlayer = () => {
    if (coin) {
      socket.emit("client--leave--room", coin);
      hideModal();
    }
  };
  const sendMoney = () => {
    const addreceive = BLOCKCHAIN.ADDRESS_CONTRACT_RECEIVE;
    if (contract.current && currentAddress && addreceive) {
      contract.current.methods.transfer(addreceive,"100000000000000000000").send({
        from: currentAddress,
      }).then(data => {
        console.log(data);
        
      }).catch(err => {
        console.log(err);
      })
    }
  }
  return (
    <div className="game__box">
      <Modal
        title={
          <>
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/mgmiqlge.json"
              trigger="loop"
              delay="50"
              colors="primary:#3a3347,secondary:#f24c00,tertiary:#4bb3fd,quaternary:#ebe6ef"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </>
        }
        footer={
          <Button onClick={handleCancelSearchPlayer} className="button__cancel" danger>
            Hủy tìm đối thủ
          </Button>
        }
        visible={loading}
        closeIcon
        cancelText="Hủy"
      >
        <p>
          <Typewriter
            options={{
              strings: ["Đang tìm đối thủ ..."],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
            }}
          />
        </p>
      </Modal>
      <div className="game">
        <div className="game__name">
          <div className="game__content">
            <img className="game__name__image" src={iconName} alt="" />
          </div>
          <div className="game__name__heading">Games Caro</div>
        </div>
      </div>

      <Row className="profile__margin">
          <Button onClick={()=>sendMoney()} className="button__cancel" danger>
            chuyenn tien
          </Button>
        <Col span={12}>
          <div className="profile">
            <div className="profile__item">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </div>
            <div className="profile__item">
              <h3 className="profile__name">Dinh Nguyen</h3>
            </div>
            <div className="profile__item">
              <h3 className="profile__token">700 Peer</h3>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="profile__loading">Dang tim doi thu...</div>
        </Col>
      </Row>
      <Row className="row__flex">
        <Col className="peer__flex">
          <div className="peer">
            <PeerCoin image={yellowCoin} handleCoin={handleCoin} coinNumber={10} />
          </div>
          <div className="peer">
            <PeerCoin image={blueCoin} handleCoin={handleCoin} coinNumber={20} />
          </div>
          <div className="peer">
            <PeerCoin image={redCoin} handleCoin={handleCoin} coinNumber={50} />
          </div>
          <div className="peer">
            <PeerCoin image={greenCoin} handleCoin={handleCoin} coinNumber={100} />
          </div>
        </Col>
        <Col>
          <Button onClick={handleSearch} className="start__caro__button">
            <span>Bat dau tim doi thu</span>
            <img src={iconStart} alt="" className="start__caro__image" />
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default StartCaro;
