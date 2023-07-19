import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice() // we slice to not mutate original array
      .sort((a, b) => a.description.localeCompare(b.description)); // we compare using localCompare + the sort method we the recipe we already know
  // (a, b) are 2 objects of the array we are comparing
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed)); // we are converting the boolean value of 'packed' property to a Number so we can compare it

  return (
    <div className="list">
      <ul>
        {/* Before we applied the map method on simply 'items', but now we do it on the sortedItems i order to render the selected options in the sorting menu*/}
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {items.length !== 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button onClick={onClearList}>Clear List</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PackingList;
