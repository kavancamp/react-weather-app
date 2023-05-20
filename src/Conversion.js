import React, { useState } from "react";
import "./Conversion.css";
// eslint-disable-next-line
import Search from "./Search";
// eslint-disable-next-line
import WeatherInfo from "./WeatherInfo";

export default function Conversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <span className="temp celsius" id="temp">
          {props.data.celsius}
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Conversion">
        <span className="temp fahreneheit" id="temp">
          {props.data.temp}
        </span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
