import React,{useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import {BrowserRouter as Router,
Switch,
Route,
Redirect} from "react-router-dom"

const App = () => {
    const [user, setUser]= useState({})



  useEffect(()=>{
    const jwt = localStorage.getItem('token');

    try{
      const user =jwtDecode(jwt);
      setUser({user})

    }catch{}


  },[])


    return (
        <Router>
            <div>
                <h1> Hello World</h1>
            </div>
            <div></div>
        </Router>
    )
}

export default App
