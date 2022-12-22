import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="app-body ">
      <WeatherSearch city="Simferopol" />
    </div>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
