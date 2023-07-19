import { useState } from "react";

const Form = ({ onAddItems }) => {
  // We gonna use the 'Controlled Elements' Technique to control the data that comes from user:
  // 1st: we create a piece of state
  // 2nd we use that piece of state on the element that we want React to control: input in our case setting value={description}
  // 3rd use the setDescription on the onChange method on the input el we selected React to control and set it to e.target.value just like in vanilla JS
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem); // Lifting State Up through this function to the parent component (App) so we can send data from this component to a parent component

    setDescription("");
    setQuantity(1);
  };

  return (
    // we listen to the Submit Event on the form instead of the onClick on the button bcuz we want the 'enter' key to also work
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
