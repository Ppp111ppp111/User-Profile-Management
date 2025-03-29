# User Profile Management API

## Overview
A simple Node.js and Express API for user profile management, including authentication, profile updates, and secure data handling using JWT and MongoDB.

## Features
- User registration and authentication
- JWT-based authentication
- Profile retrieval and updates
- Secure password hashing
- Middleware-based authentication

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Security:** bcryptjs, helmet, jsonwebtoken

## Installation
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/user-profile-management.git
cd user-profile-management
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

### 4. Run the Server
```sh
node server.js
```

## API Endpoints
### Authentication
#### Register
```http
POST /api/auth/register
```
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Street Name"
}
```

#### Login
```http
POST /api/auth/login
```
**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here"
}
```

### User Profile
#### Get Profile (Requires Authentication)
```http
GET /api/users/me
Authorization: Bearer <token>
```

#### Update Profile (Requires Authentication)
```http
PATCH /api/users/me
Authorization: Bearer <token>
```
**Body:**
```json
{
  "bio": "Updated bio",
  "address": "New Address"
}
```

## Project Structure
```
ppp111ppp111-user-profile-management/
│── README.md
│── package.json
│── server.js
│── .env (ignored)
│── middleware/
│   └── auth.js
│── models/
│   └── User.js
│── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
```

## Testing with Postman
1. Start the server: `node server.js`
2. Use Postman to test API endpoints:
   - Register a new user (`POST /api/auth/register`)
   - Login (`POST /api/auth/login`)
   - Copy the received JWT token
   - Access user profile (`GET /api/users/me`) with token in `Authorization` header
   - Update profile (`PATCH /api/users/me`)

## Notes
- Ensure MongoDB is running.
- Always keep your `.env` file secure and never commit it.
- Passwords are hashed before storing in the database.

## License
This project is licensed under the MIT License.


