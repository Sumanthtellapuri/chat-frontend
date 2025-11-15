
# 🚀 AI Chat Interface – React + Node.js (Assignment Project)

A fully functional **ChatGPT-style conversational web app** built using:

* **React (Frontend)**
* **Node.js + Express (Backend)**
* **REST APIs**
* **Session-based chat routing**
* **Light/Dark theme**
* **Typing animation**
* **Structured table response**
* **Dynamic session creation**
* **Deployed backend on Render**

This project simulates how an AI chat UI works with session management, mock responses, and interactive UI components.

---

## ⭐ Features

### ✅ **1. ChatGPT-like UI**

* User and bot message bubbles
* Clean, minimal layout
* Auto scroll
* Typing indicator

### ✅ **2. Dynamic Sessions**

* Every new chat creates a new session ID
* View previous chats in a sidebar
* Session stored on backend mock server

### ✅ **3. Backend REST API**

Built using **Node + Express**, provides:

| Endpoint               | Description                      |
| ---------------------- | -------------------------------- |
| `GET /api/sessions`    | List all chat sessions           |
| `GET /api/new-chat`    | Creates new session              |
| `GET /api/session/:id` | Returns session history          |
| `POST /api/chat/:id`   | Returns mock AI response + table |

---

## 🎨 UI Enhancements

* Light / Dark mode
* Modern UI colors
* Smooth interactions
* Table responses rendered beautifully

---

## 📦 Tech Stack

### **Frontend**

* React (CRA)
* React Router
* CSS (custom UI)
* Fetch API
* Context API (Theme)

### **Backend**

* Node.js
* Express.js
* CORS
* Mock JSON data

### **Deployment**

* Backend hosted on **Render**
* Frontend runs locally or can be deployed on Vercel/Netlify

---

## 📁 Project Structure

```
chat-app-project
│
├── backend
│   ├── server.js
│   ├── mockData.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   │   ├── Sidebar.js
    │   │   ├── ChatWindow.js
    │   │   ├── TableResponse.js
    │   │   ├── ThemeToggle.js
    │   │   └── AnswerFeedback.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
```

---

## 🖥️ Running the Project Locally

### **1. Start Backend**

```
cd backend
npm install
node server.js
```

Backend runs on:
👉 **[http://localhost:5000](http://localhost:5000)**

### **2. Start Frontend**

```
cd frontend
npm install
npm start
```

Frontend runs on:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🌍 Backend Deployment (Render)

Live Backend URL:
👉 **[https://chat-backend-llfk.onrender.com](https://chat-backend-llfk.onrender.com)**

Replace all frontend fetch URLs with:

```
https://chat-backend-llfk.onrender.com/api/....
```

---

## 🧠 How It Works (Logic Summary)

1. Sidebar loads sessions using `/api/sessions`
2. "New Chat" → requests `/api/new-chat`
3. React Router opens `/chat/:sessionId`
4. Chat window loads old messages using `/api/session/:id`
5. When user sends a message:

   * Message added instantly to UI
   * "Typing..." animation starts
   * POST request sent
   * Bot response + table is rendered

---



## 📌 Future Improvements (Optional)

* Save chats in database
* JWT authentication
* WebSockets for live chat
* Rich message types (images, PDFs)

---

## 🏁 Conclusion

This project demonstrates:

* Full-stack development (React + Node)
* API integration
* UI/UX implementation
* State management
* Routing
* Deployment
* Clean coding practices

