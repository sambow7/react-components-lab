// src/App.jsx

import './App.css';
import WeatherForcast from './WeatherForcast/WeatherForcast.jsx';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherIcon from './WeatherIcon/WeatherIcon.jsx';

function App() {

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        <WeatherForcast />
        <WeatherData />
        <WeatherIcon />
      </section>
    </>
  );
}

export default App
