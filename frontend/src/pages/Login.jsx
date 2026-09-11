import React from 'react';

export default function Login() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800 text-center">Login to RightsQuest</h2>
      <input type="email" placeholder="Email" className="w-full border rounded-xl p-2.5 text-xs" />
      <input type="password" placeholder="Password" className="w-full border rounded-xl p-2.5 text-xs" />
      <button className="w-full bg-purple-600 text-white font-semibold py-2.5 rounded-xl text-xs">
        Sign In
      </button>
    </div>
  );
}