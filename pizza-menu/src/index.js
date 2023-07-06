import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Pizza() {
  return <h1>Hello pizza</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pizza />
  </React.StrictMode>
);
