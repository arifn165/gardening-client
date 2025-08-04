import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Display Name"
          className="w-full p-2 border"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL"
          className="w-full p-2 border"
        />
        <button type="submit" className="w-full bg-green-600 py-2 rounded">Update Profile</button>
      </form>
      {message && <p className="text-center mt-2 text-yellow-300">{message}</p>}
    </div>
  );
};

export default Profile;
