import { useState } from 'react';
import './WeatherForcast.css';

function WeatherForcast() {
  const [weather, setWeather] = useState([
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ]);

  return (
    <div className="weather-container">
      <ul className="weather-list">
        {weather.map((day, index) => (
          <li key={index} className="weather-item">
            <img className="weather-icon" src={day.img} alt={day.imgAlt} />
            <p className="weather-day">{day.day}</p>
            <p className="weather-conditions">{day.conditions}</p>
            <p className="weather-time">{day.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherForcast;