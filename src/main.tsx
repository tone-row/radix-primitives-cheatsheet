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
        <a
          className="github-button"
          href="https://github.com/tone-row/radix-primitives-cheatsheet"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star tone-row/radix-primitives-cheatsheet on GitHub"
        >
          Star
        </a>
      </div>
      <App />
      <script async defer src="https://buttons.github.io/buttons.js" />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
