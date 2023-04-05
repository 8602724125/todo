import { addTodo } from '../Actions/action';
import store from '../store';
import axios from 'axios';
const initData = require('../../config.json');

(function() {
    axios.get('http://localhost:5000/todo')
     .then(res => {
        console.log("res: ", res)
        return res.data
    })
     .then(todos => {
        console.log("todos: ", todos.data)
        store.dispatch(addTodo(todos.data))
     })
})()

const todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            // console.log("state: ", state)
            // console.log("action.payload: ", action.payload)
            // console.log("abc: ", [...state, ...action.payload])
            return [...state, ...action.payload];
        case "SHOW_TODO":
            return state;
        case "UPDATE_TODO":
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title
                    todo.description = action.payload.description
                }
                return todo;
            })
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        case "ERROR_TODO":
                return action.payload;
        default:
            return state
    }
}

export default todo;