import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Loader from 'react-loader-spinner';

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: '',
        },
        isFetching: false
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.setState({
            isFetching: true
        });

        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };



    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange}/>

                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange}/>

                    <button>Login</button>
                    {this.state.isFetching && (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                     )}
                </form>
            </div>
        )
    }
}
export default Login;

//EARLY Attempt:
// import React, { useState } from 'react';
// //import axios from 'axios';
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import PacmanLoader from 'react-spinners';

// //Problem with react-spinners - requires react16 up

// //Login Form
// //  ICE
// //  Form with state, handle changes, authenticator

// const Login = props => {
//     //we want name, password, isLoading
//     const [login, setLogin] = useState({
//         username: '',
//         password: '',
//         isLoading: false
//     });

//     //change handler
//     const handleChanges = e => {
//         setLogin({ ...login, [e.target.name]: e.target.value });
//     }

//     //authenticator - login function
//     const logins = e => {
//         e.preventDefault();
//         //use localStorage
//         axiosWithAuth()
//             .post("http://localhost:5000/api/login", login)
//             .then(res => {
//                 localStorage.setItem("token", res.data.payload);
//                 props.history.push('/friends');
//                 console.log("Successful login", res.data);
//             })
//             .catch(err => console.log(err.response));
//         setLogin({
//             username: '',
//             password: '',
//             isLoading: false
//         })
//     }

//     //render
//     //  reminder: create Spinner
//     //  React docs on Spinners: https://www.npmjs.com/package/react-spinners
//     return (
//         <form onSubmit={logins}>
//             <input type="text" value={props.uname} name={props.uname} onChange={handleChanges} placeholder="Username" />
//             <input type="password" value={props.password} name={props.password} onChange={handleChanges} placeholder="Password" />
//             <button onClick={props.onSubmit}>Login</button>
//             <PacmanLoader
//             loading="true"
//             color="#000000"
//             css="">
//             </PacmanLoader>
//         </form>
//     )
// }

// export default Login;