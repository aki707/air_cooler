import React from 'react';
import './Weather.css';

function Weather({ humidity, temperature, condition }) {
  return (
    <div className="weather">
      <div className="weather-info">
        <div className="weather-detail">
          <span role="img" aria-label="humidity">💧</span> {humidity}
        </div>
        <div className="weather-detail">
          <span role="img" aria-label="temperature">🌡</span> {temperature}°C
        </div>
        <div className="weather-detail">
          <span role="img" aria-label="condition">☁</span> {condition}
        </div>
      </div>
    </div>
  );
}

export default Weather;