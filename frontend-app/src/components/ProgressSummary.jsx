// ProgressSummary.jsx
export default function ProgressSummary({ lessons, scenarios, badges, points }) {
  return (
    <div className="progress-summary">
      <p>{lessons} Lessons completed</p>
      <p>{scenarios} Scenarios solved</p>
      <p>{badges} Badges earned</p>
      <p>{points} Community points</p>
    </div>
  );
}
