import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Keys", quantity: 2, packed: true },
// ];
export default function App() {
  const [item, setItem] = useState([]);

  function addItem(newItem) {
    setItem((item) => [...item, newItem]);
  }

  function handleDeleteItem(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        item={item}
        onDelete={handleDeleteItem}
        handlePacked={handlePackedItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>🏝️ Far Away and beyond 🧳</h1>
    </div>
  );
}

function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>What do you need for your trip 😍</h2>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        id="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

function PackingList({ item, onDelete, handlePacked }) {
  return (
    <div className="list">
      <ul>
        {item.map((itemData) => (
          <Item
            key={item.id}
            id={itemData.id}
            description={itemData.description}
            quantity={itemData.quantity}
            packed={itemData.packed}
            handleDeleteItem={onDelete}
            handlePackedItem={handlePacked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({
  id,
  description,
  quantity,
  packed,
  handleDeleteItem,
  handlePackedItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handlePackedItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}
