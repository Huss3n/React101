function Pizza({ name, photoName, ingredients, price, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <li>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </li>
    </div>
  );
}

export default Pizza;
