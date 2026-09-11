import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // POST request to Express backend: /api/auth/login
      const response = await api.post("/auth/login", { email, password });
      const data = response.data;

      if (data.token && (data.user?.id || data.user?._id)) {
        // Store authentication token and user ID locally
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id || data.user._id);

        // Redirect user to the main dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed. Invalid response from server.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server connection failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login to RightsQuest</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mt-1 border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mt-1 border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}