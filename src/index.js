import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import SectionSearch from "./SectionSearch";
import City from "./City";
import Temperatura from "./Temperatura";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App-contenedor">
      <div className="container">
        <div className="row">
          <div className="col-8 columna1">
            <div className="row section-search">
              <SectionSearch />
            </div>
            <div className="row section-City">
              <City />
            </div>
            <div className="row section-Temp">
              <Temperatura />
            </div>
          </div>
          <div className="col-4 columna2"></div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
