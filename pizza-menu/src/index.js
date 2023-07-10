import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Menu from "./Menu";
import "./pizzaData";
import "./index.css";

// // const currentTime = new Date().getHours();
// const currentTime = 13;
// const openTime = 12;
// const closeTime = 22;
// const isOpen = currentTime >= openTime && currentTime <= closeTime;

function App() {
  return (
    <div className="container">
      <Header /> 
      <Menu />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
