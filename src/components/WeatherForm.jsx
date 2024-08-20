import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherForm = () => {
  const { city, setCity, fetchWeatherData } = useContext(WeatherContext);
  const [inputCity, setInputCity] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity); // Update city state in the context
    fetchWeatherData(inputCity); // Fetch weather data for the new city
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
