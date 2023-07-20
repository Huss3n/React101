export default function Stats({ item }) {
  if (item.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const totalItems = item.length;
  const totalPacked = item.filter((item) => item.packed).length;
  const percentagePacked = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      {percentagePacked === 100 ? (
        <p>You got everything! Ready to go ✈️ </p>
      ) : (
        <em>
          🧳 You have {totalItems} items on your list, and you already packed{" "}
          {""}
          {totalPacked} ({percentagePacked})%
        </em>
      )}
    </footer>
  );
}
