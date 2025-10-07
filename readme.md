# ChatApp - Real-Time Messaging Platform

![ChatApp Banner](https://github.com/abhijit-01/chat-App/blob/main/assests/banner.png?raw=true)

## 🚀 Overview

ChatApp is a modern, real-time messaging platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Socket.io**.  
It allows users to communicate instantly in a secure environment, featuring user authentication, private chats, group chats, and online presence indicators.

---

## 🛠️ Tech Stack

- **Frontend:** React, Socket.io-client, Axios, React Router
- **Backend:** Node.js, Express.js, Socket.io, JWT Authentication
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** [Add your deployment platform]

---

## 📸 Features

- Secure **User Authentication** (registration and login with JWT)
- **Real-Time Messaging** via Socket.io
- **Private & Group Chats**
- **Online Presence** indicator for users
- **Message History**
- Fully **Responsive Design** for desktop and mobile

---

## 🔧 Installation

### Clone the repository

Run these commands to clone the repo:

```
git clone https://github.com/abhijit-01/chat-App.git
cd chat-App
Backend Setup
Navigate to the backend folder and install dependencies:


cd backend
npm install
Create a .env file in the backend folder with the following:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:



npm start
Frontend Setup
Navigate to the frontend folder and install dependencies:


Copy code
cd ../frontend
npm install
npm start
Open http://localhost:3000 to view the app.
```

## 🔐 Authentication Flow

User Registration: Users sign up with a username, email, and password.

User Login: Successful login generates a JWT token stored on the client for authenticated requests.

Token Verification: Protected routes validate the JWT on the backend to ensure security.

## ⚡ Real-Time Communication

Socket.io manages real-time messaging and online presence.

Users join rooms (private or group) to exchange messages instantly.

Key events: message, user-connected, user-disconnected.

## 🌐 Deployment

Backend: Deploy on Heroku, Render, or Railway. Make sure the MongoDB URI and JWT secret are set as environment variables.

Frontend: Deploy on Vercel or Netlify. Update the API base URL to point to your deployed backend.

## 📷 Screenshots


## 🤝 Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## 📧 Contact
Author: Abhijit Tripathy

LinkedIn: https://www.linkedin.com/in/abhijit-tripathy-183618257/
