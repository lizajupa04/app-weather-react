import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-4 iconforecast">
            <WeatherIcon code={props.data.weather[0].icon} size={32} />
          </div>
          <div className="col-8 section-temp-day">
            <div className="row section-days">
              <p className="day">{day()}</p>
            </div>
            <div className="row temp-min-max">
              <span className="WeatherForecast-temp-max">
                {maxTemperature()}C
              </span>{" "}
              |
              <span className="WeatherForecast-temp-min">
                {minTemperature()}C
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
