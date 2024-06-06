import {useState} from 'react';
import './CredsSignup.css';

export default function CredsSignup({email, password, rePassword}){
    const [emailState, setEmailState] = useState(email || '');
    const [passwordState, setPasswordState] = useState(password || '');
    const [rePasswordState, setRePasswordState] = useState(rePassword || '');
    return(
        <div>
            <div className="email">
                <input
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="password">
                <input
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className="rePassword">
                <input
                    type="rePassword"
                    placeholder="Enter your password again"
                />
            </div>
            <div className="Signup">
                <button>Sign Up</button>
            </div>
        </div>
    );
}