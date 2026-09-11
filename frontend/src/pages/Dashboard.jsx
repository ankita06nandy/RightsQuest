import React from 'react';
import MissionBox from '../components/MissionBox';
import ProgressSummary from '../components/ProgressSummary';
import ModulesGrid from '../components/ModulesGrid';
import QuestCard from '../components/QuestCard';
import Challenges from '../components/Challenges';
import Recommendations from '../components/Recommendations';

export default function Dashboard({ user, activeQuest, modules, challenges, recommendations, onTriggerToast }) {
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
      {/* Left Main Dashboard Column */}
      <div className="col-span-8 space-y-6">
        <MissionBox
          streak={user.streak}
          xp={user.xp}
          onStartScenario={() => onTriggerToast('Starting new scenario: Inclusion & Accessibility')}
        />
        <ProgressSummary stats={user.stats} />
        <ModulesGrid modules={modules} />
        <Recommendations
          recommendations={recommendations}
          onSelect={(title) => onTriggerToast(`Loaded scenario: ${title}`)}
        />
      </div>

      {/* Right Sidebar Widget Column */}
      <div className="col-span-4 space-y-6">
        <QuestCard
          quest={activeQuest}
          onContinue={() => onTriggerToast(`Resuming: ${activeQuest.title}`)}
        />
        <Challenges challenges={challenges} />
      </div>
    </div>
  );
}