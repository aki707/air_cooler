import './Signup.css';
import React, { useState } from 'react';
import CredsSignup from './CredsSignup.jsx';
import OtherSignup from './OtherSignup.jsx';

export default function Signup() {
    return (
        <div>
            <div className="login__navbar">
                <p> Create your Account</p>
            </div>
            <CredsSignup />
            <OtherSignup />
        </div>
    );
}