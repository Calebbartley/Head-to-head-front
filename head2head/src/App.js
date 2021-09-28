import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/login";
import Home from "./Components/Home";
import "react-bootstrap";
import "./App.css";
import Spotify from "./Components/Spotify";
import Profile from "./Components/Profile";

const App = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const jwt = localStorage.getItem("token");

    try {
      const user = jwtDecode(jwt);
      setUser({ user });
    } catch {}
  }, []);

  const Logout= ()=>{
    localStorage.removeItem("token")
    console.log(`${user.id} Has been logged out`)
    window.location= "/home"
  }

  return (
    <div>
      <Router>
        <div >
          <div className="logo" >
            <container >
            
            </container>
          </div>
          <Navbar user={user} />
          <Switch className="topnav">
            <Route path="/Home" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} render={props =>{
              if(!user){
                return <Redirect to ="/register" />
              } 
              else{
                return <Redirect to="/profile" />
              }
  
            }} />
            <Route path='/profile' component={Profile} />
            <Route path="/Spotify" component={Spotify} />
            <button onClick={()=>{Logout()}}>Logout</button>
          </Switch>
        </div>
       
      </Router>
    </div>
  );
};

export default App;
