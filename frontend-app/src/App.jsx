import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Quests from "./pages/Quests";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("quests")}>
          Quests
        </button>
      </nav>

      {page === "dashboard" && <Dashboard />}
      {page === "quests" && <Quests />}
    </div>
  );
}

export default App;