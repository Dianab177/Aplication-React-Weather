import "./App.css";
import Search from "./Search";
import Degrees from "./Degrees";
import IconWeather from "./IconWeather";
import Date from "./Date";
import Description from "./Description";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border-style">
          <Search />
          <h1>Bergondo</h1>
          <IconWeather />
          <Degrees />
          <Date />
          <Description />
          <Forecast />
        </div>
      </div>
      <div class="container">
         <small class="weather-link">
         <a href="https://github.com/Dianab177/React-Weather-App.git" target="_blank" title="link to github"  rel="noopener noreferrer">Open-source code</a>, by <a href="https://www.linkedin.com/in/dianaborrajo/">Diana Borrajo</a> 
         </small>
         </div>
    </div>
  );
}
