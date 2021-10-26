import './App.css';
import Todo_list from './todo_list/Todo_list.js';
import React,{ useState, useRef,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const BaseUrl = "https://django-rest-authentication.herokuapp.com/api/login/"
function App() {
  const [todo,settodo] = useState([])
  const TodoListitemname= useRef() 

  useEffect(()=>{
    axios.get(BaseUrl).then((res)=>{
      settodo(res.data)
    })
  },[])

  function handleAddTodo (e) {
    const name = TodoListitemname.current.value
    if(name === '') return alert('empty title')
    axios.post(BaseUrl,{
      "title": name,
      "description": "nothing",
      "is_completed": false
    }).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err.message)})
    // settodo(previ => {
    //   return [...previ,{id:uuidv4(),name:name,completed:false}]
    // })
    // TodoListitemname.current.value = null
  }
  return (
    <>
    <Todo_list todos={todo} />
    <input ref={TodoListitemname} type="text"/>
    <button onClick={handleAddTodo} >Add todo</button>
    <button onClick={()=>{settodo([])}}>Clear All</button>
    </>
  );
}


export default App;
