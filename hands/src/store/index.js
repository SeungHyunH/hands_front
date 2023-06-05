import { combineReducers, createStore } from "redux";
import userReduer from "./reducer/userReducer";
/* 루트 리듀서 생성 */
const store = createStore(
  combineReducers({
    userReduer,
  })
);

export default store;
