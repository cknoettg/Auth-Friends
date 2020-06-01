import React, { useState } from 'react';
import axios from 'axios';
import PacmanLoader from 'react-spinners';

//Login Form
//  ICE
//  Form with state, handle changes, authenticator

export const Login = props => {
    //we want name, password, isLoading
    const [login, setLogin] = useState({
        username: '',
        password: '',
        isLoading: false
    });

    //change handler
    const handleChanges = e => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    //authenticator - login function
    const login = e => {
        e.preventDefault();
        //use localStorage
        axios
            .post("http://localhost:5000/api/login", login)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push('/friends');
                console.log("Successful login", res.data);
            })
            .catch(err => console.log(err.response));
        setLogin({
            username: '',
            password: '',
            isLoading: false
        })
    }

    //render
    //  reminder: create Spinner
    //  React docs on Spinners: https://www.npmjs.com/package/react-spinners
    return (
        <form onSubmit={login}>
            <input type="text" value={uname} name={uname} onChange={handleChanges} placeholder="Username" />
            <input type="password" value={password} name={password} onChange={handleChanges} placeholder="Password" />
            <button onClick={onSubmit}>Login</button>
            <PacmanLoader
            loading="true"
            color="#000000"
            css="">
            </PacmanLoader>
        </form>
    )
}

export default Login;