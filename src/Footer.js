import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        <small>
          This project was coded by Medine and is open-sourced on{" "}
          <a
            href="https://github.com/immdin/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://charming-chimera-d1f85b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </small>
      </p>
    </div>
  );
}
