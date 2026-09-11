import React from 'react';
import { Calendar, Flame, ChevronRight } from 'lucide-react';

export default function Challenges({ challenges }) {
  return (
    <div className="bg-purple-50/50 border border-purple-200/70 rounded-3xl p-5 space-y-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold text-slate-800">Upcoming Challenges</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">View all</button>
      </div>

      <div className="space-y-3">
        {challenges.map((item) => (
          <div
            key={item.id}
            className="bg-white/90 border border-purple-100 rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                {item.id === 1 ? <Calendar className="w-5 h-5" /> : <Flame className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs">{item.title}</h4>
                <p className="text-[11px] text-slate-500">{item.description}</p>
                <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{item.timeframe}</span>
              </div>
            </div>
            <button className="p-1.5 hover:bg-purple-50 rounded-lg text-slate-400 hover:text-purple-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}