import React, { createContext, useState } from 'react';

// Create Context
export const WeatherContext = createContext();

// Weather Provider Component
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Default city input

  // Function to fetch weather data
  const fetchWeatherData = async (city) => {
    try {
      const apiKey = '6f7af4d66310f9461205fb52cac5c8a1'; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setWeatherData(null); // Reset weather data if there’s an error
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        city,
        setCity,
        fetchWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
