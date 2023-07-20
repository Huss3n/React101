import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDelete,
  handlePacked,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = item;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul key={item.id}>
        {sortedItems.map((itemData) => (
          <Item
            id={itemData.id}
            description={itemData.description}
            quantity={itemData.quantity}
            packed={itemData.packed}
            handleDeleteItem={onDelete}
            handlePackedItem={handlePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
