import React from 'react';
import './Login.css';
import CredsLogin from './CredsLogin.jsx';
import OtherLogins from './OtherLogins.jsx';

function Login() {
    return(
        <div className="login">
            <div className="login__navbar">
            <p> Login to your Account</p>
                </div>
            <CredsLogin />
            <OtherLogins />
        </div>
    )
}
export default Login;