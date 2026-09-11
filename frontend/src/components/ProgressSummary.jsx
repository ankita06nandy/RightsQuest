import React from 'react';
import { Book, CheckCircle, Award, Trophy } from 'lucide-react';

export default function ProgressSummary({ stats }) {
  const items = [
    { label: 'Lessons completed', value: stats.lessonsCompleted, icon: Book, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Scenarios Solved', value: stats.scenariosSolved, icon: CheckCircle, color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Badges Earned', value: stats.badgesEarned, icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Community points', value: stats.communityPoints, icon: Trophy, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              index !== items.length - 1 ? 'border-r border-slate-100' : ''
            }`}
          >
            <div className={`p-2.5 rounded-xl ${item.bg}`}>
              <Icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-none mb-1">{item.value}</span>
              <span className="text-xs text-slate-500 font-medium block">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}