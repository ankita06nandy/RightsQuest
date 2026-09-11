import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Quest from './pages/Quest';
import Resource from './pages/Resource';
import Rights from './pages/Rights';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState(null);

  const [user] = useState({
    name: 'User',
    level: 4,
    xp: 750,
    maxXp: 1000,
    streak: 2,
    stats: {
      lessonsCompleted: 12,
      scenariosSolved: 8,
      badgesEarned: 4,
      communityPoints: 120,
    },
  });

  const activeQuest = {
    title: 'Inaccessible Classroom',
    currentScenario: 3,
    totalScenarios: 12,
    progress: 60,
  };

  const modules = [
    { id: 1, title: 'Know Your Rights', description: 'Learn about disability laws, rights and policies.', progress: 75, icon: 'BookOpen' },
    { id: 2, title: 'Real-life Scenarios', description: 'Explore situations and make informed choices.', progress: 60, icon: 'Scale' },
    { id: 3, title: 'Take Action', description: 'Learn how to advocate and take action.', progress: 40, icon: 'Pointer' },
    { id: 4, title: 'Community Stories', description: 'Read and share experiences from the community.', progress: 20, icon: 'Users' },
  ];

  const challenges = [
    { id: 1, title: 'Weekly Challenge', description: 'Complete 3 Scenarios', timeframe: '2 Days left' },
    { id: 2, title: 'Streak Goal', description: 'Maintain a 7-day streak', timeframe: '5/7 Days' },
  ];

  const recommendations = [
    { id: 1, title: 'Denied Bus Access', level: 'Intermediate' },
    { id: 2, title: 'Exam Accommodation', level: 'Beginner' },
    { id: 3, title: 'Workplace Discrimination', level: 'Advanced' },
    { id: 4, title: 'Digital Inaccessibility', level: 'Intermediate' },
  ];

  const triggerToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 antialiased overflow-hidden">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-lg border border-slate-700 transition-all">
          {toastMessage}
        </div>
      )}

      {/* Sidebar Nav */}
      <Navbar activePage={activePage} setActivePage={setActivePage} user={user} />

      {/* Dynamic Viewport */}
      <main className="flex-1 overflow-y-auto p-8">
        {activePage === 'dashboard' && (
          <Dashboard
            user={user}
            activeQuest={activeQuest}
            modules={modules}
            challenges={challenges}
            recommendations={recommendations}
            onTriggerToast={triggerToast}
          />
        )}
        {activePage === 'quest' && <Quest />}
        {activePage === 'resource' && <Resource />}
        {activePage === 'progress' && <Rights />}
        {activePage === 'profile' && <ProfileCard user={user} />}
      </main>
    </div>
  );
}