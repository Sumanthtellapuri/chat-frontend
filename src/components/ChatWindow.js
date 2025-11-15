import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableResponse from "./TableResponse";

export default function ChatWindow() {
  const { sessionId } = useParams();
  const [history, setHistory] = useState([]);   // must be an array
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const API = "https://chat-backend-llfk.onrender.com";

  // Load conversation history
  useEffect(() => {
    fetch(`${API}/api/session/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        // Backend returns: { history: [...] }
        setHistory(data.history || []);  
      })
      .catch((err) => console.log("Error loading session:", err));
  }, [sessionId]);

  // Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setHistory((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);

    // Send to backend
    fetch(`${API}/api/chat/${sessionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input })
    })
      .then((res) => res.json())
      .then((data) => {
        const botMsg = {
          sender: "bot",
          text: data.answer,
          table: data.table
        };

        setHistory((prev) => [...prev, botMsg]);
        setIsTyping(false);
      })
      .catch((err) => {
        console.log("Chat error:", err);
        setIsTyping(false);
      });
  };

  return (
    <div className="chat-area">
      <h2 style={{ marginBottom: "10px" }}>Conversation</h2>
      <p style={{ marginBottom: "20px" }}>Session: {sessionId}</p>

      <div className="message-list">
        {history.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "msg-user" : "msg-bot"}
          >
            {msg.text}

            {/* Bot table response */}
            {msg.table && <TableResponse data={msg.table} />}
          </div>
        ))}

        {/* Typing animation */}
        {isTyping && (
          <div className="msg-bot typing-bubble">
            <span>Assistant is typing</span>
            <div className="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>

      <div className="input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
