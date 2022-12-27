import React, {useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
 

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  if (loaded) {
    return (
            <WeatherForecastDay data={forecast[0] } />
         );
    
  } else {
    let apiKey = "6c67fa383e767f87b00cfc48883a902d";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showForecast);
    
    return null;
   
    }

  
}
