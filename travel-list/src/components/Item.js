export default function Item({
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
