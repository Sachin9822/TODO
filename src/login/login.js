import axios from 'axios'
import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'


const BaseUrl = "https://mytodo-with-authentication.herokuapp.com/api/login/"


export default function Login() {
    const [Email,setemail] = useState('')
    const [Password,setpassword] = useState('')
    const history = useHistory()
    // send the credentails
    const handlelogin= ()=>{
        axios.post(BaseUrl,{
            email : Email,
            password : Password
        }).then((res)=>{
            console.log(res.data.token) 
            // storing in local variable
            localStorage.setItem('tokens', res.data.token)
            history.push("/todos")
        }).catch((err)=>{alert("Invalid email or password")})
    }
    return (
        <div>
            <div>
                <div><input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/></div>
                <div><input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/></div>
                <button type="submit" onClick={handlelogin}>Submit</button>
            </div>
            <Link to="/signup"> <button >Sign Up</button></Link>
        </div>
    )
}
