import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="t-text">
          <span id="temperature">{Math.round(props.celsius)}° <a href="/" className="celcius active comm">
            C
          </a>
          <span className="divisor comm"> | </span>
          <a href="/" onClick={convertToFahrenheit} className="farengheit comm">
            F
            </a>
            </span>
        </p>
        <p className="text feels">Feels like {Math.round(props.feel)}°C</p>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    let feel_like = props.feel * 1.8 + 32;
    return (
      <div className="WeatherTemperature">
        <p className="t-text">
          <span id="temperature">{Math.round(fahrenheit)}° </span>

          <a href="/" onClick={convertToCelsius} className="celcius comm">
            C
          </a>
          <span className="divisor comm"> | </span>
          <a href="/" className="farengheit active comm">
            F
          </a>
        </p>
        <p className="text feels">Feels like {Math.round(feel_like)}°F</p>
      </div>
    );
  }
}
