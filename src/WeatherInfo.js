import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import FormattedDate from "./FormattedDate";
import HumidityIcon from "./icons/humidity.svg";
import WindIcon from "./icons/wind.svg";
import PressureIcon from "./icons/barometer.svg";

import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="main-container ">
      <h1 className="city" id="city-name">
        {" "}
        {props.data.city}
      </h1>
      <br />
      <p className="text">
        <small id="data">
          <FormattedDate date={props.data.date} />
        </small>
        <br />
        <small className="description" id="data ">
          {props.data.description}
        </small>
      </p>

      <div className=" temperature">
        <WeatherTemperature
          celsius={props.data.temperature}
          feel={props.data.feels}
        />
      </div>
      <div className="WeatherIcon ">
        <span className="clearfix text-center ">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </span>
      </div>
      <div className="parametres-container">
        <ul className="row ">
          <li className="col">
            <img src={HumidityIcon} id="parametres-icon" alt="humidityicon" />
            <small className="text humidity">{props.data.humidity}% </small>
          </li>
          <li className="col">
            <img src={WindIcon} id="parametres-icon" alt="windicon" />
            <small className="text wind"> {props.data.wind}km/h </small>
          </li>
          <li className="col">
            <img src={PressureIcon} id="parametres-icon" alt="pressicon" />
            <small className="text pressure"> {props.data.pressure}mmHg</small>
          </li>
        </ul>
      </div>
    </div>
  );
}
