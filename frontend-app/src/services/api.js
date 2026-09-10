const API_BASE_URL = "http://localhost:5000/api";

export const getQuests = async () => {
  const response = await fetch(`${API_BASE_URL}/quests`);

  if (!response.ok) {
    throw new Error("Failed to fetch quests");
  }

  return response.json();
};

export const getRights = async () => {
  const response = await fetch(`${API_BASE_URL}/rights`);

  if (!response.ok) {
    throw new Error("Failed to fetch rights");
  }

  return response.json();
};

export const getResources = async () => {
  const response = await fetch(`${API_BASE_URL}/resources`);

  if (!response.ok) {
    throw new Error("Failed to fetch resources");
  }

  return response.json();
};

export const getProgress = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/progress/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch progress");
  }

  return response.json();
};
export const completeQuest = async (userId, questId, score) => {
  const response = await fetch(`${API_BASE_URL}/progress/complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      questId,
      score,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to complete quest");
  }

  return response.json();
};
const API_BASE_URL = "http://localhost:5000/api";

export const getDashboardData = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/dashboard/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return response.json();
};
