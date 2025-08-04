import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const ConfirmPassword = form.ConfirmPassword.value;
      if (password !== ConfirmPassword) {
    setError("Passwords do not match!");
    return;
  }
    createUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md border rounded-xl bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="user" type="text" placeholder="User Name :" className="w-full border border-amber-400 text-white p-2" required />
        <input name="email" type="email" placeholder="Email" className="w-full border border-amber-400 text-white p-2" required />
        <input name="password" type="password" placeholder="Password" className="w-full border border-amber-400 text-white p-2" required />
        <input name="ConfirmPassword" type="Password" placeholder="Confirm Password" className="w-full border border-amber-400 text-white p-2 " required />
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
