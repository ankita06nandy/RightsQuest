// ModulesGrid.jsx
export default function ModulesGrid({ modules }) {
  return (
    <div className="modules-grid">
      {modules.map((m, i) => (
        <div key={i} className="module-card">
          <h5>{m.title}</h5>
          <p>{m.description}</p>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${m.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
