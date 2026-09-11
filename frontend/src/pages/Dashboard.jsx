import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MissionBox from "../components/MissionBox";
import ProgressSummary from "../components/ProgressSummary";
import ModulesGrid from "../components/ModulesGrid";
import QuestCard from "../components/QuestCard";
import Challenges from "../components/Challenges";
import Recommendations from "../components/Recommendations";
import api from "../service/api";

export default function Dashboard({ 
  user: initialUser, 
  activeQuest: initialQuest, 
  modules: initialModules, 
  challenges: initialChallenges, 
  recommendations: initialRecommendations
}) {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    initialUser || {
      streak: 2,
      xp: 750,
      stats: {
        lessonsCompleted: 12,
        scenariosSolved: 8,
        badgesEarned: 4,
        communityPoints: 120,
      },
    }
  );

  const [activeQuest, setActiveQuest] = useState(
    initialQuest || {
      title: "Inclusion & Accessibility",
      currentScenario: {
        title: "Exam Accommodation",
        description: "Learn about adaptive testing rights for students with disabilities.",
      },
    }
  );

  const [modules, setModules] = useState(
    initialModules || [
      { id: 1, title: "Know Your Rights", progress: 75 },
      { id: 2, title: "Real-life Scenarios", progress: 60 },
      { id: 3, title: "Take Action", progress: 40 },
      { id: 4, title: "Community Stories", progress: 20 },
    ]
  );

  const [challenges, setChallenges] = useState(
    initialChallenges || [
      { id: 1, title: "Complete 3 Scenarios", target: 3, current: 2 },
      { id: 2, title: "Earn 100 XP", target: 100, current: 75 },
    ]
  );

  const [recommendations, setRecommendations] = useState(
    initialRecommendations || [
      "Denied Bus Access - Intermediate",
      "Exam Accommodation - Beginner",
      "Workplace Discrimination - Advanced",
      "Digital Inaccessibility - Intermediate",
    ]
  );

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    api
      .get(`/dashboard/${userId}`)
      .then((res) => {
        const data = res.data;
        if (data.user) setUser(data.user);
        if (data.activeQuest) setActiveQuest(data.activeQuest);
        if (data.modules && data.modules.length > 0) setModules(data.modules);
        if (data.challenges && data.challenges.length > 0) setChallenges(data.challenges);
        if (data.recommendations && data.recommendations.length > 0) setRecommendations(data.recommendations);
      })
      .catch((err) => console.error("Error loading dashboard data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Quick Navigation Bar */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
        <h1 className="font-bold text-xl text-indigo-900">RightsQuest</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded font-medium text-sm"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/quest")}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition"
          >
            Interactive Quests
          </button>
          <button
            onClick={() => navigate("/resource")}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition"
          >
            Resource Library
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              navigate("/login");
            }}
            className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded font-medium text-sm transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Left Main Column */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <MissionBox
            streak={user?.streak ?? 0}
            xp={user?.xp ?? 0}
            onStartScenario={() => navigate("/quest")} // Navigates to Quest Solver
          />

          <ProgressSummary stats={user?.stats ?? {}} />

          <ModulesGrid modules={modules} />

          <Recommendations
            recommendations={recommendations}
            onSelect={() => navigate("/quest")} // Navigates to Quest Solver
          />
        </div>

        {/* Right Sidebar Column */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <QuestCard
            quest={activeQuest}
            onContinue={() => navigate("/quest")} // Navigates to Quest Solver
          />

          <Challenges challenges={challenges} />
        </div>
      </div>
    </div>
  );
}