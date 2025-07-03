import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BACKEND_URI } from "../../api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URI}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password}),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        // Save token to localStorage or context
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 px-4">
  <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-md w-full">
    <button
      onClick={() => window.location.href = '/'}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl font-bold"
      aria-label="Close"
    >
      ×
    </button>

    <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
      Welcome Back 👋
    </h2>

    <form className="space-y-5" onSubmit={handleLogin} >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required  value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required  value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
      >
        Sign In
      </button>
    </form>

    <p className="text-sm text-center mt-6 text-gray-600 dark:text-zinc-400">
      Don’t have an account?{" "}
      <Link to="/user/register" className="text-blue-600 hover:underline">
        Register
      </Link>
    </p>
  </div>
</div>

  );
};

export default Login;
