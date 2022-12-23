import React from "react";

export default function WeatherIcon(props) {
  const codeMaping = {
    "01d": "./icons/clear-day.svg",
    "01n": "./icons/clear-night.svg",
    "02d": "./icons/partly-cloudy-day.svg",
    "02n": "./icons/partly-cloudy-night.svg",
    "03d": "./icons/cloudy.svg",
    "03n": "./icons/cloudy.svg",
    "04d": "./icons/overcast.svg",
    "04n": "./icons/overcast.svg",
    "09d": "./icons/rain.svg",
    "09n": "./icons/rain.svg",
    "10d": "./icons/partly-cloudy-day-rain.svg",
    "10n": "./icons/partly-cloudy-night-rain.svg",
    "11d": "./icons/thunderstorms.svg",
    "11n": "./icons/thunderstorms.svg",
    "13d": "./icons/partly-cloudy-day-snow.svg",
    "13n": "./icons/partly-cloudy-day-snow.svg",
    "50d": "./icons/fog-day.svg",
    "50n": "./icons/fog-night.svg",
  };

  return (
    <img src={codeMaping[props.code]} alt={props.alt} className="img-fluid " />
  );
}
