import axios from 'axios'
import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'

const BaseUrl = "https://mytodo-with-authentication.herokuapp.com/api/signup/"
export default function Signup() {
    const history = useHistory()
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const [confirmpassword,setconfirmpassword] = useState()
    const handlesignup = ()=>{
        console.log(email,name,password)
        if(password === confirmpassword){
            axios.post(BaseUrl,{
                "name":name,
                "email":email,
                "password":password 
            }).then((res)=>{history.push("/verify")}).catch((err)=>{alert(err)})
        }
        else{
            alert("Password not matching")
        }
    }
    return (
        <div>
            <div>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Name"/>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder="Email"/>
            <input type="password" onChange={(e)=>{setpassword(e.target.value)}}placeholder="Password"/>
            <input type="password" onChange={(e)=>{setconfirmpassword(e.target.value)}}placeholder="Confirm Password"/>
            </div>
            <button onClick={handlesignup}>SignUp</button>
            <Link to="/"><button>Login</button></Link>
        </div>
    )
}
