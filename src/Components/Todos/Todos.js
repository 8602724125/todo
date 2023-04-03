import React, { useState } from 'react'
// import initData from '../../config.json';
import ShowTodos from '../ShowTodos/ShowTodos';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../Actions/action';
import { deleteTodo } from '../Actions/action';
import '../../App.css'



const Todos = () => {
  const dispatch =  useDispatch();
  const select = useSelector((state) => state.todo)
  const [editTodo, setEditTodo] = useState({})
  const [deleteTodos, setDeleteTodos] = useState({});


  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editTodo))
  }

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        {
          select.map(todo => <ShowTodos todo={todo} setEditTodo={setEditTodo} setDeleteTodos={setDeleteTodos} key={todo.id} />)
        }

        <div className="modal fade" id="update">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Edit todo</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">
                <form onSubmit={updateHandler}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Todo Title</label>
                    <input type="text" value={editTodo.title} onChange={(e) => setEditTodo(prevTodo => ({ ...prevTodo, title: e.target.value }))} className="form-control" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Todo Description</label>
                    <input type="text" value={editTodo.description} onChange={(e) => setEditTodo(prevTodo => ({ ...prevTodo, description: e.target.value }))} className="form-control" />
                  </div>
                  <div className="text-right mt-4">
                    <button type="submit" className="btn btn-sm btn-success" data-bs-dismiss="modal">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="delete">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Delete todo</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">

                <h6>Are you sure to delete ?</h6>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{deleteTodos.title}</h4>
                    <p className="card-text">{deleteTodos.description}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => deleteHandler(deleteTodos.id)} data-bs-dismiss="modal">Delete</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos