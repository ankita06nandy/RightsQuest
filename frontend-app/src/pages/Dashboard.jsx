import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import MissionBox from "../components/MissionBox";
import ProgressSummary from "../components/ProgressSummary";
import ModulesGrid from "../components/ModulesGrid";
import Challenges from "../components/Challenges";
import Recommendations from "../components/Recommendations";

import "../styles/dashboard.css";

export default function Dashboard() {
  // Example dummy data (replace with API later)
  const userData = {
    level: 4,
    xp: 750,
    totalXp: 1000,
    lessons: 12,
    scenarios: 8,
    badges: 4,
    points: 120,
    modules: [
      { title: "Know Your Rights", description: "Learn about disability laws, rights, and policies", progress: 100 },
      { title: "Real-life Scenarios", description: "Explore obstacles and find solutions", progress: 80 },
      { title: "Take Action", description: "Learn how to advocate and make informed choices", progress: 40 },
      { title: "Community Stories", description: "Read stories from others and share experiences", progress: 20 },
    ],
    recommendations: [
      "Denied Bus Access (Intermediate)",
      "Exam Accommodation (Beginner)",
      "Workplace Discrimination (Advanced)",
      "Digital Inaccessibility (Intermediate)"
    ]
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <ProfileCard level={userData.level} xp={userData.xp} totalXp={userData.totalXp} />
        <MissionBox />
        <ProgressSummary
          lessons={userData.lessons}
          scenarios={userData.scenarios}
          badges={userData.badges}
          points={userData.points}
        />
        <ModulesGrid modules={userData.modules} />
        <Challenges />
        <Recommendations topics={userData.recommendations} />
      </div>
    </div>
  );
}
