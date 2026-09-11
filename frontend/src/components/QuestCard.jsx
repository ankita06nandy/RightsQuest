import React from 'react';
import { UserCheck } from 'lucide-react';

export default function QuestCard({ quest, onContinue }) {
  return (
    <div className="bg-purple-50/50 border border-purple-200/70 rounded-3xl p-5 space-y-4 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 text-center">Continue Learning</h3>

      <div className="bg-white/80 border border-purple-100 rounded-2xl p-4 text-center space-y-3 shadow-xs">
        <div className="w-12 h-12 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
          <UserCheck className="w-6 h-6" />
        </div>

        <div>
          <span className="text-xs text-slate-400 font-medium block mb-1">
            Scenario {quest.currentScenario} of {quest.totalScenarios}
          </span>
          <h4 className="font-bold text-slate-800 text-base">{quest.title}</h4>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-slate-400 font-medium">
            <span>Progress</span>
            <span>{quest.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-purple-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${quest.progress}%` }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-purple-200 hover:bg-purple-300 text-purple-900 font-semibold py-2.5 rounded-xl text-sm transition-all shadow-sm"
      >
        Continue Scenario
      </button>
    </div>
  );
}