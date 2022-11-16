import React from "react";
import Connection from "../connection/Connection";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import Icon from "../../../../../../components/icon/Icon";
import InForToken from "../../../home/components/inforToken/InForToken";
import { useSelector } from "react-redux";
import { useRef } from "react";
import handleContract from "../../../../../../utils/blockchain/handleContract";
import { useEffect } from "react";
import { BLOCKCHAIN } from "../../../../../../constants/constants";
const Manager = () => {
  const currentAddress = useSelector((state) => state.user.currentAddress);
  const contract = useRef();
  const contract_MM = new handleContract();
  const createContract = contract_MM.createContractGameCaro();
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
          <InForToken contract={contract.current} address={BLOCKCHAIN.ADDRESS__SM__GAMES} />
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
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Manager;
