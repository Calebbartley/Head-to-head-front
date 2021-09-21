import React,{useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import {BrowserRouter as Router,
Switch,
Route,
Redirect} from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/login'
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
                <h1> Head2Head</h1>
            </div>
            <div>
              <Register/>
            </div>
            <div>
              <Login/>
            </div>
        </Router>
    )
}

export default App
