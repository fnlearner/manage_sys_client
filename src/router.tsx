import * as React from "react";
import {  Switch, Route } from "react-router-dom";
import Hello from "./components/HelloWorld";
import UserList from "./views/UserList/user";
const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Hello}></Route>
      <Route path="/user" exact component={UserList}></Route>
    </Switch>
  );
};

export default React.memo(router);
