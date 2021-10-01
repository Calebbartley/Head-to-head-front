import React, {useState }from 'react';
import axios from 'axios';
import './Login.css'
import { Form } from 'react-bootstrap';


function Register() {


    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) => {
        e.preventDefault();
    };

    const registerUser = async () => {
        await axios.post('http://localhost:5500/api/users',{
            name: name,
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res)
        })
        .catch(error => console.log(error))
    }


    return (
      <div className="Login">
        <h2>Register</h2>
        <form className="Login-form" onSubmit={submitHandler}>
          <Form.Group size="md" controlId="small">
            <Form.Label> Email: </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder= "Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="md" controlId="small">
            <Form.Label> Username:</Form.Label>
            <Form.Control
              autoFocus
              type="name"
              value={name}
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="md" controlId="small">
            <Form.Label> Password: </Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div>
            <button
              onClick={() => {
                registerUser();
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
}

export default Register
