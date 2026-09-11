import React from 'react';
import { Flame, Sun, Scale, Shield, Users } from 'lucide-react';

export default function MissionBox({ streak, xp, onStartScenario }) {
  return (
    <div className="space-y-4">
      {/* Top Banner Stats */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome back ,</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-slate-900">User !</span>
            <span className="text-xl">👏</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Keep learning, keep empowering.</p>
        </div>

        {/* Streak & XP Counters */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-orange-500 fill-orange-500" />
            <div>
              <span className="text-lg font-bold text-slate-800 leading-none block">{streak}</span>
              <span className="text-xs text-slate-500 font-medium">Day Streak</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-amber-500 fill-amber-400" />
            <div>
              <span className="text-lg font-bold text-slate-800 leading-none block">{xp}</span>
              <span className="text-xs text-slate-500 font-medium">Total XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mission Card */}
      <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 border border-sky-100 rounded-3xl p-6 relative overflow-hidden shadow-sm">
        <div className="max-w-xs space-y-3">
          <span className="text-xs text-slate-500 font-medium">Today's Mission</span>
          <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
            Understand. Decide. Act.
          </h3>
          <p className="text-xs text-slate-500">Small steps today, bigger impact tomorrow.</p>
          <button
            onClick={onStartScenario}
            className="mt-2 bg-slate-200/80 hover:bg-slate-300 text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 border border-slate-300/50 transition-all shadow-sm"
          >
            Start New Scenario <span className="font-serif text-sm">∑</span>
          </button>
        </div>

        {/* Decorative Vector Graphic Icons */}
        <div className="absolute right-6 bottom-4 flex items-end gap-3 opacity-90 pointer-events-none">
          <div className="p-3 bg-cyan-100/80 rounded-2xl border border-cyan-200/50 shadow-sm">
            <Users className="w-10 h-10 text-cyan-700" />
          </div>
          <div className="p-3 bg-amber-100/80 rounded-2xl border border-amber-200/50 shadow-sm">
            <Scale className="w-12 h-12 text-amber-700" />
          </div>
          <div className="p-3 bg-purple-100/80 rounded-2xl border border-purple-200/50 shadow-sm">
            <Shield className="w-10 h-10 text-purple-700" />
          </div>
        </div>
      </div>
    </div>
  );
}