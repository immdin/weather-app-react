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
    return (
        <div className="container WeatherForecast">
            <div className="row g-2"> 
                
                <div className="col col-md-4">
                    <div className="weekDay">{day()}</div>

                 </div>
                 <div className="col col-md-4">
                    <div className="forecast-temperatures text-center">
                        <span className="temp-max">{maxTemperature()} °{props.unit}</span>
                        <br />
                        <span className="temp-min">{minTemperature()} °{props.unit}</span>
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