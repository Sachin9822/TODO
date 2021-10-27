import Todo from './Todo'
import React,{ useState, useRef,useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
const BaseUrl = `https://mytodo-with-authentication.herokuapp.com/api/todo/`


export default function Todo_list() {
  const history = useHistory();
    const [todos,settodo] = useState([])
  const TodoListitemname= useRef() 

  useEffect(()=>{
    // console.log(`Bearer ${localStorage.getItem('tokens')}`)
    axios.get(BaseUrl,{
      headers :{
        "Authorization" : `Bearer ${localStorage.getItem('tokens')}`
      }
    }).then((res)=>{
      console.log(res)
      settodo(res.data.data)
    }).catch((err)=>{localStorage.setItem('tokens',null);console.log("In todolist: "+err);history.push("/")})
  },[])

  function handleAddTodo (e) {
    const name = TodoListitemname.current.value
    if(name === '') return alert('empty title')
    axios.post(BaseUrl,{
      "title": name,
      "description": "nothing",
      "is_completed": false
    },{
      headers : {
        "Authorization": `Bearer ${localStorage.getItem('tokens')}`
      }
    }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.message)})
    // settodo(previ => {
    //   return [...previ,{id:uuidv4(),name:name,completed:false}]
    // })
    // TodoListitemname.current.value = null
  }
  const handlelogout= ()=>{
    localStorage.setItem('tokens',null)
    history.push("/")
  }
    return (
        <>
    <input ref={TodoListitemname} type="text"/>
    <button onClick={handleAddTodo} >Add todo</button>
    <button onClick={()=>{settodo([])}}>Clear All</button>
    <button onClick={handlelogout}>LogOut</button>
            {todos.map((todo)=>{
                return <Todo key={todo.id} title={todo.title} todo={todo} id={todo.id}  />
            })}
        </>
    )
}
