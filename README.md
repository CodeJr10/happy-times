# Happy Times - A Real-Time Chat Application

Welcome to **Happy Times**, a modern, real-time chat application that lets you connect with your friends and enjoy smooth communication. Built with the latest web technologies and a focus on simplicity, responsiveness, and scalability.

---

## 🌟 Tech Stack

- **MERN Stack**: MongoDB, Express.js, React, Node.js
- **Socket.io**: Real-time bi-directional communication
- **TailwindCSS**: Utility-first CSS framework for custom UI styling
- **Daisy UI**: Component library built on top of TailwindCSS for easy-to-use UI elements
- **Zustand**: A small, fast, and scalable state management solution

---

## 🎉 Features

- **Authentication & Authorization with JWT**  
  Secure login and registration system with JSON Web Tokens for user authentication.

- **Real-time Messaging with Socket.io**  
  Experience instant communication with real-time message updates.

- **Online User Status**  
  Stay updated with who is online and available for chatting.

- **Global State Management with Zustand**  
  Manage application state efficiently across components with Zustand.

---

## 🚀 Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js 
- npm or yarn
- MongoDB

### Set up environment variables

Create a `.env` file in the backend folder of the project and add the following variables:

```env
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
