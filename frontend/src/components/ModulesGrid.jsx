import React from 'react';
import { BookOpen, Scale, Pointer, Users } from 'lucide-react';

export default function ModulesGrid({ modules }) {
  const iconMap = {
    BookOpen: BookOpen,
    Scale: Scale,
    Pointer: Pointer,
    Users: Users
  };

  const colorStyles = [
    { bg: 'bg-lime-50/50 border-lime-200', bar: 'bg-lime-500', iconBg: 'bg-sky-100 text-sky-600' },
    { bg: 'bg-amber-50/50 border-amber-200', bar: 'bg-amber-500', iconBg: 'bg-amber-100 text-amber-700' },
    { bg: 'bg-sky-50/50 border-sky-200', bar: 'bg-sky-400', iconBg: 'bg-rose-100 text-rose-600' },
    { bg: 'bg-stone-50/50 border-stone-200', bar: 'bg-stone-500', iconBg: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-800">Learning Modules</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">View all</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {modules.map((module, index) => {
          const IconComponent = iconMap[module.icon] || BookOpen;
          const style = colorStyles[index % colorStyles.length];

          return (
            <div
              key={module.id}
              className={`${style.bg} border rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className="space-y-3">
                <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{module.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">{module.description}</p>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/50">
                <span className="text-[10px] text-slate-500 font-medium">{module.progress}% Complete</span>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div
                    className={`${style.bar} h-1.5 rounded-full transition-all duration-500`}
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}