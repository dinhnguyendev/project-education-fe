import React, { useRef } from "react";
import Connection from "../../../caro/components/connection/Connection";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import InForToken from "../../../home/components/inforToken/InForToken";
import Icon from "../../../../../../components/icon/Icon";
import { useSelector } from "react-redux";
import handleContract from "../../../../../../utils/blockchain/handleContract";
import { BLOCKCHAIN } from "../../../../../../constants/constants";
import GamesTurtle from "../game/GamesTurtle";
const TurtleAdmin = () => {
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const contract = useRef();
  const contract_MM = new handleContract();
  const createContract = contract_MM.createContractGameTurtle();
  if (createContract) {
    contract.current = createContract;
  }
  return (
    <div>
      <Connection />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <span>
              <Icon title={"fab fa-bitcoin"} />
              Quản lý Token
            </span>
          }
          key="1"
        >
          <InForToken contract={contract.current} address={BLOCKCHAIN.ADDRESS__SM__GAMES__TURTLE} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <Icon title={"fas fa-history"} />
              Lịch sử giao dịch
            </span>
          }
          key="2"
        >
          Lịch sử giao dịch
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          <GamesTurtle />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TurtleAdmin;
