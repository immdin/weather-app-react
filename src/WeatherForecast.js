import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(function () {
    setLoaded(false);
  },[props.coordinates]
  )

  
   function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "6c67fa383e767f87b00cfc48883a902d";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showForecast);
  }

  
  if (loaded) {
    return (
      <div>
        
        {forecast.map(function(dailyForecast, index) {
          if (index>0 && index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} 
                 />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    load();
    
    return null;
   
    }

  
}
