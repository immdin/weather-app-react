import React from "react"

import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round( props.data.temp.max);
        return `${temperature}°`;
    }

     function minTemperature() {
        let temperature = Math.round( props.data.temp.min);
        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days[day];
    }

    function forecastDate() {
        let data = new Date(props.data.dt * 1000);
        let forecastDay = data.getDay();
        let forecastMonth = data.getMonth() + 1;
        let forecastYear = data.getFullYear()

         if (forecastDay.toString().length < 2) {
            forecastDay = `0${forecastDay}`;
            }

        if (forecastMonth.toString().length < 2) {
              forecastMonth = `0${forecastMonth}`;
             }

        let forecastDate = `${forecastDay}.${forecastMonth}.${forecastYear}`; 
        return forecastDate;
    }

    return (
        <div className="container WeatherForecast">
            <div className="row g-2"> 
                <div className="col col-md-4">
                    <div className="weekDay">{day()}</div>
                    <div className="forecastDate">{forecastDate()}</div>
                 </div>
                 <div className="col col-md-4">
                    <div className="forecast-temperatures text-center">
                        <span className="temp-max">{ maxTemperature()}</span>
                        <br />
                            <span className="temp-min">{minTemperature()}</span>
                        </div>
                </div>
                <div className="col col-md-4">
                    <div className="ForecastIcon ">
                        <span className="clearfix icon-f text-center ">
                        <WeatherIcon
                        code={props.data.weather[0].icon}
                        alt={props.data.weather[0].description}
                        />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}