import React from 'react';
import Login from './login';
import Register from './Register';


function Home() {
    return (
        <div>
            <h1>
                Welcome to Head2Head. This application is designed to be paired with Verzuz the music streaming competition.
            </h1>
            <button onClick= {'./login'}>
                Login
            </button>
        </div>
    )
}

export default Home
