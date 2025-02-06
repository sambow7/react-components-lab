import './WeatherForcast.css';
import weatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function WeatherForcast() {
  return (
    <>
      <ul>
        {weatherData.map((day, index) => (
          <li key={index}>
            <div className="weather-day">
              <WeatherIcon img={day.img} imgAlt={day.imgAlt} />
              <p>{day.day}</p>
              <p>{day.conditions}</p>
              <p>{day.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WeatherForcast;