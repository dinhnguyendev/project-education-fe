import "./admin.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import logo from "../../assets/image/logologin.svg";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import IconAntd from "../../components/iconAndt/IconAntd";
const { Content, Footer, Sider } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo__box">
            <img src={logo} className="logo" alt="" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <HomeOutlined />
              <span>Trang chủ</span>
              <Link to="home" />
            </Menu.Item>
            <Menu.Item key="2">
              <CloseCircleOutlined />
              <span>Caro</span>
              <Link to="caro-manager" />
            </Menu.Item>
            <Menu.Item key="3">
              <DesktopOutlined />
              <span>User</span>
              <Link to="user-manager" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <HeaderAdmin />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              className=""
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Peer Game ©2022 Created by dinhnguyendev
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
