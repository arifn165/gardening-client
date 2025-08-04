import React, { useContext } from "react";
import { ResourceContext } from "../context/ResourceContext";

const ResourceList = () => {
  const { resources, deleteResource } = useContext(ResourceContext);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      {resources.length === 0 ? (
        <p>No resources available.</p>
      ) : (
        <ul>
          {resources.map((res) => (
            <li
              key={res.id}
              className="border p-3 mb-3 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{res.title}</h3>
                <p>{res.description}</p>
                <small>Quantity: {res.quantity}</small>
              </div>
              <button
                onClick={() => deleteResource(res.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResourceList;
