import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gray-900 shadow-md border rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" type="email" placeholder="Email" className="w-full border border-amber-400 p-2 text-white" required />
        <input name="password" type="password" placeholder="Password" className="w-full border border-amber-400 p-2 text-white p-2" required />
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full bg-green-600 text-white py-2 rounded ">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="w-full mt-4 border py-2 rounded border-amber-400 p-2 text-white">
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
