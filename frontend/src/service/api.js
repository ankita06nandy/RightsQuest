import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Your Node.js backend URL
});

// Attach JWT token automatically to requests if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;


