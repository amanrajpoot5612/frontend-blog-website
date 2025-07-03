import { useState } from "react";
import { BACKEND_URI } from "../../api";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URI}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password})
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        // Save token to localStorage or context
        localStorage.setItem("token", data.token);
      } else {
        alert(data.error || "❌ Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 space-y-4">
      <input type="text" placeholder="email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />


      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default Login;
