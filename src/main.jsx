import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./Calculator";
import "./reset.css";
import "./fonts.css";
import "./index.css";
import "./fonts/fontawesome/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
