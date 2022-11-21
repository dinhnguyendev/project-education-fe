import { Col, Row, Avatar, Button, Modal, message } from "antd";
import React, { useState } from "react";
import "./startCaro.css";
import iconStart from "../../../../assets/image/start-caro.png";
import iconName from "../../../../assets/image/name-game.png";
import socket from "../../../../socket.io/socket.io";
import { useSelector } from "react-redux";

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
import { BLOCKCHAIN } from "./../../../../constants/constants";
import { handleConnected } from "../../../../socket.io/handleConnecion";

const StartCaro = () => {
  const user = useSelector((state) => state.user.login?.data);
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalUser, setTotalUser] = useState(0);
  const [loadingCheck, setLoadingCheck] = useState(false);
  const [loadingCreateGame, setLoadingCreateGame] = useState(false);
  const navigate = useNavigate();
  const contract = useRef();

  console.log("check 1", socket.connected);
  if (!socket.connected) {
    handleConnected();
  }
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
  const showModalCreateGame = () => {
    setLoadingCreateGame(true);
  };

  const hideModalCreateGame = () => {
    setLoadingCreateGame(false);
  };

  const handleSearch = () => {
    if (!user) {
      handleMessage("warning", "vui lòng đăng nhập");
      return navigate(LINKTO.LOGIN);
    }
    if (coin == 0) {
      return handleMessage("warning", "vui lòng chọn số peer cược");
    }
    if (!currentAddress) {
      return handleNotification(
        "warning",
        "Vui lòng kết nối với ví",
        "kết nối với ví tiền nếu bạn muốn chơi"
      );
    }
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
  const sendToken = (contract, currentAddress, amount, data) => {
    console.log(data);
    const addreceive = BLOCKCHAIN.ADDRESS__SM__GAMES;
    if (contract && currentAddress && addreceive) {
      contract.methods
        .transfer(addreceive, `${amount}000000000000000000`)
        .send({
          from: currentAddress,
        })
        .then((res) => {
          console.log(data);
          const matchs = {
            ...data,
            idUser: user?._id,
            addressWallet: currentAddress,
          };
          socket.emit("client--send-token-success", matchs);
        })
        .catch((err) => {
          socket.emit("client-transfer-token--error", data);
        });
    }
  };
  useEffect(() => {
    socket.on("server--rooms--sucessfylly", (data) => {
      if (data) {
        console.log("data room successfully");
        console.log(data);
        sendToken(contract.current, currentAddress, data.coin, data);
        hideModal();
        showModalCreateGame();
      }
    });
  }, []);
  useEffect(() => {
    socket.on("server--navigate--game-broad", (dataUser) => {
      if (dataUser) {
        const data = dataUser?.find((items) => items.idUser == user?._id);
        const idRooms = data?.idRooms;
        hideModalCreateGame();
        navigate(`${LINKTO.PLAYCARO}/${idRooms}`, { state: { data }, replace: false });
      }
    });
  }, []);
  useEffect(() => {
    socket.on("server--transfer-error", (data) => {
      if (data) {
        hideModalCreateGame();
        socket.emit("client--leave--room--error", data);
        handleNotification("error", "Tạo trận đấu không thành công", "Do bạn có người từ chối");
        // window.ethereum.close();
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

  const handleCheckToken = () => {
    if (currentAddress) {
      setLoadingCheck(true);
      contract.current.methods
        .balanceOf(currentAddress)
        .call()
        .then((total) => {
          setTotalUser(total);
        })
        .catch((err) => {})
        .finally(() => {
          setLoadingCheck(false);
        });
    }
  };
  const handleCheckTokenAutomation = () => {
    console.log(window.ethereum);
    const a = window.ethereum;
    socket.emit("server-transfer-token--automation");
  };
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
        footer={<></>}
        visible={loadingCreateGame}
        closeIcon
        cancelText="Hủy"
      >
        <p>
          <Typewriter
            options={{
              strings: ["Đang tạo trận đấu ! Vui lòng đợi ..."],
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
        <Col span={12}>
          <div className="profile">
            <div className="profile__item">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </div>
            <div className="profile__item">
              <h3 className="profile__name">{user?.username}</h3>
            </div>
            <div className="profile__item">
              <div className="profile__item__check__token">
                <Button
                  onClick={() => handleCheckToken()}
                  type="primary"
                  loading={loadingCheck}
                  ghost
                >
                  Kiểm tra token của bạn:
                </Button>
                <Button
                  onClick={() => handleCheckTokenAutomation()}
                  type="primary"
                  loading={loadingCheck}
                  ghost
                >
                  handle send token automation
                </Button>
                <div className="profile__token">
                  {totalUser ? totalUser / 1000000000000000000 : 0} Peer
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="profile__loading">Chờ trận đấu</div>
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
            <span>Tìm đối thủ</span>
            <img src={iconStart} alt="" className="start__caro__image" />
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default StartCaro;
