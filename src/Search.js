import React, { useState } from "react";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";
import DateFormatted from "./DateFormatted";
import WeatherForecast from "./WeatherForecast";
import Conversion from "./Conversion";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    console.log(url);
    axios.get(url).then(displayTemp);
  }
  function displayTemp(response) {
    setLoaded(true);
    setWeather({
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      temp: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      speed: Math.round(response.data.wind.speed),
      celsius: Math.round(((response.data.main.temp - 32) * 5) / 9),
      coordinates: response.data.coord,
    });
    console.log(response.data);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form
      className="search-form float-right"
      id="search-form"
      onSubmit={handleSubmit}
      onChange={updateCity}
    >
      <input
        type="text"
        placeholder="Enter a city name.."
        id="city-input"
        className="form-control"
      />
      <button>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1.0em"
          width="1.0em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
        </svg>
      </button>
    </form>
  );
  if (loaded) {
    return (
      <>
        <ul>
          <h1>
            {weather.city}, {weather.country}
          </h1>
          <DateFormatted />
        </ul>
        <Conversion data={weather} />
        <WeatherInfo data={weather}  />
        <div>{searchForm}</div>
        <WeatherForecast coordinates={weather.coordinates} />
      </>
    );
  } else {
    return (
      <>
        <ul>
          <DateFormatted />
        </ul>
        <div>{searchForm}</div>
      </>
    );
  }
}
