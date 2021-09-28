import {Link} from "react-router-dom";
import './Navbar.css'
import Login from "./login";
import Register from "./Register";
import Home from "./Home";
import { InvalidTokenError } from "jwt-decode";
import Logout from "../App"
import { Container } from "react-bootstrap";
import React from 'react';

function Navbar(props) {
    return (
      <nav>
        <Container>
          <div className="navbar">
            <ol>
              <Link to="/Home">
                  <h3> Home</h3>
              </Link>
              {!props.user && 
                <React.Fragment>
                  <Link to="/Register">
                    <h3> Register</h3>
                  </Link>
                  <Link to="/Login">
                    <ul>
                      <h3> Log In</h3>
                    </ul>
                  </Link>
                </React.Fragment>
              }
              {props.user && 
                <React.Fragment>
                  <Link to="/Register">
                    <h3> Register</h3>
                  </Link>
                  <Link to="/Login">
                    <ul>
                      <h3> Log In</h3>
                    </ul>
                  </Link>
                </React.Fragment>
              }
              <Link to="/Spotify">
                <ul>
                  <h3> Spotify Login</h3>
                </ul>
              </Link>
              <button onClick={()=>{Logout()}}>Logout</button>
            </ol>
          </div>
        </Container>
      </nav>
    );
}

export default Navbar
