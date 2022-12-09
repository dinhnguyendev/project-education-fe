import "./admin.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  CloseCircleOutlined,
  BugOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logologin.svg";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import IconAntd from "../../components/iconAndt/IconAntd";
import { useLocation } from "react-router";
import { CHECK__ACTIVE__MENU } from "../../constants/constants";
import { useSelector } from "react-redux";
const { Content, Footer, Sider } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(1);
  let location = useLocation();

  useEffect(() => {
    let paths = location.pathname;
    const activeNumber = CHECK__ACTIVE__MENU[paths];
    setActive(activeNumber);
  }, [location]);

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
          <Menu theme="dark" selectedKeys={[active]} mode="inline">
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
              <BugOutlined />
              <span>Con Rùa</span>
              <Link to="turtle-manager" />
            </Menu.Item>
            {/* <Menu.Item key="4">
              <DesktopOutlined />
              <span>User</span>
              <Link to="user-manager" />
            </Menu.Item> */}
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
