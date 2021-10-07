import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import "./Login.css";

const GetStatus = () => {
  const [status, setStatus] = useState([]);
  const [counter, setCounter]= useState(0);
  const jwt = localStorage.getItem("token");
  const userId = jwtDecode(jwt);
  console.log(userId);
  let endpoint = `http://localhost:5500/api/users/${userId._id}/status`;
  console.log(endpoint);

  const loadData = async () => {
    try {
      let res = await axios.get(endpoint, {});
      console.log(res);
      setStatus(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  const LikesCounter = ()=>{
      
      useEffect(()=> {
          const timer = setInterval(()=> {
              setCounter(counter +1)
             
          })
      }, [])
  }
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <ul>
            {status.length > 0 ? (
              status.map((data, index) => (
                <div key={index}>{data["status"]}</div>
              ))
            ) : (
              <div> no status</div>
            )}
          </ul>
        </Card.Body>
      </Card>
        <div>
            <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary" onClick={()=>{LikesCounter()}}>Like {LikesCounter}</Button>{''}
            <Button variant="outline-primary">Comment</Button>{''}
            <Button variant="outline-primary">Share</Button>{''}
            </ButtonGroup>
        </div>
      <div></div>
    </div>
  );
};

export default GetStatus;

// <ul>
//   {status.length > 0 ? (
//     status.map((data, index) => <div key={index}>{data["status"]}</div>)
//   ) : (
//     <div> no status</div>
//   )}
// </ul>;
