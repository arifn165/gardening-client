import { useState } from "react";
import gardeningTips from "../data/gardeningTips";

const GardeningTips = () => {
  const [searchText, setSearchText] = useState("");

  const filteredTips = gardeningTips.filter((tip) =>
    tip.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-8 text-green-700 text-center">
        🌿 Gardening Tips
      </h2>

      <input
        type="text"
        placeholder="Search tips..."
        className="w-full p-3 mb-10 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredTips.length === 0 && (
        <p className="text-center text-red-500 text-lg">
          No tips found for "{searchText}"
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={tip.photo}
              alt={tip.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-green-600 font-medium mb-4 uppercase tracking-wide">
                {tip.category}
              </p>
              <p className="text-gray-700">
                {/* যদি চাইলে এখানে টিপসের ডিটেইলস বা ডেসক্রিপশন দিতে পারো */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardeningTips;
