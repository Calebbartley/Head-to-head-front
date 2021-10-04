import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import "./Login.css"

//      const jwt = localStorage.getItem('token')
//      const userId = jwtDecode(jwt)



const GetStatus = async () => {


    const [status, setStatus] = useState()
    const jwt = localStorage.getItem('token')
    const userId = jwtDecode(jwt);
    console.log(userId)
    let endpoint = `http://localhost:5500/api/users/${userId._id}/status`
    console.log(endpoint)
    await axios.get(endpoint,{

    })
    .then((res)=>{
        console.log(res)
        setStatus(res)
    })
    .catch(err => console.log(err))

    // useEffect (()=> {
    //     GetStatus().then(status => setStatus(status))
    // }, [])
// function GetStatus(user) {
//      const [status, setStatus] = useState([])
//      const jwt = localStorage.getItem('token')
//      const userId = jwtDecode(jwt)

//     useEffect(()=>{
//         const jwt = localStorage.getItem('token')
//         const userId = jwtDecode(jwt)
//         async function fetchData(){
//             const response =  await axios.get(`http://localhost:5500/api/users/${userId._id}/status`)
//             .then(response => {
//                 setStatus(response) 
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//         }
//          fetchData ()
//     },[])

    

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
