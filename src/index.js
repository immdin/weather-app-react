import React from "react";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import App from "./App";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
