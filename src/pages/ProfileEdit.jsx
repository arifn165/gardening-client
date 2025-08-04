import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

const ProfileEdit = () => {
  const { user, auth } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!displayName.trim()) {
        setMessage({ type: "error", text: "Name cannot be empty" });
        setLoading(false);
        return;
      }

      await updateProfile(auth.currentUser, {
        displayName: displayName.trim(),
      });

      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Edit Profile</h2>

      {message && (
        <p
          className={`mb-4 px-4 py-2 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Your Name"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email (cannot change)
        </label>
        <input
          id="email"
          type="email"
          value={user?.email}
          readOnly
          className="w-full p-2 border rounded mb-4 bg-gray-100 cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
