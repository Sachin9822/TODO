import React from 'react'
import Todo from './Todo'
export default function Todo_list({todos}) {
    return (
            todos.map((todo)=>{
                return <Todo key={todo.id} title={todo.title} todo={todo} id={todo.id}  />
            })
    )
}
