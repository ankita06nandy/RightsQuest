import React from 'react';
import { Home, BookOpen, BarChart2, Users, PlayCircle, Settings, User } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, user }) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'resource', label: 'Learn', icon: BookOpen },
    { id: 'progress', label: 'My progress', icon: BarChart2 },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'quest', label: 'Scenario', icon: PlayCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-purple-50/60 border-r border-purple-100 p-6 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">RightsQuest</h1>
          <span className="text-xl">💔</span>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-purple-100/80 text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:bg-purple-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-purple-700' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Status Widgets */}
      <div className="space-y-3">
        {/* XP Level Box */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-slate-800 text-sm">Level {user.level}</span>
            <span className="text-amber-500 text-xs font-bold">✨</span>
          </div>
          <p className="text-xs text-slate-500 font-medium mb-2">{user.xp}/{user.maxXp} XP</p>
          <div className="w-full bg-cyan-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-cyan-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(user.xp / user.maxXp) * 100}%` }}
            />
          </div>
        </div>

        {/* User Mini Profile */}
        <div className="bg-white/80 border border-purple-100 rounded-2xl p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">{user.name}</p>
              <button 
                onClick={() => setActivePage('profile')}
                className="text-xs text-slate-500 hover:text-purple-600 transition-colors"
              >
                View Profile &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}