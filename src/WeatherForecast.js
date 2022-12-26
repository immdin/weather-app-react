import React from "react";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="container WeatherForecast">
      <div className="row">
        <div className="col col-md-4">
          <div className="weekDay">Thursday</div>
          <div className="forecastDate">26.12.22</div>
        </div>
        <div className="col col-md-4">
          <div className="forecast-temperatures text-center">
            <span className="temp-max">15°</span>
            <br />
            <span className="temp-min">20°</span>
          </div>
        </div>
        <div className="col col-md-4">
          <div className="ForecastIcon ">
            <span className="clearfix icon-f text-center ">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
