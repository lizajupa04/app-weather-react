import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function Weatherinforma(props) {
  return (
    <div className="container">
      <div className="row section-city">
        <h1 className="tit-city">{props.data.city}</h1>
      </div>

      <div className="row section-humiditywind">
        <div className="col-6">
          <lu>
            <dt className="clima1">Clima</dt>
            <dt className="clima2">
              <FormattedDate date={props.data.date} />
            </dt>
            <dt className="clima3 text-capitalize">{props.data.description}</dt>
          </lu>
        </div>
        <div className="col-6 humedad">
          <dt className="humity1">Humidity: {props.data.humidity}%</dt>
          <dt className="humity2">Wind: {props.data.wind}km/h</dt>
        </div>
      </div>

      <div className="row section-temp">
        <div className="col-3 sectio-icon">
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
        <div className="col-9">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
