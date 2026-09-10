
import { useEffect, useState } from "react";
import { getQuests } from "../services/api";

function Quests() {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentQuest, setCurrentQuest] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const loadQuests = async () => {
      try {
        const data = await getQuests();
        setQuests(data);
      } catch (err) {
        setError("Unable to load quests.");
      } finally {
        setLoading(false);
      }
    };

    loadQuests();
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setAnswered(true);
  };

  const nextQuest = () => {
    setCurrentQuest((prev) => prev + 1);
    setSelectedOption(null);
    setAnswered(false);
  };

  if (loading) {
    return <p>Loading quests...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (quests.length === 0) {
    return <p>No quests available.</p>;
  }

  if (currentQuest >= quests.length) {
    return (
      <div>
        <h1>🎉 All Quests Completed!</h1>
        <p>Great job completing the RightsQuest challenges.</p>
      </div>
    );
  }

  const quest = quests[currentQuest];

  return (
    <div className="quests-page">
      <h1>RightsQuest</h1>

      <p>
        Quest {currentQuest + 1} of {quests.length}
      </p>

      <h2>{quest.title}</h2>

      <p>{quest.scenario}</p>

      <p>
        <strong>Category:</strong> {quest.category}
      </p>

      <p>
        <strong>Difficulty:</strong> {quest.difficulty}
      </p>

      <div>
        {quest.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={answered}
          >
            {option.text}
          </button>
        ))}
      </div>

      {answered && (
        <div>
          {selectedOption.isCorrect ? (
            <h3>✅ Correct!</h3>
          ) : (
            <h3>❌ Not quite.</h3>
          )}

          <p>{quest.explanation}</p>

          <p>
            <strong>XP:</strong> +{quest.xp}
          </p>

          {currentQuest < quests.length - 1 && (
            <button onClick={nextQuest}>Next Quest →</button>
          )}

          {currentQuest === quests.length - 1 && (
            <button onClick={nextQuest}>Finish →</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quests;