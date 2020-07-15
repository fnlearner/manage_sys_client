import { applyMiddleware, createStore, compose, combineReducers } from "redux";
const initState = {
  Sidebar: "",
  Login: "",
};
let middleware = applyMiddleware();
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      })
    : compose;
const enhancer = composeEnhancers(
  middleware
  // other store enhancers if any
);
const reducers = {
    Sidebar: ()=>{
        return initState.Sidebar
    },
    Login:()=>{
        return initState.Login
    },
  };
const store = createStore(combineReducers(reducers), initState, enhancer);

export default store;
