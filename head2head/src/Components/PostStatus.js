import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';



function PostStatus(user) {

    const [status,setStatus]= useState("");
    const [allStatus, setAllStatus]= useState([])


   
    const getStatus = useCallback(async ()=>{
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(allStatus)
        await axios.get(`http://localhost:5500/api/users/${userId._id}/status`,{
    
        }).then((res)=>{
            console.log(res)
            setAllStatus(res)
        })
        .catch(error => console.log(error))
    })

    useEffect(()=> {
        console.log("Component Initial Render");
        getStatus(true);
        console.log("Activities Fetched!")
      },[getStatus])

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
            <form className= "flex flex-1" onSubmit={submitHandler}>
                <input type="text" placeholder="what's on your mind" onChange={(e)=>{setStatus(e.target.value)}}/>
                <button onClick={()=>{newStatus()}}>Post</button>
                <button onClick ={()=>{getStatus()}}>Show all status</button>
            </form>
            </div>
            <div>
                {getStatus ?(getStatus.map((user)=> (
                    <li key = {user._id}>
                        {user.status}
                    </li>
                ))
                ) : (
                    <h1> loading...</h1>
                )}
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
