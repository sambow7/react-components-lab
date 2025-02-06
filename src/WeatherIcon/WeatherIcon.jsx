// src/WeatherIcon/WeatherIcon.jsx
import './WeatherIcon.css';

function WeatherIcon({ img, imgAlt }) {
  return <img src={img} alt={imgAlt} className="weather-icon" />;
}

export default WeatherIcon;