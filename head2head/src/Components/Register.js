import React, {useState }from 'react';
import axios from 'axios';


function Register() {

   
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();

        
    };

    const registerUser = async () => {
        await axios.post('http://localhost:5500/api/users',{
            name: name,
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
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email"><b>Email:</b> </label>
                    <input type="email" name="email" placeholder="email..." onChange ={e=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name"><b>Username:</b> </label>
                    <input type="name" name="name" placeholder="username..." onChange={e=> setName(e.target.value)}/>
                </div>
                    <div>
                    <label htmlFor="password"><b>Password:</b> </label>
                    <input type="password" name="password" placeholder="password..." onChange={e=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{registerUser()}} >Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register
