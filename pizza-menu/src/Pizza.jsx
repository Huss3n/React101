function Pizza({ name, photoName, ingredients, price, soldOut }) {
  if (soldOut) {
    return null;
  }
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <li>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </li>
    </div>
  );
}

export default Pizza;
