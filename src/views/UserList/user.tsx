import React from "react";
import { Layout, Breadcrumb } from "antd";
import CustomForm from "../../components/Form";
import CustomTable from "./Table";
const { Content } = Layout;
const user = () => {
  return (
    <div>
      <Content style={{ margin: "20px 16px" }}>
        {/* 123213 */}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 300 }}
        >
          it is form area
          <CustomForm />
        </div>
      </Content>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          it is table area
          <CustomTable />
        </div>
      </Content>
    </div>
  );
};

export default React.memo(user);
