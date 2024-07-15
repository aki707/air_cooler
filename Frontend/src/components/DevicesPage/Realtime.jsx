// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Realtime = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const weatherApiKey = '21bcfede5e36d636da9894e2bf03cd58';
  const geocodeApiKey = '3ad3b09dbc4a4005b33975b2f4f81971';

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: latitude,
            lon: longitude,
            appid: weatherApiKey,
            units: 'metric',
          },
        });
        setWeatherData(weatherResponse.data);

        const geocodeResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: `${latitude}+${longitude}`,
            key: geocodeApiKey,
          },
        });
        const components = geocodeResponse.data.results[0].components;
        setCity(components.city || components.town || components.village);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (err) => {
            setLocationError(err.message);
            setLoading(false);
          }
        );
      } else {
        setLocationError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (locationError) return <p>Error fetching location: {locationError}</p>;
  if (error) return <p>Error fetching weather data.</p>;

  return (
    <div>
<h1 className='text-gray-400 font-bold text-xl'><span style={{ display: 'inline-flex', alignItems: 'center' }}><img src="Location.svg" alt="Location" className="w-12 h-12 mr-2" />{city}</span></h1>
      <p><span style={{ display: 'inline-flex', alignItems: 'center'  }}><img src="temp.png"  className="w-12 h-12 mr-2" />Temperature: {weatherData.main.temp} °C </span> </p>
      <p><span style={{ display: 'inline-flex', alignItems: 'center'  }}><img src="humidity.png"  className="w-12 h-12 mr-2" />Humidity: {weatherData.main.humidity} %</span></p>
      <p><span style={{ display: 'inline-flex', alignItems: 'center'  }}><img src="weather.png"  className="w-12 h-12 mr-2" />Weather: {weatherData.weather[0].description}</span></p>
    </div>
  );
};

export default Realtime;
