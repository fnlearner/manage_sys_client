import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import reducer from './reducer'
import thunk from 'redux-thunk'

// let middleware = applyMiddleware();
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(
  combineReducers({
    reducer
  }),
  enhancer
);

export default store;
