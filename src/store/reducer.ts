import { IS_LOGIN } from "./constants";
import { addTodo } from "./actionCreator";
const initState = {
  isLogin: false,
};
function throwError(val: any): never {
  throw new Error(val);
}
export function reduer(state: any = initState, action: any) {
  switch (action.type) {
    case IS_LOGIN:
      return addTodo(action.data);
    default:
      throwError(action.type);
  }
}
