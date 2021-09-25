import React,{useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import {BrowserRouter as Router,
Switch,
Route,
Redirect} from "react-router-dom"
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Login from './Components/login'
import Home from './Components/Home'
import 'react-bootstrap'
import './App.css'
import Spotify from './Components/Spotify'



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
      <div className='body' >
        <Router>
          <div>
            <div>
              <h1> Head2Head</h1>
            </div>
            <Navbar />
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Register" component={Register} />
              <Route path="/Login" component={Login} />
              <Route path="/Spotify" component={Spotify}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default App
