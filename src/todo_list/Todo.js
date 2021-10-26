import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'

export default function Todo({ todo,title,id }) {
    const BaseUrl = `https://my-todo-test-app.herokuapp.com/api/todo/${id}`
    const [completed,setcompleted] = useState(todo.is_completed)
    

    useEffect(()=>{
        axios.get(BaseUrl).then((res)=>{
            setcompleted(res.data.is_completed)
        })

    })
    // function to change the status 
    function iscompleted(e){
        axios.patch(BaseUrl,{
            "is_completed" : e.target.checked
        }).then((res)=>{
            console.log(res.data)
        })
        console.log(e.target.checked)
        setcompleted(e.target.checked)

    }
    function Delete(e){
        axios.delete(BaseUrl).then((res)=>{alert("Deleted "+{title})})
    }
    return (
        <div>
            <input type="checkbox" defaultChecked={completed}  onChange={iscompleted}/>
            <label>
            {completed ? <strike>{title}</strike>:title}
            </label>
            <button onClick={Delete} >Delete</button>
        </div>
    )
}
