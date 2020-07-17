import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import "antd/dist/antd.css";
import Login from "./views/Login";
import { connect } from "react-redux";
function renderComponent(isLogin: boolean) {
  return isLogin ? <Nav /> : <Login />;
}

const mapStateToProps = ({ reducer }: any) => ({
  isLogin: reducer?.loginReducer?.isLogin,
});

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
const App = (props: mapStateToPropsType & any) => {
  //LOGIN 状态应该由redux来维护
  const { isLogin } = props;
  // // let component =
  useEffect(() => {
    console.log("isLogin:", isLogin);
  }, [isLogin]);
  const component = renderComponent(isLogin);
  return <div className="app">{component}</div>;
};
export default connect(mapStateToProps)(React.memo(App));
