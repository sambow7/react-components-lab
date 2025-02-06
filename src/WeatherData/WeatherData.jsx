
function WeatherData({ day, conditions, time }) {
  return (
    <div className="weather-data">
      <p>{day}</p>
      <p>{conditions}</p>
      <p>{time}</p>
    </div>
  );
}

export default WeatherData;