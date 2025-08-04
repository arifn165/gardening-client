import React, { useState, useContext } from "react";
import { ResourceContext } from "../context/ResourceContext";

const AddResource = () => {
  const { addResource } = useContext(ResourceContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !quantity) return alert("Please fill all fields");
    addResource({ title, description, quantity: Number(quantity) });
    setTitle("");
    setDescription("");
    setQuantity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Add New Resource</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full mb-3 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full mb-3 p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        className="w-full mb-3 p-2 border rounded"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Resource
      </button>
    </form>
  );
};

export default AddResource;
