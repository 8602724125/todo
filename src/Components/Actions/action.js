export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export const showTodo = () => {
    return {
        type: "SHOW_TODO"
    }
}

export const updateTodo = (todo) => {
    return {
        type: "UPDATE_TODO",
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export const errorTodo = (error) => {
    return {
        type: "ERROR_TODO",
        payload: error
    }
}