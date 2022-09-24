import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <MusicPlayerProvider>
    <App />
  </MusicPlayerProvider>
);
