import React, { useEffect, useState } from "react";
import api from "../service/api.js";

export default function Quest() {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submissionResults, setSubmissionResults] = useState({});

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const response = await api.get("/quests");
        const data = response.data;

        if (Array.isArray(data)) {
          setQuests(data);
        } else if (Array.isArray(data.quests)) {
          setQuests(data.quests);
        } else {
          setQuests([]);
        }
      } catch (err) {
        console.error("Error loading quests:", err);
        setError("Unable to load quests.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuests();
  }, []);

  const handleSelectOption = (questId, optionKey) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questId]: optionKey,
    }));
  };

  const handleSubmitQuest = async (quest) => {
    const userId = localStorage.getItem("userId");
    const chosenOption = selectedAnswers[quest._id];

    if (!userId) {
      alert("Please log in first to complete quests.");
      return;
    }

    if (!chosenOption) {
      alert("Please select an answer before submitting.");
      return;
    }

    const isCorrect = chosenOption === quest.correctAnswer;

    if (isCorrect) {
      try {
        await api.post("/progress/complete", {
          userId,
          questId: quest._id,
          score: quest.xp || 10,
        });

        setSubmissionResults((prev) => ({
          ...prev,
          [quest._id]: {
            success: true,
            message: `Correct answer! XP awarded.`,
            explanation: quest.explanation,
          },
        }));
      } catch (err) {
        setSubmissionResults((prev) => ({
          ...prev,
          [quest._id]: {
            success: false,
            message: err.response?.data?.message || "Quest already completed or server error.",
            explanation: quest.explanation,
          },
        }));
      }
    } else {
      setSubmissionResults((prev) => ({
        ...prev,
        [quest._id]: {
          success: false,
          message: "Incorrect option chosen. Review the explanation below:",
          explanation: quest.explanation,
        },
      }));
    }
  };

  if (loading) {
    return (
      <div className="quest-page p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Quests</h1>
        <p className="text-gray-500">Loading quests...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quest-page p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Quests</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="quest-page p-6 max-w-4xl mx-auto space-y-6">
      <div className="quest-header border-b pb-4">
        <h1 className="text-3xl font-bold">RightsQuest</h1>
        <p className="text-gray-600 mt-1">
          Complete quests, learn about your rights, and build your knowledge.
        </p>
      </div>

      {quests.length === 0 ? (
        <div className="empty-quests text-center py-10">
          <h2 className="text-xl font-semibold">No quests available</h2>
          <p className="text-gray-500">New quests will appear here soon.</p>
        </div>
      ) : (
        <div className="quest-grid space-y-6">
          {quests.map((quest, index) => {
            const questId = quest._id || index;
            const options = ["Option 1", "Option 2", "Option 3", "Option 4"].filter(
              (optKey) => quest[optKey]
            );

            return (
              <div
                className="quest-card border rounded-lg p-5 bg-white shadow-sm space-y-3"
                key={questId}
              >
                <div className="flex justify-between items-center">
                  <span className="quest-difficulty bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {quest.difficulty || "Easy"} ({quest.xp || 10} XP)
                  </span>
                  <span className="text-xs text-gray-500">{quest.category}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  {quest.title || "Untitled Quest"}
                </h2>

                <p className="text-gray-700 text-sm">
                  {quest.scenario || quest.description || "No scenario available."}
                </p>

                <div className="options-list space-y-2 pt-2">
                  {options.map((optKey) => (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => handleSelectOption(questId, optKey)}
                      className={`w-full text-left p-3 rounded border text-sm transition-all ${
                        selectedAnswers[questId] === optKey
                          ? "border-blue-500 bg-blue-50 font-medium text-blue-900"
                          : "border-gray-200 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {quest[optKey]}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => handleSubmitQuest(quest)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded text-sm transition"
                  >
                    Submit Answer
                  </button>

                  {quest.relatedRight && (
                    <span className="text-xs text-gray-500 max-w-xs text-right">
                      <strong>Law:</strong> {quest.relatedRight}
                    </span>
                  )}
                </div>

                {submissionResults[questId] && (
                  <div
                    className={`mt-4 p-3 rounded text-sm ${
                      submissionResults[questId].success
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="font-bold">{submissionResults[questId].message}</p>
                    {submissionResults[questId].explanation && (
                      <p className="mt-1 text-xs opacity-90">
                        <strong>Explanation:</strong> {submissionResults[questId].explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}