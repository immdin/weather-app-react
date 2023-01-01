import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let localTime = props.date.getTime();
  
  let localOffset = props.date.getTimezoneOffset() * 60000;
  let currentUtcTime = localOffset + localTime;
  let cityOffset = currentUtcTime ;
  let cityTime = new Date(cityOffset).toTimeString().split(' ');
  let time = cityTime[0] 

  
  return (
    <div>
      {day} {time}
    </div>
  );
}
