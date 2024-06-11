import React, { useState } from 'react';
import './Status.css';

// export default function Status({ connectionStatus }) {
//     const [isConnectionStatus, setConnectionStatus] = useState(false);

//     const handlePressIn = () => {
//         setConnectionStatus(true);
//     };

//     const handlePressOut = () => {
//         setConnectionStatus(false);
//     };

//     const getStatus = (connectionStatus) => {

//         return connectionStatus ? 'diss.svg' : 'WiFi.svg';
//     };

export default function Status({ connectionStatus }) {
    const [isPressed, setPressed] = useState(false);

    const handlePressIn = () => {
        setPressed(true);
    };

    const handlePressOut = () => {
        setPressed(false);
    };

    const getStatus = (connectionStatus, isPressed) => {
        if (isPressed) {
            return 'diss.svg';
        }
        return connectionStatus ? 'WiFi.svg' : 'diss.svg';
    };
    const svgColor = connectionStatus ? 'green' : 'red';

    return (
        <div className="Status">
            <div className="connection">
                <img
                    src={getStatus(connectionStatus)}
                    alt="WiFi"
                    style={{
                        filter: `brightness(${connectionStatus ? '100%' : '50%'})`,
                        float: 'right' 
                    }}
                    // onMouseEnter={handlePressIn}
                    // onMouseLeave={handlePressOut}
                />
            </div>
        </div>
    );
}
