# API Documentation

[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/node-%3E=18.0.0-green?logo=node.js)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-fast%20&%20efficient-orange?logo=pnpm)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)](https://github.com/sujeetgund)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/sujeetgund/subscription-tracker-api/issues)

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/) (Optional) if running outside Docker

---

### 🐳 Running in Development (with Docker)

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/subscription-tracker.git
   cd subscription-tracker
   ```

2. **Copy the _.env.example_ file**

   ```bash
   cp .env.example .env.development.local
   ```

3. **Run the app**

   ```bash
   docker-compose up
   ```

   The server will be available at: http://localhost:5500


### Running in Development (without Docker)

```bash
cp .env.example .env.development.local
pnpm install
pnpm run dev
```

### 📦 Production Build (with Docker)

```bash
docker build -t subscription-tracker .
docker run -d -p 5500:5500 --env-file .env.production subscription-tracker
```

---

## Base URL
```
/api/v1
```

---

## **Authentication Routes** (`/api/v1/auth`)

### **Sign Up**
- **Endpoint:** `POST /auth/sign-up`
- **Description:** Create a new user.
- **Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": { "token": "string", "user": { "id": "string", "name": "string", "email": "string" }}
}
```

### **Sign In**
- **Endpoint:** `POST /auth/sign-in`
- **Description:** Authenticate and log in a user.
- **Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "User signed in successfully",
  "data": { "token": "string", "user": { "id": "string", "name": "string", "email": "string" }}
}
```

### **Sign Out**
- **Endpoint:** `POST /auth/sign-out`
- **Description:** Sign out a logged-in user.
- **Response:**
```json
{
  "success": true,
  "message": "User signed out successfully"
}
```

---

## **User Routes** (`/api/v1/users`)

### **Get All Users**
- **Endpoint:** `GET /users`
- **Description:** Retrieve a list of all users.
- **Response:**
```json
{
  "success": true,
  "data": [ { "id": "string", "name": "string", "email": "string" } ]
}
```

### **Get User by ID**
- **Endpoint:** `GET /users/:id`
- **Description:** Get a single user by their ID. Requires Authorization.
- **Response:**
```json
{
  "success": true,
  "data": { "id": "string", "name": "string", "email": "string" }
}
```

### **Create User**
- **Endpoint:** `POST /users`
- **Description:** Create a new user.
- **Response:**
```json
{
  "message": "Create a new user"
}
```

### **Update User by ID**
- **Endpoint:** `PUT /users/:id`
- **Description:** Update user information.
- **Response:**
```json
{
  "message": "Update user with id :id"
}
```

### **Delete User by ID**
- **Endpoint:** `DELETE /users/:id`
- **Description:** Delete a user by ID.
- **Response:**
```json
{
  "message": "Delete user with id :id"
}
```

---

## **Subscription Routes** (`/api/v1/subscriptions`)

### **Get All Subscriptions**
- **Endpoint:** `GET /subscriptions`
- **Description:** Retrieve all subscriptions.
- **Response:**
```json
{
  "message": "Get all subscriptions"
}
```

### **Get Subscription by ID**
- **Endpoint:** `GET /subscriptions/:id`
- **Description:** Retrieve a specific subscription by ID.
- **Response:**
```json
{
  "message": "Get subscription with id :id"
}
```

### **Create Subscription**
- **Endpoint:** `POST /subscriptions`
- **Description:** Create a new subscription. Requires Authorization.
- **Response:**
```json
{
  "message": "Subscription created successfully"
}
```

### **Update Subscription by ID**
- **Endpoint:** `PUT /subscriptions/:id`
- **Description:** Update an existing subscription.
- **Response:**
```json
{
  "message": "Update subscription with id :id"
}
```

### **Delete Subscription by ID**
- **Endpoint:** `DELETE /subscriptions/:id`
- **Description:** Delete a subscription by ID.
- **Response:**
```json
{
  "message": "Delete subscription with id :id"
}
```

### **Get User Subscriptions**
- **Endpoint:** `GET /subscriptions/user/:id`
- **Description:** Retrieve all subscriptions for a specific user. Requires Authorization.
- **Response:**
```json
{
  "message": "Get subscriptions for user with id :id"
}
```

### **Cancel Subscription**
- **Endpoint:** `PUT /subscriptions/:id/cancel`
- **Description:** Cancel a subscription by ID.
- **Response:**
```json
{
  "message": "Cancel subscription with id :id"
}
```

### **Get Upcoming Renewals**
- **Endpoint:** `GET /subscriptions/upcoming-renewals`
- **Description:** Retrieve upcoming subscription renewals.
- **Response:**
```json
{
  "message": "Get all upcoming renewals"
}
```

