import React from 'react';
import { User, Award, ShieldCheck, Mail } from 'lucide-react';

export default function ProfileCard({ user }) {
  return (
    <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center text-purple-700">
          <User className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
          <p className="text-xs text-slate-400">Student Advocate</p>
        </div>
      </div>

      <div className="space-y-2 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between text-xs py-1">
          <span className="text-slate-500">Current Level</span>
          <span className="font-bold text-slate-800">Level {user.level}</span>
        </div>
        <div className="flex items-center justify-between text-xs py-1">
          <span className="text-slate-500">Total Experience</span>
          <span className="font-bold text-slate-800">{user.xp} XP</span>
        </div>
        <div className="flex items-center justify-between text-xs py-1">
          <span className="text-slate-500">Active Streak</span>
          <span className="font-bold text-orange-500">{user.streak} Days</span>
        </div>
      </div>
    </div>
  );
}