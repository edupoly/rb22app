import { combineReducers,createStore } from "redux";
import counterReducder from "./counterReducer";
import todoReducer from "./todoReducer";
var store = createStore(combineReducers({counter:counterReducder,todolist:todoReducer}));
export default store;