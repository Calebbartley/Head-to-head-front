import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './GetStatus.css'
import {Button, FormGroup, FormLabel} from "react-bootstrap"


const PostStatus=(props) =>{

    const [status,setStatus]= useState("");
    const [allStatus, setAllStatus]= useState([])
    const [picture , setPicture] = useState({})



    useEffect(()=> {
        loadData()
    })

    const submitHandler =(e) => {
        e.preventDefault();
    };

    const loadData = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        axios.get(`http://localhost:5500/api/users/${userId._id}/status`)
        .then(res =>{

        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    const newStatus = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(status)
        await axios.post(`http://localhost:5500/api/users/${userId._id}/status`,{
           status: status,
           userId: userId,
        })
        props.changeRender()
        console.log("Stuff")
    }
    
    const fileUpload = event => {
        setPicture (event.target.picture)
    }

    const fileHandler= async () =>{
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        const pictures = new FormData();
        pictures.append('image',picture)
        await axios.post(`http://localhost:5500/api/users/${userId._id}/picture`, pictures,{
            picture: picture,
            userId : userId
        })
        .then(res =>{
            console.log(res)
        });
    }
   

    return (
        <div>
            <div >
                <form className="stats" onSubmit={submitHandler}>
                    <textarea type="text" placeholder="what's on your mind" onChange={(e)=>{setStatus(e.target.value)}}/>
                    <Button onClick={()=>{newStatus()}}>Post</Button>
                    <input type="File" placeholder="Post a Pic" onChange={fileUpload}/>
                    <Button onClick={fileHandler} >Upload</Button>
                </form>
            </div>
        </div>
    )

}
// <div>
// <h1>Statuses :</h1>
// {getStatus.map((allStatus)=>(
//     <h2> {allStatus}</h2>
// ))}
// </div>
// )}



export default PostStatus
