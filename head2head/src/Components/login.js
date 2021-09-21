import React, { useState } from 'react';

import axios from 'axios';

function Login() {

    
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();

        
    };

    const loginUser = async () => {
        await axios.post('http://localhost:5500/api/auth',{
            
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res)
            
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="container-fluid">
            <h2>login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email"><b>Email:</b> </label>
                    <input type="email" name="email" placeholder="email..." onChange ={e=> setEmail(e.target.value)}/>
                </div>
               
                <div>
                    <label htmlFor="password"><b>Password:</b> </label>
                    <input type="password" name="password" placeholder="password..." onChange={e=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{loginUser()}} >login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
