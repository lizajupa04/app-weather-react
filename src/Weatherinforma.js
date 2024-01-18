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

      <div className="row section-humidity&wind">
        <div className="col-6">
          <lu>
            <dt className="clima1">Clima</dt>
            <dt className="clima2">
              <FormattedDate date={props.data.date} />
            </dt>
            <dt className="clima3 text-capitalize">{props.data.description}</dt>
          </lu>
        </div>
        <div className="col-6">
          <dt className="humity1">Humidity: {props.data.humidity}%</dt>
          <dt className="humity2">Wind: {props.data.wind}km/h</dt>
        </div>
      </div>

      <div className="row section-temp">
        <WeatherTemperature celsius={props.data.temperature} />
        <div>
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
      </div>

      <div className="section-buttonscities">
        <form action="#" class="form2">
          <input
            class="buttonbogota"
            id="buttonbogota"
            type="submit"
            value="  Bogotá  "
          />
          <input
            class="buttonparis"
            id="buttonparis"
            type="submit"
            value="    París    "
          />
          <input
            class="buttonnewyork"
            id="buttonnewyork"
            type="submit"
            value="New York"
          />
          <input
            class="buttoncurrent"
            id="buttoncurrent"
            type="submit"
            value="Current"
          />
        </form>
      </div>
    </div>
  );
}
