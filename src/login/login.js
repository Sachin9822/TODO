import axios from 'axios'
import React,{useState} from 'react'


const BaseUrl = `https://django-rest-authentication.herokuapp.com/api/login/`

export default function Login() {
    const [Email,setemail] = useState('')
    const [Password,setpassword] = useState('')
    const handlelogin= async(e)=>{
        let UserCreden={
            "email" : "patharv777@gmail.com",
            "password" : "Pass@123"
        }
        console.log(Email,Password)
        // fetch(BaseUrl, {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: {
        //         email : "patharv777@gmail.com",
        //             password : "Pass@123"            }
        //    },{'Content-Type': 'text/plain'}).then((res)=>{console.log(res)});
        axios.post(BaseUrl,{
            email : "patharv777@gmail.com",
            password : "Pass@123"
        }).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <div>
                <div><input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/></div>
                <div><input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/></div>
                <button type="submit" onClick={handlelogin}>Submit</button>
                
            </div>
        </div>
    )
}
