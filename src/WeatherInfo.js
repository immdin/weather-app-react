import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import FormattedDate from "./FormattedDate";
import HumidityIcon from "./humidity.png";
import WindIcon from "./wind.png";
import PressureIcon from "./pressure.png";

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

      <span className=" temperature">
        <p className="t-text">
          <span id="temperature">{Math.round(props.data.temperature)}° </span>

          <a
            href="/"
            onChange={props.data.celcius}
            className="celcius active comm"
          >
            C
          </a>
          <span className="divisor comm"> | </span>
          <a
            href="/"
            onChange={props.data.fahrengheit}
            className="farengheit comm"
          >
            F
          </a>
        </p>

        <p
          className="text feels"
          onClick={(props.data.celcius, props.data.fahrengheit)}
        >
          Feels like {Math.round(props.data.feels)}°
        </p>

        <img
          className="clearfix img-fluid text-center "
          src={props.data.icon}
          alt={props.data.description}
          id="icon"
        />

        <ul className="row parametres-container">
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
      </span>
    </div>
  );
}