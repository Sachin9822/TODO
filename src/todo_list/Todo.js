import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'

export default function Todo({ todo,title,id }) {
    const BaseUrl = `https://mytodo-with-authentication.herokuapp.com/api/todo/${id}/`
    const [completed,setcompleted] = useState(todo.is_completed)
    
    // function to change the status 
    function iscompleted(e){
        axios.patch(BaseUrl,{
            "is_completed" : e.target.checked
        },{         
            "Authorization" : `Bearer ${localStorage.getItem('tokens')}`
            
          }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{alert(err);console.log(localStorage.getItem('tokens'))})
        console.log(e.target.checked)
        setcompleted(e.target.checked)

    }

    function Delete(e){
        console.log(localStorage.getItem('tokens'))
        axios.delete(BaseUrl,{
            headers:{
                "Authorisation": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1NDQ3MDUwLCJpYXQiOjE2MzUzNjA2NTAsImp0aSI6IjhhNTkwZGY2MmU2YjRhMDk5ZGUxYjU1YTE3Y2QzMWNhIiwidXNlcl9pZCI6ImY1MzVmOGIzLWVlN2MtNGJjYi05YjlhLWQ5N2JkYzE2NTIzNCJ9._Pm5fZTA2_gs7XOn-TrmKU_3FSdu7jVmMZiKUCZlfR0`

            }
        }).then((res)=>{alert("Deleted ")}).catch((err)=>{alert(err)})
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
