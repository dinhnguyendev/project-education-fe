import React from 'react'
import Connection from '../../../caro/components/connection/Connection'
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Tabs } from "antd";
import InForToken from '../../../home/components/inforToken/InForToken';
import Icon from '../../../../../../components/icon/Icon';
const TurtleAdmin = () => {
  return (
      <div><Connection />
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
          <InForToken/>
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
  )
}

export default TurtleAdmin