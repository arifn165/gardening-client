import React from "react";
import gardeningTips from "../data/gardeningTips";

const GardeningTips = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700">🌱 Gardening Tips</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {gardeningTips.map((tip) => (
          <div key={tip.id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
            <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-3">{tip.title}</h2>
            <p className="mt-2 text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardeningTips;
