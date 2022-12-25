import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
    });
  }

  function search() {
    let APIkey = "6c67fa383e767f87b00cfc48883a902d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
        <button className="search" id="search-btn" type="submit" value="Search">
          <span id="icon">
            <FaSearch />
          </span>
        </button>
        <button className="local" type="submit">
          <span id="icon">
            {" "}
            <FaMapMarkerAlt />
          </span>
        </button>
      </form>
    </div>
  );

  if (weather.ready) {
    return (
      <div className="app-body">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();

    return form;
  }
}
