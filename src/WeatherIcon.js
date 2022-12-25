import React from "react";

import ClearDay from "./icons/clear-day.svg";
import ClearNight from "./icons/clear-night.svg";
import PartlyCloudyDay from "./icons/partly-cloudy-day.svg";
import PartlyCloudyNight from "./icons/partly-cloudy-night.svg";
import Cloudy from "./icons/cloudy.svg";
import Overcast from "./icons/overcast.svg";
import Rain from "./icons/rain.svg";
import PartlyCloudyDayRain from "./icons/partly-cloudy-day-rain.svg";
import PartlyCloudyNightRain from "./icons/partly-cloudy-night-rain.svg";
import Thunderstorms from "./icons/thunderstorms.svg";
import PartlyCloudyDaySnow from "./icons/partly-cloudy-day-snow.svg";
import PartlyCloudyNightSnow from "./icons/partly-cloudy-night-snow.svg";
import FogDay from "./icons/fog-day.svg";
import FogNight from "./icons/fog-night.svg";

export default function WeatherIcon(props) {
  const codeMaping = {
    "01d": ClearDay,
    "01n": ClearNight,
    "02d": PartlyCloudyDay,
    "02n": PartlyCloudyNight,
    "03d": Cloudy,
    "03n": Cloudy,
    "04d": Overcast,
    "04n": Overcast,
    "09d": Rain,
    "09n": Rain,
    "10d": PartlyCloudyDayRain,
    "10n": PartlyCloudyNightRain,
    "11d": Thunderstorms,
    "11n": Thunderstorms,
    "13d": PartlyCloudyDaySnow,
    "13n": PartlyCloudyNightSnow,
    "50d": FogDay,
    "50n": FogNight,
  };

  return (
    <img
      src={codeMaping[props.code]}
      alt={props.alt}
      className="img-fluid icon"
    />
  );
}
