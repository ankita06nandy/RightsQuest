// Mock API service for fetching prototype data
export const fetchUserData = async () => {
  return {
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
  };
};

export const fetchModules = async () => {
  return [
    { id: 1, title: 'Know Your Rights', description: 'Learn about disability laws, rights and policies.', progress: 75, icon: 'BookOpen' },
    { id: 2, title: 'Real-life Scenarios', description: 'Explore situations and make informed choices.', progress: 60, icon: 'Scale' },
    { id: 3, title: 'Take Action', description: 'Learn how to advocate and take action.', progress: 40, icon: 'Pointer' },
    { id: 4, title: 'Community Stories', description: 'Read and share experiences from the community.', progress: 20, icon: 'Users' },
  ];
};