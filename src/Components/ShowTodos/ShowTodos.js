import React from 'react';
import '../../App.css';

const ShowTodos = ({ todo, setEditTodo, setDeleteTodos }) => {

    return (
        <>
            <div className='container m-2' style={{ width: "250px", display: "inline-block" }}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{todo.title}</h4>
                        <p className="card-text">{todo.description}</p>
                        <div className="d-flex justify-content-between mt-3">
                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#update" onClick={() => setEditTodo(todo)}>Edit</button>
                            <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#delete" onClick={() => setDeleteTodos(todo)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowTodos