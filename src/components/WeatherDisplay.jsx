import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <p>No weather data available. Please search for a city.</p>;
  }

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
