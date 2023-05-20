import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix icon">
            <WeatherIcon code={props.data.icon} size={60} />
          </div>
        </div>
        <div className="float-left"></div>
        <div className="col-6">
          <ul>
            <li className="description">{props.data.description}</li>
            <li className="feels_like">Feels like: {props.data.feel}°</li>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
