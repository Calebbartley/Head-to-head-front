import React from "react";
import Spotify from "./Spotify";
import Playlist from "./Playlist";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import PostStatus from "./PostStatus";
import SpotifyPlayer from "./Player";
import GetStatus from "./GetStatus";
import WebPlayback from "./Player";
import  Player  from "./Player";
import "./Profile.css"

function Profile() {
  const Logout = () => {
    localStorage.removeItem("token");
    console.log("Has been logged out");
    window.location = "/home";
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={Logout}>Logout</button>
      <Player/>
      <container className="content">
        <div>
          <PostStatus />
        </div>
        </container>
        <div className="d-flex flex-row">
          <GetStatus />
        </div>
        <div>
         
        </div>
    </div>
  );
}

export default Profile;
