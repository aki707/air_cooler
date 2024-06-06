import React from 'react';
import './Device.css';

function Device({ name, model, connected }) {
  return (
    <div className="device">
      <div className="device-icon">
        <div className="fan"></div>
      </div>
      <div className="device-info">
        <p><strong>Device Name:</strong> {name}</p>
        <p><strong>Model Name:</strong> {model}</p>
        <p><strong>Connected:</strong> 
        <span className={`status ${connected ? 'connected' : 'disconnected'}`}></span>
        </p>
      </div>
    </div>
  );
}

export default Device;