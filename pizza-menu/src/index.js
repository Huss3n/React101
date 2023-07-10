import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// const currentTime = new Date().getHours();
const currentTime = 13;
const openTime = 12;
const closeTime = 22;
const isOpen = currentTime >= openTime && currentTime <= closeTime;

function Pizza(props) {
  if (props.soldOut) {
    return null;
  }
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <li>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </li>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>React Pizza Shop</h1>
    </header>
  );
};

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;
  console.log(numPizzas);

  if (!isOpen) {
    return <Closed />;
  }
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              photoName={pizza.photoName}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>
          We're are working on getting those delicious pizzas ready for you.{" "}
          <br />
          Please check back later :)
        </p>
      )}
    </main>
  );
}

function Footer() {
  return <footer className="footer">{isOpen && <Open />}</footer>;
}

function Closed() {
  return (
    <>
      <p className="footer">
        We're currently closed, but happy to welcome you from {openTime}:00
      </p>
    </>
  );
}
function Open() {
  return (
    <>
      <div className="order">
        <p>
          We're are open until {closeTime}:00. Come visit us or order online.!
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
