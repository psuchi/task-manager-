# Task Manager Application

## Overview
This is a simple full stack Task Manager application that allows users to create, view, update, and delete tasks.

## Features
- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All / Completed / Pending)
- Loading and error handling

## Tech Stack
Frontend:
- React.js

Backend:
- Node.js
- Express.js

## API Endpoints
- GET /tasks → Get all tasks
- POST /tasks → Create new task
- PATCH /tasks/:id → Update task status
- DELETE /tasks/:id → Delete task

## Data Model
Each task contains:
- id
- title
- completed
- createdAt

## How to Run

### Backend
1. Navigate to backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Run server:
   node server.js

### Frontend
1. Navigate to frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start app:
   npm start

## Notes
- Data is stored in memory (no database used)
- This project focuses on functionality and structure

## Author
Your Name