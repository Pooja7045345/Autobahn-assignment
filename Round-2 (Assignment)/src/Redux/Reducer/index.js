import { combineReducers } from "redux";
import UserReducer from './user.reducer';

const appReducers = combineReducers({ data :UserReducer})
export default appReducers;