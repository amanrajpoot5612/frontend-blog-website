import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BACKEND_URI } from "../../api";
import { AuthContext } from "../context/AuthContext";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);


    const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URI}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password , email , name}),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Register successful!");
        setUser(data.user)
        navigate("/");
      } else {
        alert(data.error || "❌ Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 px-4">
  <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-md w-full">
    <button
      onClick={() => window.location.href = '/'}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl font-bold"
      aria-label="Close"
    >
      ×
    </button>

    <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
      Create an Account ✨
    </h2>

    <form onSubmit={handleRegister} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
          Full Name
        </label>
        <input
          value={name}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
      >
        Register
      </button>
    </form>

    <p className="text-sm text-center mt-6 text-gray-600 dark:text-zinc-400">
      Already have an account?{" "}
      <Link to="/user/login" className="text-indigo-600 hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>

  );
};

export default Register;
