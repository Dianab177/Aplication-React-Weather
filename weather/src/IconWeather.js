import "./App.css";

export default function IconWeather() {
  return (
    <div className="App">
      <div className="container">
        <div className="img-icon">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            id="weather-icon"
            width="170px"
            alt="icon weather"
          />
        </div>
      </div>
    </div>
  );
}
