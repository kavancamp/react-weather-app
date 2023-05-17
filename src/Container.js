import React from "react";
import "./Container.css";
import Search from "./Search";

export default function Container() {
  return (
    <div className="container main-container">
      <div className="weather">
        <h1 id="city">Sydney NSW, Australia</h1>
        <ul>
          <li id="date"></li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix icon">
              <img
                className="wob_tci"
                alt="Cloudy"
                src="//ssl.gstatic.com/onebox/weather/64/cloudy.png"
                id="wob_tci"
                data-atf="1"
                data-frt="0"
              />
            </div>
          </div>
          <div className="float-left">
            <span className="temp" id="temp" style={{ display: "block" }}>
              19
            </span>
            <span
              className="temp-celsius"
              style={{ display: "none" }}
              id="temp-celsius"
            >
              -7
            </span>
            <span className="units">
              <a href="#nav" id="celsius" onclick="tglC()">
                {" "}
                °C{" "}
              </a>
              <a href="#nav" id="fahrenheit" onclick="tglF()">
                °F{" "}
              </a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li className="description">Cloudy</li>
              <li className="feels_like">Feels like: °</li>
              <li className="Precipitation">Precipitation</li>
              <li className="humidity">Humidity: 77%</li>
              <li className="wind">Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
}
