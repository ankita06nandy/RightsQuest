import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuestCard({ quest, onContinue }) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onContinue) {
      onContinue();
    } else {
      navigate("/quest");
    }
  };

  const title = quest?.currentScenario?.title || quest?.title || "Inclusion & Accessibility";
  const description = quest?.currentScenario?.description || quest?.description || "Explore interactive rights scenarios.";

  return (
    <div className="p-5 border rounded-lg bg-white shadow-sm space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {quest?.difficulty || "Active"}
        </span>
        <span className="text-xs text-gray-500">{quest?.category || "Quest"}</span>
      </div>

      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>

      <button
        type="button"
        onClick={handleAction}
        className="w-full mt-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition cursor-pointer"
      >
        Start Interactive Quest
      </button>
    </div>
  );
}