import * as actionTypes from "./constants";

const defaultState = {
  isLogin: false,
  enterLoading: false,
  param: {
    username: "",
    password: "",
  },
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
        // console.log(state,action)
      return Object.assign({},state,{
          isLogin:action.data
      })
    case actionTypes.CHANGE_ENTER_LOADING:
      return Object.assign({},state,{
          enterLoading:action.data
      });
    default:
      return state;
  }
};
