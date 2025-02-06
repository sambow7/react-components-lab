import weatherData from '../data/weatherData'; // Import the data
import './WeatherForcast.css';

function WeatherForcast() {
  return (
    <div className="weather-container">
      <ul className="weather-list">
        {weatherData.map((day, index) => (
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