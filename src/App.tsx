import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import "antd/dist/antd.css";
import Login from "./views/Login";
import { connect } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
    // console.log("isLogin:", isLogin);
  }, [isLogin]);
  const component = renderComponent(isLogin);

  return (
    <div className="app">
      <SwitchTransition>
        <CSSTransition
          key={isLogin}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames={isLogin?'login':'out'}
        >
          {component}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default connect(mapStateToProps)(React.memo(App));
