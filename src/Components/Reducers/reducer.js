const initData = require('../../config.json');

const todo = (state = initData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
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
        default:
            return state
    }
}

export default todo;