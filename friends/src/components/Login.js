import React, { useState } from 'react';

//Login Form
//  ICE
//  Form with state, handle changes, authenticator

export const Login = props => {
    //we want name, password
    //can we combine this into one state statement?
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');

    //change handler
    const handleChanges = e => {

    }

    //authenticator
    const login = e => {

    }

    //render
    return (
        <form onSubmit={login}>
            <input type="text" value={uname} name={uname} onChange={handleChanges} placeholder="Username" />
            <input type="password" value={password} name={password} onChange={handleChanges} placeholder="Password" />
            <button onClick={onSubmit}>Login</button>
        </form>
    )
}

export default Login;