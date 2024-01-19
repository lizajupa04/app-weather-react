import React, { useState } from "react";
import axios from "axios";
import Weatherinforma from "./Weatherinforma";

import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
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
    const apiKey = "60ebef00aea70bb958b63d30fdbe5fcb";
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
            <div className="col-4 columna2"></div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
