import { Layout, Menu, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  // TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Form, Switch } from "antd";
// import styled from "styled-components";
import { BrowserRouter, NavLink } from "react-router-dom";
import CustomRouter from "../../router";
import { Container, HeaderLoginStatus, H1Font } from "./style";
// const { SubMenu } = Menu;
const { Header, Sider, Footer } = Layout;
enum ThemeOption {
  dark = "dark",
  light = "light",
}
function Slider(props: {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  theme: ThemeOption.dark | ThemeOption.light;
}) {
  const { collapse, setCollapse, theme } = props;
  return (
    <Sider collapsed={collapse} onCollapse={setCollapse} theme={theme}>
      <div className="logo" />
      {/* <TopContainer>PMA 后台管理系统</TopContainer> */}
      <Menu theme={theme} defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/">地址列表</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLink to="/user">用户列表</NavLink>
        </Menu.Item>
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
  );
}
function LayoutContent() {
  return (
    <>
      <Layout className="site-layout" style={{ position: "relative" }}>
        <CustomRouter />
      </Layout>
    </>
  );
}

function useNav() {
  const [collapse, setCollapse] = useState(false);
  const [theme, changeTheme] = useState(ThemeOption.light);
  // console.log(theme === ThemeOption.light)
  const switchTheme = () => {
    // console.log(theme)
    if (theme === ThemeOption.light) {
      changeTheme(ThemeOption.dark);
    } else {
      changeTheme(ThemeOption.light);
    }
  };
  return (
    <BrowserRouter>
      <Container>
        <HeaderLoginStatus
          theme={theme}
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor:
              ThemeOption.light === theme ? "#fff" : "rgb(0 21 41)",
          }}
        >
          <H1Font>PMA Management System</H1Font>
          <Header className="site-layout-background">
            <Form>
              <Form.Item label="Switch Theme">
                <Switch onClick={switchTheme} />
              </Form.Item>
            </Form>
          </Header>
          <span>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </span>
        </HeaderLoginStatus>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Slider
            collapse={collapse}
            setCollapse={setCollapse}
            theme={theme}
          ></Slider>
          <LayoutContent />
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Container>
    </BrowserRouter>
  );
}
export default React.memo(useNav);
