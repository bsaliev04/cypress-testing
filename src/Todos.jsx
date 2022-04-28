import React from 'react'
import {useState} from 'react'

export const Todos = () => {

    const [newTodo, setNewTodo] = useState('')
    const [allTodos, setAllTodos] = useState([])

    const handlerClick = () => {
        setAllTodos([...allTodos, newTodo])
    }

  return (
      <>
    <div>
        <h1 id='title'>All todos</h1>
        <input placeholder='add a new Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button  onClick={handlerClick} data-cy='addTodo'>Add this Todo</button>
    </div>
    <div>
        {
            allTodos.map((el, index) => {
                return (
                  <div key={index} data-cy={`${index}`}>
                    <h2>
                      {el} <button data-cy={`btn${index}`} onClick={() => {
                          const copyState = [...allTodos]
                          copyState.splice(index, index + 1)
                          setAllTodos(copyState)
                      }}>Delete</button>
                    </h2>
                  </div>
                );
            })
        }
    </div>
    </>
  )
}
