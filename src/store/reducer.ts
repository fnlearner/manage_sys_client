import {combineReducers   } from "redux";

import {reducer as loginReducer} from '../views/Login/store'
export default combineReducers({
  loginReducer
});