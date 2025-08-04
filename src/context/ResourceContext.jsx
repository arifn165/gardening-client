import React, { createContext, useState } from "react";
import initialResources from "../data/resources";

export const ResourceContext = createContext();

export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState(initialResources);

  const addResource = (resource) => {
    setResources((prev) => [...prev, { ...resource, id: Date.now() }]);
  };

  const editResource = (id, updatedResource) => {
    setResources((prev) =>
      prev.map((res) => (res.id === id ? { ...res, ...updatedResource } : res))
    );
  };

  const deleteResource = (id) => {
    setResources((prev) => prev.filter((res) => res.id !== id));
  };

  return (
    <ResourceContext.Provider
      value={{ resources, addResource, editResource, deleteResource }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
