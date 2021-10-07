import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Login.css'
import {Button, FormGroup, FormLabel} from "react-bootstrap"


function PostStatus(user) {

    const [status,setStatus]= useState("");
    const [allStatus, setAllStatus]= useState([])


   
    
    useEffect(()=> {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        axios.get(`http://localhost:5500/api/users/${userId._id}/status`)
        .then(res =>{

        })
        .catch(err =>{
            console.log(err)
        })
    })

    const submitHandler =(e) => {
        e.preventDefault();
    };

    
    
    const newStatus = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(status)
        await axios.post(`http://localhost:5500/api/users/${userId._id}/status`,{
           status: status,
           userId: userId,
        })
        .then((res) => {
            console.log(res)
            setStatus(res)
        })
        .catch(error => console.log(error))
    }
    
    
   
    if (user){

    
    return (
        <div>
            <div>
                <form className= "Login-form" onSubmit={submitHandler}>
                    <input type="text" placeholder="what's on your mind" onChange={(e)=>{setStatus(e.target.value)}}/>
                    <input type="File" placeholder="Post a Pic" onChange={(e)=>{setStatus(e.target.value)}}/>
                    <Button onClick={()=>{newStatus()}}>Post</Button>
                </form>
            </div>
        </div>
    )
}
else{
    return(
        <h1>NOPE</h1>
    )
}
}
// <div>
// <h1>Statuses :</h1>
// {getStatus.map((allStatus)=>(
//     <h2> {allStatus}</h2>
// ))}
// </div>
// )}



export default PostStatus
