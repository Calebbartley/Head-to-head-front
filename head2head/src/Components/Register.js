import React, {useState }from 'react';
import axios from 'axios';


function Register() {

    const[uset,setUser] = useState({});
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();

        createUser(user)
    };

    const registerUser = async () => {
        await axios.post('http://localhost:5500/api/users',{
            name: name,
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res)
            setUser(res)
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <form action="action_page.php" style="border:1px solid #ccc">
            

            </form>
        </div>
    )
}

export default Register
