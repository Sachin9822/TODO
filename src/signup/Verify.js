import axios from 'axios'
import React, { useState } from 'react'

const BaseUrl = "https://mytodo-with-authentication.herokuapp.com/api/verify/"
export default function Verify() {
    const [opt,setopt] = useState()
    const handleopt = ()=>{
        axios.post(BaseUrl,{
            "otp":opt
        }).then((res)=>{alert(res.data)}).catch((err)=>{alert(err.message)})
    }
    return (
        <div>
            <input type="number" onChange={(e)=>{setopt(e.target.value)}} placeholder="Enter the otp"></input>
            <button onClick={handleopt}>Submit</button>
            <label>Resend opt</label>
        </div>
    )
}
