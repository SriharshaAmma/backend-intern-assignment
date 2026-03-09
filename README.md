# 🚀 Backend Internship Assignment – TaskVault

A **full-stack task management system** built as part of the Backend Developer Internship assignment.
The project demonstrates **secure authentication, role-based access control, RESTful API design, and frontend integration**.

---

# 📌 Project Overview

**TaskVault** is a lightweight productivity platform where users can:

* Register and log in securely
* Manage personal tasks
* Track task status
* Access protected dashboards
* Use role-based permissions (User / Admin)

The system follows **modern backend architecture principles** and includes **API documentation, authentication, and scalable design practices**.

---

# 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcryptjs (Password Hashing)**

### Frontend

* **HTML**
* **CSS**
* **Vanilla JavaScript**

### API Documentation

* **Swagger UI**

### Tools

* **Git & GitHub**
* **Postman**

---

# 🧩 Features

### 🔐 Authentication

* Secure **User Registration**
* **JWT-based Login**
* Password hashing using **bcrypt**

### 👥 Role Based Access

Two user roles supported:

| Role  | Permissions             |
| ----- | ----------------------- |
| User  | Create & manage tasks   |
| Admin | Manage and delete tasks |

---

### 📋 Task Management (CRUD)

Users can:

* Create new tasks
* View all tasks
* Update task status
* Delete tasks

Task statuses include:

* Pending
* In Progress
* Completed

---

### 📊 Dashboard

The frontend dashboard displays:

* Total tasks
* Completed tasks
* Pending tasks
* In-progress tasks

Users can:

* Create tasks
* Update tasks
* Filter tasks
* View statistics

---

### 📖 API Documentation

Interactive API documentation using **Swagger**.

Access it here:

```text
http://localhost:5000/api-docs
```

---

# 📡 API Endpoints

### Authentication

| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| POST   | `/api/v1/auth/register` | Register new user |
| POST   | `/api/v1/auth/login`    | Login user        |

---

### Tasks

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| GET    | `/api/v1/tasks`     | Get all tasks |
| POST   | `/api/v1/tasks`     | Create task   |
| PUT    | `/api/v1/tasks/:id` | Update task   |
| DELETE | `/api/v1/tasks/:id` | Delete task   |

---

# 🗄️ Database Schema

### User

```
name
email
password
role
createdAt
```

### Task

```
title
description
status
userId
createdAt
```

---

# 🏗️ Project Structure

```
backend-intern-assignment
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── docs
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── style.css
│
└── README.md
```

---

# ▶️ Running the Project

### 1️⃣ Clone the repository

```
git clone https://github.com/SriharshaAmma/backend-intern-assignment.git
```

---

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

---

### 3️⃣ Start the server

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

### 4️⃣ Open the frontend

Open:

```
frontend/login.html
```

---

# 🔐 Authentication Flow

```
Register → Login → Receive JWT Token → Access Protected Routes
```

All protected API requests require:

```
Authorization: Bearer <token>
```

---

# ⚡ Scalability Considerations

The architecture is designed to support future scaling:

* Modular controller structure
* API versioning (`/api/v1`)
* Stateless JWT authentication
* Easily extensible microservice architecture

Future improvements could include:

* Redis caching
* Docker deployment
* Load balancing
* CI/CD pipelines

---

# 🎯 Assignment Requirements Covered

| Requirement           | Status |
| --------------------- | ------ |
| Authentication APIs   | ✅      |
| Password Hashing      | ✅      |
| JWT Authentication    | ✅      |
| Role-Based Access     | ✅      |
| CRUD APIs             | ✅      |
| API Versioning        | ✅      |
| Swagger Documentation | ✅      |
| Frontend Dashboard    | ✅      |
| Database Integration  | ✅      |

---

# 👨‍💻 Author

**Sri Harsha Amma**

GitHub:
https://github.com/SriharshaAmma

---

# ⭐ Acknowledgement

This project was developed as part of the **Backend Developer Internship Assignment** to demonstrate practical knowledge of **REST APIs, authentication systems, and full-stack integration**.
