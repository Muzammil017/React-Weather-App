import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Weather App</h1>
        <WeatherForm />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}

export default App;
