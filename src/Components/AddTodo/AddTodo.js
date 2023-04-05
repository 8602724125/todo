import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addTodo, errorTodo } from '../Actions/action';
import store from '../store';
import { getData } from '../store';

const AddTodo = () => {
    const dispatch =  useDispatch();
    // const select =  useSelector((state) => state.todo)

    const [todo, setTodo] = useState({title: "", description: ""})

    const submitHandler = (e) => {
        e.preventDefault()
        // todo['id'] = select[select.length -1].id + 1;
        axios.post('http://localhost:5000/todo', todo)
          .then(res => res.data)
          .then(todoData => {
            console.log("todoData: ", todoData.data)
            // return todoData.data
            console.log(todoData.data === 'Successfully saved')
            if (todoData.data === 'Successfully saved') {
                return () => {
                    console.log("abc")
                    return getData().then(
                        data => {
                            console.log("data: ", data)
                            return store.dispatch(addTodo(data))
                        },
                        error => store.dispatch(errorTodo(error))
                    )
                }
            }
          })
        // dispatch(addTodo(todo))
    }

  return (
    <>
        <div className="container my-3">
            <h3 className='text-center' style={{ marginTop: '100px' }}> Add a Todo</h3>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Todo Title</label>
                    <input type="text" value={todo.title} onChange={(e) => setTodo(prevTodo => ({...prevTodo, title: e.target.value}))} className="form-control" />

                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Todo Description</label>
                    <input type="text" value={todo.description} onChange={(e) => setTodo(prevTodo => ({...prevTodo, description: e.target.value}))} className="form-control" />
                </div>
                <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
            </form>
        </div>
    </>
  )
}

export default AddTodo