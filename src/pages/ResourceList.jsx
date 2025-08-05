import { useState } from "react";
import resourcesData from "../data/resources";
import ResourceAdd from "./ResourceAdd";

const ResourceList = () => {
  const [resources, setResources] = useState(resourcesData);

  const handleAdd = (newResource) => {
    setResources([newResource, ...resources]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setResources(resources.filter((res) => res.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-8 text-green-700 text-center">
        📚 Gardening Resources
      </h2>

      {/* Add Resource Form */}
      <ResourceAdd onAdd={handleAdd} />

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {resources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={res.photo}
              alt={res.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{res.title}</h3>
              <p className="text-green-600 font-medium mb-3 uppercase">
                {res.category}
              </p>
              <button
                onClick={() => handleDelete(res.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
