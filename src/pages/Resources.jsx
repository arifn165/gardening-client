import React from "react";
import ResourceList from "../components/ResourceList";
import AddResource from "../components/AddResource";

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700">🌿 Resources</h1>
      <AddResource />
      <ResourceList />
    </div>
  );
};

export default Resources;
