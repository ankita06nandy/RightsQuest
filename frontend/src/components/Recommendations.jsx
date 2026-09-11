import React from 'react';

export default function Recommendations({ recommendations, onSelect }) {
  const getBadgeStyle = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-emerald-600 bg-emerald-50';
      case 'Intermediate':
        return 'text-slate-600 bg-slate-50';
      case 'Advanced':
        return 'text-rose-600 bg-rose-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-slate-700 text-center">Recommend For You</h3>
      
      <div className="grid grid-cols-4 gap-2 border border-slate-200 rounded-xl bg-white p-1 shadow-sm">
        {recommendations.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.title)}
            className="p-3 text-center border-r last:border-r-0 border-slate-100 hover:bg-purple-50/50 rounded-lg transition-colors group"
          >
            <p className="font-semibold text-slate-800 text-xs mb-1 group-hover:text-purple-900">
              {item.title}
            </p>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${getBadgeStyle(item.level)}`}>
              {item.level}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}