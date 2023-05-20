import React from "react";
import "./Container.css";
import Search from "./Search";

export default function Container(props) {
  return (
    <div className="container main-container">
      <div className="weather">
        <Search />
      </div>
    </div>
  );
}
