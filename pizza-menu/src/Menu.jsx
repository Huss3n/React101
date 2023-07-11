import pizzaData from "./pizzaData";
import Closed from "./Components/Closed";
import Pizza from "./Pizza";
import Footer from "./Components/Footer";

function Menu() {
  const currentTime = 12;
  const openTime = 12;
  const closeTime = 22;
  const isOpen = currentTime >= openTime && currentTime <= closeTime;

  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;
  //   console.log(numPizzas);

  if (!isOpen) {
    return <Closed openTime={openTime} />;
  }
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian Cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
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
          </>
        ) : (
          <p>
            We're are working on getting those delicious pizzas ready for you.{" "}
            <br />
            Please check back later :) for the delicious pizzas ready for you
          </p>
        )}
      </main>
      <Footer openTime={openTime} closeTime={closeTime} />
    </>
  );
}

export default Menu;
