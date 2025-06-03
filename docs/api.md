# API Documentation


## Base URL
```
/api/v1
```

## **Authentication Routes** (`/auth`)

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


## **User Routes** (`/users`)

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


## **Subscription Routes** (`/subscriptions`)

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

