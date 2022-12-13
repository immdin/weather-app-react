import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import location from "./location-pin.svg";
import searching from "./magnifying-glass.svg";
import HumidityIcon from "./humidity.png";
import WindIcon from "./wind.png";
import PressureIcon from "./pressure.png";

export default function WeatherSearch() {
  const [city, setCity] = useState("Simferopol");
  const [loaded, setLoaded] = useState(true);
  const [weather, setWeather] = useState();

  function displayWeather(response) {
    setLoaded(true);
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].description;
    let feels = response.data.main.feels_like;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let pressure = response.data.main.pressure;
    let fahrengheit = showFahrenheit();
    let celcius = showCelcius();

    setWeather({
      temperature,
      description,
      icon,
      feels,
      humidity,
      wind,
      pressure,
      celcius,
      fahrengheit,
    });
    function showFahrenheit() {
      setWeather({ temperature } * 1.8 + 32);
      setWeather({ feels } * 1.8 + 32);
    }

    function showCelcius() {
      setWeather({ temperature });
      setWeather({ feels });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    let APIkey = "6c67fa383e767f87b00cfc48883a902d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="app-body form-container justify-content-center">
      <form onSubmit={handleSubmit} id="search-form" role="search">
        <input
          id="text-input"
          type="search"
          onChange={updateCity}
          placeholder="Enter a city "
          aria-label="Search"
          autoComplete="off"
        />
        <button
          className="search"
          onChange={updateCity}
          id="search-btn"
          type="submit"
        >
          <img className="icon" src={searching} alt="magnifying glass" />
        </button>
        <button className="local" type="submit">
          <img className="icon" src={location} alt="location pin" />
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="app-body">
        {form}
        <div className="main-container ">
          <h1 className="city" id="city-name">
            {" "}
            {city}
          </h1>
          <br />
          <p className="text">
            <small id="data">Thursday 12:07</small>
            <br />
            <small className="description" id="data ">
              {weather.description}
            </small>
          </p>

          <span className=" temperature">
            <p className="t-text">
              <span id="temperature">{Math.round(weather.temperature)}° </span>

              <a
                href="/"
                onChange={weather.celcius}
                className="celcius active comm"
              >
                C
              </a>
              <span className="divisor comm"> | </span>
              <a
                href="/"
                onChange={weather.fahrengheit}
                className="farengheit comm"
              >
                F
              </a>
            </p>

            <p
              className="text feels"
              onClick={(weather.celcius, weather.fahrengheit)}
            >
              Feels like {Math.round(weather.feels)}°
            </p>

            <img
              className="clearfix img-fluid text-center "
              src={weather.icon}
              alt={weather.description}
              id="icon"
            />

            <ul className="row parametres-container">
              <li className="col">
                <img
                  src={HumidityIcon}
                  id="parametres-icon"
                  alt="humidityicon"
                />
                <small className="text humidity">{weather.humidity}% </small>
              </li>
              <li className="col">
                <img src={WindIcon} id="parametres-icon" alt="windicon" />
                <small className="text wind"> {weather.wind}km/h </small>
              </li>
              <li className="col">
                <img src={PressureIcon} id="parametres-icon" alt="pressicon" />
                <small className="text pressure"> {weather.pressure}mmHg</small>
              </li>
            </ul>
          </span>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
