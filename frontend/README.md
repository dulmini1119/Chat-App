# MERN Stack Chat App

A full-featured real-time chat application built using the MERN stack, Socket.io, JWT for authentication, TailwindCSS, Daisy UI for styling, and Zustand for global state management. The app supports features like authentication, real-time messaging, online user status, and more.

## Features

- **Authentication & Authorization**: User authentication and authorization using JWT.
- **Real-time Messaging**: Messages are sent and received in real-time using Socket.io.
- **Online User Status**: Display the status of online users with Socket.io and React Context.
- **Global State Management**: Zustand is used to manage global state across the app.
- **Error Handling**: Comprehensive error handling on both the server and client.
- **Responsive UI**: Styled using TailwindCSS and Daisy UI for a clean and modern interface.

## Tech Stack

- **Frontend**: React, Zustand, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express, MongoDB, Socket.io, JWT
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Token)
- **Styling**: TailwindCSS, Daisy UI

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- NPM or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dulmini1119/Chat-App.git
   cd chat-app
2. Install dependencies:

   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install

3. Create a .env file in the server directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5001

4. Run the backend and frontend:

   ```bash
   # Backend
   npm run dev

   # Frontend
   npm start

### MongoDB Setup
 - Make sure MongoDB is running locally or you are connected to MongoDB Atlas. Update the MONGO_URI in your .env file accordingly.

## Authentication & JWT
- Sign Up: Create a new user by sending a POST request to /api/auth/signup.
- Login: Authenticate users by sending a POST request to /api/auth/login.
- JWT: JSON Web Token is generated on login and used to authorize access to protected routes.

## Frontend Features
- Sign Up Functionality
- Login Functionality
- Logout Functionality
- Get Conversations: Fetch user's conversations on login.
- Send Message Functionality: Send messages in real-time.
- Get Messages: Fetch conversation messages.
- Search Conversation: Search for existing conversations or users.

### API Endpoints
## Auth Routes:
- POST /api/auth/signup: Sign up a new user.
- POST /api/auth/login: Log in a user and generate a JWT.
- POST /api/auth/logout: Log out a user.
  
## Message Routes:
- POST /api/messages/send/conversationId: Send a new message in a conversation.
- GET /api/messages/conversationId : Get messages for a specific conversation.
  
## Conversation Routes:
- GET /api/conversations: Get all conversations for the logged-in user.
  
## User Routes:
- GET /api/users: Get users for the sidebar, useful for searching and starting new conversations.


