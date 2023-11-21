import React from "react";

import CurrentTemperature from "./CurrentTemperature";
import Conditions from "./Conditions";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <form id="search-form">
          <input
            type="searchs"
            placeholder="🔍Change City..."
            className="form-control"
            id="search"
            required
          />
          <input type="submit" value="search" class="search-button" />
        </form>
        <br />
        <div className="button">
          <button type="button" className="btn btn-info">
            Current Location
          </button>
        </div>
        <div>
          <h1 className="current-city" id="city">
            Bulawayo
            
          </h1>
        </div>
        <CurrentTemperature />
        <br />
        <Conditions />
        <br />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
