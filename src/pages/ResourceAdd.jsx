import { useState } from "react";

const ResourceAdd = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !photo) {
      alert("All fields are required");
      return;
    }

    const newResource = {
      id: Date.now(),
      title,
      category,
      photo,
    };

    onAdd(newResource);

    setTitle("");
    setCategory("");
    setPhoto("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-6">Add New Resource</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-3 border border-gray-300 rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="w-full p-3 border border-gray-300 rounded mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="url"
        placeholder="Photo URL"
        className="w-full p-3 border border-gray-300 rounded mb-4"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Add Resource
      </button>
    </form>
  );
};

export default ResourceAdd;
