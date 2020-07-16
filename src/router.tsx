import * as React from "react";
import { Switch, Route, withRouter,Redirect } from "react-router-dom";
import Hello from "./components/HelloWorld";
import UserList from "./views/UserList/user";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Login from './views/Login'
enum ANIMATION_MAP {
  PUSH = "forward",
  POP = "back",
  REPLACE = "replace",
}
const Routes = withRouter(({ location, history }) => {
  // console.log(history);
  // history.replace('/')
  return (
    <TransitionGroup
      className={"router-wrapper"}
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: ANIMATION_MAP[history.action],
        })
      }
    >
      <CSSTransition timeout={5000} key={location.pathname}>
        <Container>
          <Switch location={location}>
            {/* <Route path='login' component={Login.apply(null,submit)}/> */}
            <Route path="/addr" exact component={Hello}></Route>
            <Route path="/user" exact component={UserList}></Route>
            <Redirect to="/addr"></Redirect>
          </Switch>
        </Container>
      </CSSTransition>
    </TransitionGroup>
  );
});
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;
export default React.memo(Routes);
