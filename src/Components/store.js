import rootReducer from "./Reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from "axios";

const store =  createStore(rootReducer, applyMiddleware(thunk));

export const getData = async () => {
    return await axios.get('http://localhost:5000/todo');
}

export default store;