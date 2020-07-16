import { IS_LOGIN } from "./constants";

export function addTodo(text:boolean) {
    return {
      type: IS_LOGIN,
      text
    }
  }