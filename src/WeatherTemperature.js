import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="container WeatherTemperature">
        <div className="row">
          <div className="col-8">
            <span className="temperature">{Math.round(props.celsius)}</span>
          </div>
          <div className="col-4 units">
            <span className="unit">
              °C |{" "}
              <a href="/" className="fahrenheit" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container WeatherTemperature">
        <div className="row">
          <div className="col-8">
            <span className="temperature">{Math.round(Fahrenheit())}</span>
          </div>
          <div className="col-4 units">
            <span className="unit">
              <a href="/" className="celsius" onClick={showCelsius}>
                °C
              </a>{" "}
              | °F
            </span>
          </div>
        </div>
      </div>
    );
  }
}
