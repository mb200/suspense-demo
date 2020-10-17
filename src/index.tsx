import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { server } from "./api/server";
import { App } from "./App";
import "./index.scss";

server.start();

// Opt into Concurrent Mode (experimental) 🤘
ReactDOM.unstable_createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
