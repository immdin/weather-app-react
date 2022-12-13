import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        <small>
          This project was coded by Medine and is open-sourced on{" "}
          <a
            href="https://github.com/immdin/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://main--imaginative-crumble-ad7424.netlify.app/"
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
