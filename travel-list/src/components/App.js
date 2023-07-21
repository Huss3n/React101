import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function clearList() {
    setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        item={item}
        onDelete={handleDeleteItem}
        handlePacked={handlePackedItem}
        clearList={clearList}
      />

      <Stats item={item} />
    </div>
  );
}
