// frontend/src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<div className="p-8 text-gray-300">Start a new chat or select existing session.</div>} />
            <Route path="/chat/:sessionId" element={<ChatWindow />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
