import React, { useState } from 'react';
import './CredsLogin.css';
export default function CredsLogin({ email, password }) {
    const [emailState, setEmailState] = useState(email || '');
    const [passwordState, setPasswordState] = useState(password || '');

    return (
        <div>
            <div className="email">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailState}
                    onChange={(e) => setEmailState(e.target.value)}
                />
            </div>
            <div className="password">
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={passwordState}
                    onChange={(e) => setPasswordState(e.target.value)}
                />
            </div>
            <div className="Forgot">
                <button>Forgot Password?</button>
            </div>
            <div className="Login">
                <button>Log In</button>
            </div>
        </div>
    );
}
