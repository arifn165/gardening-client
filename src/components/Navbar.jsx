import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout successful");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gardening-tips">Gardening Tips</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      {user && (
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      )}
    </>
  );

  return (
  <div className="navbar bg-green-700 text-white px-4 py-2 flex items-center justify-between">
    <div className="flex-1">
      <Link to="/" className="text-2xl font-bold">🌿 Gardening Hub</Link>
    </div>

    <div className="flex-1">
      <ul className="menu menu-horizontal px-1 gap-4 justify-center hidden md:flex">
        {navLinks}
      </ul>
    </div>

    <div className="flex-1 flex justify-end items-center gap-3">
      {user ? (
        <>
      <span className="hidden md:inline font-semibold">{user.displayName}</span>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">Login</Link>
          <Link to="/register" className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded">Register</Link>
        </>
      )}
    </div>
  </div>
);


};

export default Navbar;
