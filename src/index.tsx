import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

// Opt into Concurrent Mode (experimental) 🤘
ReactDOM.unstable_createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
