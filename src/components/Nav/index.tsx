import { Layout, Menu, Form, Switch } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
// import styled from "styled-components";
import {  NavLink } from "react-router-dom";
import CustomRouter from "../../router";
import { Container, HeaderLoginStatus, H1Font } from "./style";
import CustomAvatar from "./components/Avatar";
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
  const defaultSelectedKeys = window.location.pathname.slice(1);
  // console.log(defaultSelectedKeys)
  return (
    <Sider collapsed={collapse} onCollapse={setCollapse} theme={theme}>
      <div className="logo" />
      {/* <TopContainer>PMA 后台管理系统</TopContainer> */}
      <Menu
        theme={theme}
        defaultSelectedKeys={[defaultSelectedKeys]}
        mode="inline"
      >
        <Menu.Item key="addr" icon={<PieChartOutlined />}>
          <NavLink to="/addr">地址列表</NavLink>
        </Menu.Item>
        <Menu.Item key="user" icon={<DesktopOutlined />}>
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
  const localTheme = window.localStorage.getItem("theme") as any;
  const [theme, changeTheme] = useState(localTheme ?? ThemeOption.light);
  // if(localTheme){
  //   changeTheme(localTheme)
  // }
  const switchTheme = () => {
    if (theme === ThemeOption.light) {
      window.localStorage.setItem("theme", ThemeOption.dark);
      changeTheme(ThemeOption.dark);
    } else {
      window.localStorage.setItem("theme", ThemeOption.light);
      changeTheme(ThemeOption.light);
    }
  };
  return (
    <>
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
                <Switch
                  onClick={switchTheme}
                  defaultChecked={ThemeOption.dark === theme}
                />
              </Form.Item>
            </Form>
          </Header>
          <CustomAvatar />
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
    </>
  );
}
export default React.memo(useNav);
