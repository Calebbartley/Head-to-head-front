import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';



function PostStatus(user) {

    const [status,setStatus]= useState("");
    const [allStatus,setAllStatus]= useState([])


    useEffect(()=> {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        setAllStatus([allStatus])
        axios.get(`http://localhost:5500/api/users/${userId._id}/status`)
        .then(json => console.log(json))
    },[allStatus])

    const submitHandler =(e) => {
        e.preventDefault();
    };

    const newStatus = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
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
    
    const getStatus = () => {
        return allStatus.map((user) =>{
            const {name,email,status}= user
        })
    }
    


    
    return (
        <div>
            <div>
            <form className= "flex flex-1" onSubmit={submitHandler}>
                <input type="text" placeholder="what's on your mind" onChange={(e)=>{setStatus(e.target.value)}}/>
                <button onClick={()=>{newStatus()}}>Post</button>
            </form>
            </div>
            <div>
                <ol>
                    <li>{getStatus}</li>

                </ol>
            </div>
        </div>
    )
}

export default PostStatus
