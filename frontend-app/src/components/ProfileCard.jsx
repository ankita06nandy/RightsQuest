// ProfileCard.jsx
export default function ProfileCard({ level, xp, totalXp }) {
  return (
    <div className="profile-card">
      <h3>Level {level}</h3>
      <p>{xp}/{totalXp} XP</p>
      <button>View Profile</button>
    </div>
  );
}
