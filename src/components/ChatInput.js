// frontend/src/components/ChatInput.js
import React, { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        rows={1}
        placeholder="Type your message..."
        className="flex-1 resize-none p-3 bg-gray-800 text-gray-100 rounded-md border border-gray-700 focus:outline-none"
      />
      <button
        onClick={submit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
