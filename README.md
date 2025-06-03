# Subscription Tracker API

A RESTful API to manage users and subscriptions with user authentication, subscription tracking, and renewal reminders. Built with Node.js and Docker for easy development and deployment.

## 🚀 Features

- ✅ User authentication (Sign up, Sign in, Sign out)
- ✅ Manage users and subscriptions (CRUD)
- ✅ Track upcoming subscription renewals
- ✅ Docker support for smooth development & deployment
- ✅ Written in modern JavaScript (Node.js, ES6+)
- ✅ pnpm support for faster package management
- ✅ MIT Licensed and contributions welcome!

## 📦 Technologies

- Node.js (v18+)
- pnpm
- Docker & Docker Compose (Optional)

## ⚙️ Getting Started

### Clone Repository

```sh
git clone https://github.com/sujeetgund/subscription-tracker.git
cd subscription-tracker
cp .env.example .env.development.local
```

### Local Development (with Docker)

```sh
docker-compose up
```

### Local Development (without Docker)

```sh
pnpm install
pnpm run dev
```

### Production Build (with Docker)

```bash
docker build -t subscription-tracker .
docker run -d -p 5500:5500 --env-file .env.production subscription-tracker
```

## 🔒 API Endpoints

For full details, check out the [API documentation](docs/api.md).

### Base URL

```
/api/v1
```

### Authentication

- `POST /auth/sign-up` – Create a new user
- `POST /auth/sign-in` – Log in a user
- `POST /auth/sign-out` – Log out

### Users

- `GET /users` – List all users
- `GET /users/:id` – Get user by ID
- `POST /users` – Create user
- `PUT /users/:id` – Update user
- `DELETE /users/:id` – Delete user

### Subscriptions

- `GET /subscriptions` – List subscriptions
- `GET /subscriptions/:id` – Get subscription by ID
- `POST /subscriptions` – Create subscription
- `PUT /subscriptions/:id` – Update subscription
- `DELETE /subscriptions/:id` – Delete subscription
- `GET /subscriptions/user/:id` – Get user subscriptions
- `PUT /subscriptions/:id/cancel` – Cancel subscription
- `GET /subscriptions/upcoming-renewals` – Upcoming renewals

## ❤️ Contribute

We welcome your contributions! Please check the [issues](https://github.com/sujeetgund/subscription-tracker-api/issues) and [pull requests](https://github.com/sujeetgund/subscription-tracker-api/pulls).

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.