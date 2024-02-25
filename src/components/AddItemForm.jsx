import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleChange = (e) => {
    setItemText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={handleChange}
        autoFocus={true}
      />
      <Button text="Add to list" />
    </form>
  );
}

export default AddItemForm;
