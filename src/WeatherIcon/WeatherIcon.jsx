import './WeatherIcon.css';

function WeatherIcon({ img, imgAlt }) {
  return <img className="weather-icon" src={img} alt={imgAlt} />;
}

export default WeatherIcon;