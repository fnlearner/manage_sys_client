import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Content } = Layout;
type a = number[] extends Array<infer v> ? v : "n";
function useHello() {
  const [msg, setMsg] = useState("world");
  console.log(msg);
  return (
    <div>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        hello ,{msg}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Bill is a cat.
        </div>
      </Content>
    </div>
  );
}
export default React.memo(useHello);
