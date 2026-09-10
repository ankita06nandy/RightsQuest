// Recommendations.jsx
export default function Recommendations({ topics }) {
  return (
    <div className="recommendations">
      <h4>Recommended For You</h4>
      {topics.map((t, i) => (
        <div key={i} className="recommend-card">{t}</div>
      ))}
    </div>
  );
}