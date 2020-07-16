import React, { useEffect, useRef, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import "antd/dist/antd.css";
import Login from "./views/Login";
function renderComponent(isLogin: boolean, setisLogin: any) {
  return isLogin ? <Nav /> : <Login submit={setisLogin} />;
}
const App = () => {
  const [isLogin, setisLogin] = useState(false);
  // let component =
  const component = renderComponent(isLogin, setisLogin);

  return <div className="app">{component}</div>;
};

export default React.memo(App);
