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
    </div>
  );
}
