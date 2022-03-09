import App from "./App";
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div className="brand">
        <a href="https://twitter.com/tone_row_">
          Made by <span style={{ fontWeight: 600 }}>TONE ROW</span>
        </a>
      </div>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
