import { createStore } from "redux";
import appReducers from "./../Reducer/index";
const store = createStore(appReducers);

export default store;