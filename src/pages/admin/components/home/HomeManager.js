import React from "react";
import "./caroManager.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import ConnectionCaro from "./components/connection/ConnectionCaro";
import Icon from "../../../../components/icon/Icon";
import TokenManager from "./components/token/TokenManager";
import HistoryTransaction from "../../../../components/historyTransactions/HistoryTransaction";
import { BLOCKCHAIN } from "../../../../constants/constants";

const HomeManager = () => {
  return (
    <div>
      <ConnectionCaro />
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
          <TokenManager />
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
          <HistoryTransaction
            nameContract={"Peer token"}
            addressContract={BLOCKCHAIN.ADDRESS_ADMIN}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default HomeManager;
