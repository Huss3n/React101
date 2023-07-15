export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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

function Form() {
  return (
    <div className="add-form">
      <h2>What do you need for your trip 😍</h2>
      <select name="1" id="1"></select>
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </div>
  );
}

function PackingList() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "Keys", quantity: 2, packed: true },
  ];
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ id, description, quantity, packed }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
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
