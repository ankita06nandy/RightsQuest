import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../service/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Server connection failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800 text-center">Login to RightsQuest</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl p-2.5 text-xs" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl p-2.5 text-xs" 
          required 
        />
        <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-2.5 text-xs rounded-xl">
          Sign In
        </button>
      </form>
    </div>
  );
}