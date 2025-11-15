import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableResponse from "./TableResponse";

export default function ChatWindow() {
  const { sessionId } = useParams();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // 👈 NEW

  // Load conversation history
  useEffect(() => {
    fetch(`http://localhost:5000/api/session/${sessionId}`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.log("Error loading session:", err));
  }, [sessionId]);

  // Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user's message to UI instantly
    const userMsg = { sender: "user", text: input };
    setHistory((prev) => [...prev, userMsg]);
    setInput("");

    // Show typing animation
    setIsTyping(true);

    // Backend request
    fetch(`http://localhost:5000/api/chat/${sessionId}`, {
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

        // Add bot message to UI
        setHistory((prev) => [...prev, botMsg]);

        // Stop typing animation
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

      {/* Chat message list */}
      <div className="message-list">
        {history.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "msg-user" : "msg-bot"}
          >
            {msg.text}

            {/* If bot sent a table */}
            {msg.table && <TableResponse data={msg.table} />}
          </div>
        ))}

        {/* TYPING ANIMATION */}
        {isTyping && (
          <div className="msg-bot typing-bubble">
            <span>Assistant is typing</span>
            <div className="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
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
