import React, { useState } from 'react';
import PacmanLoader from 'react-spinners';

//Login Form
//  ICE
//  Form with state, handle changes, authenticator

export const Login = props => {
    //we want name, password
    //can we combine this into one state statement?
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    //isLoading - prop for spinner is called 'loading'


    //change handler
    const handleChanges = e => {

    }

    //authenticator - login function
    const login = e => {
        e.preventDefault();
        //use localStorage
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