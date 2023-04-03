import todo from "./reducer";
import { combineReducers } from "redux";

const rootReducer =  combineReducers({
    todo: todo
})

export default rootReducer;