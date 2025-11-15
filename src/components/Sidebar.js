import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  }, []);

  const createChat = () => {
    fetch("http://localhost:5000/api/new-chat")
      .then((res) => res.json())
      .then((data) => navigate(`/chat/${data.sessionId}`));
  };

  return (
    <div className="sidebar">
      <button
        onClick={createChat}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "8px",
          background: "var(--bubble-user)",
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        + New Chat
      </button>

      <h3>Previous Chats</h3>

      <div style={{ marginTop: "10px" }}>
        {sessions.map((s) => (
          <button
            key={s.id}
            onClick={() => navigate(`/chat/${s.id}`)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "6px",
              background: "var(--bubble-bot)",
              color: "var(--text)",
              textAlign: "left",
              border: "none"
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "25px" }}>
        <ThemeToggle />
      </div>
    </div>
  );
}
