import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import "./Login.css";
import Likes from "./Likes";

const GetStatus = (props) => {
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

  useEffect(
    () => {
      loadData();
    } , [props.rerender]
  )
  const incrementCounter = (userId, statusId) => {
    let response = axios.patch(`http://localhost:5500/api/users/${userId}/status/like/${statusId}`,null, {headers:{'x-auth-token': jwt}} )
    loadData();
  }
  
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <ul>
          {console.log(status)}
            {status.length > 0 ? (
              status.slice(0).reverse().map((data, index) => (
                <div key={index}>{data["status"]}
                  <div>
                    <ButtonGroup aria-label="Basic example">
                      <Button onClick={()=>incrementCounter(data.userId, data._id)} variant="outline-primary">Like: {data.likes}</Button>{''}
                      <Button variant="outline-primary">Comment</Button>{''}
                      <Button variant="outline-primary">Share</Button>{''}
                    </ButtonGroup>
                  </div>
                </div>
              ))
            ) : (
              <div> no status</div>
            )}
          </ul>
        </Card.Body>
      </Card>
        <div>
           
        </div>
      <div>
      </div>
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
