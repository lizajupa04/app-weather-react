import React, { useState } from "react";
import axios from "axios";
import Weatherinforma from "./Weatherinforma";
import WeatherForecast from "./WeatherForecast";

import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "842b36d55cb28eba74a018029d56b04c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="App-contenedor">
          <div className="container">
            <div className="row">
              <div className="col-8 columna1">
                <div className="row section-search">
                  <form onSubmit={handleSubmit} id="form1">
                    <input
                      class="inputsearch"
                      id="inputsearch"
                      type="search"
                      placeholder="Search your city..."
                      onChange={handleCityChange}
                    />
                    <input class="inputbutton" type="submit" value="🔎" />
                  </form>
                </div>
                <div className="row section-complement">
                  <Weatherinforma
                    data={weatherData}
                    alt="{props.data.description}"
                  />
                </div>
              </div>
              <div className="col-4 columna2">
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/liza-palomino-698a48237/"
              target="_blank"
              rel="noreferrer"
            >
              Liza Palomino
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/lizajupa04"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/lizajupa04/app-weather-react"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>{" "}
      </>
    );
  } else {
    search();
    return "Loading...";
  }
}
