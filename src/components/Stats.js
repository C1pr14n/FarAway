const Stats = ({ items }) => {
  // This checks if there are no elements in the array so we can simply return a message if so instead of doing all the math
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </p>
    );

  // Derived State: where we calculate and render new data based on existing state
  const itemsNr = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacking = Math.floor((packedItems / itemsNr) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacking === 0
          ? "Start packing for your amazing trip 🌴"
          : percentagePacking !== 100
          ? `💼 You have ${itemsNr} items on your list, and you already packed
          ${packedItems} (${percentagePacking}%)`
          : "Everything is packed! You are ready to go! ✈️"}
      </em>
    </footer>
  );
};

export default Stats;
