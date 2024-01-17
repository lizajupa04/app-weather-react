import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
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
      iconUrl: "#",
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App-contenedor">
        <div className="container">
          <div className="row">
            <div className="col-8 columna1">
              <div className="row section-search">
                <form id="form1">
                  <input
                    class="inputsearch"
                    id="inputsearch"
                    type="search"
                    placeholder="Search your city..."
                  />

                  <input class="inputbutton" type="submit" value="🔎" />
                </form>
              </div>
              <div className="row section-cityname">
                <h1 className="tit-city">{weatherData.city}</h1>
              </div>
              <div className="row section-humidity&wind">
                <div className="col-6">
                  <lu>
                    <dt className="clima1">Clima</dt>
                    <dt className="clima2">Tusday 06:40 AM</dt>
                    <dt className="clima3 text-capitalize">
                      {weatherData.description}
                    </dt>
                  </lu>
                </div>
                <div className="col-6">
                  <dt className="humity1">Humidity: {weatherData.humidity}%</dt>
                  <dt className="humity2">Wind: {weatherData.wind}km/h</dt>
                </div>
              </div>
              <div className="row section-temp">
                <div className="col-6 text-center">
                  <h1 className="numero-temp">
                    {Math.round(weatherData.temperature)}
                  </h1>
                </div>
                <div className="col-6 text-center">
                  <div className="row imagebig">
                    <img className="image" alt="#" src="#" />
                  </div>
                  <div className="row units">
                    <a href="#top" className="celcius">
                      °C{" "}
                    </a>{" "}
                    |
                    <a href="#top" className="farehneit">
                      °F
                    </a>
                  </div>
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

              <div className="col-4 columna2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "60ebef00aea70bb958b63d30fdbe5fcb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
