import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import "../src/styles/index.css";
import Quote from "../src/Quote";

ReactDOM.createRoot(document.getElementById("quote")!).render(
  <React.StrictMode>
    <Quote />
  </React.StrictMode>
);
