import React, { useEffect, useState,  } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import "antd/dist/antd.css";
import Login from "./views/Login";
import { CSSTransition } from "react-transition-group";
import { withRouter, Route } from "react-router";
import { BrowserRouter, Redirect, Switch,useHistory } from "react-router-dom";
// @withRouter
const App= () => {
  const [isLogin, setisLogin] = useState(false);
  const history = useHistory()
  console.log(history)
  // useEffect(() => {
  //   if (isLogin) {
  //     history.replace("/Nav");
  //   } else {
  //     history.replace("/login");
  //   }
  // }, [isLogin]);
  return (
    <div className="app">
        {isLogin ? <Nav/> : <Login submit={setisLogin}/>}
    </div>
  );
};

export default React.memo(App);
