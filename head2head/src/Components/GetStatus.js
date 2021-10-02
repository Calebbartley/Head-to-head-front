import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import "./Login.css"
function GetStatus(user) {
     const [status, setStatus] = useState([])
     const jwt = localStorage.getItem('token')
     const userId = jwtDecode(jwt)

    useEffect(()=>{
        const jwt = localStorage.getItem('token')
        const userId = jwtDecode(jwt)
        axios.get(`http://localhost:5500/api/users/${userId.id}/status`)
        .then(res => {
            setStatus(res) 
        })
        .catch(err => {
            console.log(err)
        })
    })

    

    return (
        
        <div>
            
            <ul>
                {
                    status.map(status => (<li key ={userId._id}>{userId.status}</li>))
                }
            </ul>
        </div>
    )
}

export default GetStatus
