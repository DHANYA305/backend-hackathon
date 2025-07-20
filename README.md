# Client Dashboard Backend (SuPrathon 2K25 Project)

This is the backend server for the **Client Dashboard for IT Companies** project, developed for SuPrathon 2K25. It handles all event-related operations such as submission, approval, and status tracking by clients, admins, and providers.

## 🔗 Live Backend

🌐 [Render Live Link](https://backend-hackathon-dtqd.onrender.com/)  
_(Shows “Backend is running” when server is active)_

## 📁 Features

- POST new event requests (Clients & Providers)
- GET all event listings for Admin approval
- PATCH event status (approve/reject)
- DELETE all events (Admin cleanup)
- Auto-expiry logic (on frontend side) to hide past events

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON File Storage (data.json)
- Render (Deployment)

## 📁 Folder Structure
backend-hackathon/
├── server.js
├── data.json
├── package.json
├── package-lock.json
└── README.md

