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

import MusicPlayer from "./Components/Player";


const App = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const jwt = localStorage.getItem("token");

    try {
      const decoded = jwtDecode(jwt);
      setUser(decoded);
    } catch {}
  }, []);



  // const Logout= () =>{
  //   localStorage.removeItem("token")
  //   console.log("Has been logged out")
  //   window.location= "/home"
  // }

  return (
    <div>
      <Router>
        <div >
          <div className="logo" >
          </div>
          <Navbar user={user} />
          <Home/>
          <Switch className="topnav">
            <Route exact path="/" component={Home} />
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
          </Switch>
          
        </div>
      </Router>
    </div>
  );
};


export default App;
