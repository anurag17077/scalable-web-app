# 🚀 Scalable Web App — Authentication + Dashboard (Full-Stack)

A full-stack scalable web application built for the **Frontend Developer Intern Assignment**.  
This project includes **JWT authentication**, **protected routes**, **dashboard**, and **CRUD operations**, along with a secure Node.js backend connected to MongoDB.

---

## ⭐ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT-based Authentication
- Secure Password Hashing (bcrypt)
- Protected API Routes
- Auto-logout on token expiry

### 🎨 Frontend (React + Vite + Tailwind)

- Responsive UI using TailwindCSS
- Client-side form validation
- Global authentication state using React Context
- ProtectedRoute for private pages
- Dashboard layout
- CRUD UI for Tasks
- Profile update page

### ⚙️ Backend (Node.js + Express + MongoDB)

- REST API with Express
- JWT Authentication Middleware
- CRUD APIs for tasks
- User profile APIs
- MVC folder structure
- Centralized error handling
- Input validation utilities

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/scalable-web-app.git
cd scalable-web-app
```

## 🖥️ Backend Setup

1.  **Move into the backend folder:**

    ```bash
    cd backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create `.env` file:**
    Create a new file named **`.env`** in the `backend/` directory and populate it using the following template:

    ```
    PORT=8000
    MONGODB_URL=your_mongodb_connection_string_here
    JWT_SECRET=your_jwt_secret_here
    JWT_EXPIRE=7d
    NODE_ENV=development
    ```

4.  **Start the backend server:**
    ```bash
    npm run dev
    ```

> 👉 **Backend runs at: http://localhost:8000**
>
> ## 💻 Frontend Setup

1.  **Move into the frontend folder:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create `.env` file:**
    Create a new file named **`.env`** in the `frontend/` directory and use the following template to point to the backend API:

    ```
    VITE_API_URL=http://localhost:8000
    ```

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```

> 👉 **Frontend runs at: http://localhost:5173**

## 🔗 API Documentation

All API routes are documented for testing and quick reference in the Postman collection located at:

`/postman/API_Collection.json`

### Authentication Routes

| Method | Endpoint             | Description               |
| :----- | :------------------- | :------------------------ |
| `POST` | `/api/auth/register` | Create a new user account |
| `POST` | `/api/auth/login`    | Log in and receive a JWT  |

### User Routes

| Method | Endpoint            | Description                                     |
| :----- | :------------------ | :---------------------------------------------- |
| `GET`  | `/api/user/profile` | Retrieve the currently logged-in user's profile |
| `PUT`  | `/api/user/profile` | Update the current user's profile information   |

### Task Routes

| Method   | Endpoint         | Description                  |
| :------- | :--------------- | :--------------------------- |
| `GET`    | `/api/tasks`     | Get a list of all tasks      |
| `POST`   | `/api/tasks`     | Create a new task            |
| `PUT`    | `/api/tasks/:id` | Update a specific task by ID |
| `DELETE` | `/api/tasks/:id` | Delete a specific task by ID |

## 🔐 Security Features

The backend API is designed with several best practices for security:

- **Password Hashing with bcrypt:** Uses the **bcrypt** library to securely hash and store user passwords, protecting against unauthorized access even if the database is compromised.
- **JWT Authentication:** Implements **JSON Web Tokens** for secure, stateless session management, ensuring authenticated requests are verifiable.
- **Protected Routes:** Middleware is used to verify the JWT and ensure only authenticated users can access specific resources and endpoints.
- **Error Handling Middleware:** Centralized middleware catches and formats errors, preventing sensitive server details from being exposed to the client.
- **Validation Utilities:** Implements input validation (e.g., using a library like Joi or Express-Validator) to sanitize and check user input, preventing common security vulnerabilities like XSS and injection attacks.
- **Environment Variable Protection:** Sensitive configurations (like `MONGODB_URL` and `JWT_SECRET`) are managed exclusively through **environment variables** (`.env`), keeping them out of the codebase.

## 📈 Scalability Notes

### Frontend Scalability

- **Modular React components:** Promotes code reuse and maintainability for large applications.
- **Service-based API calls:** Centralizes data fetching logic, making components cleaner and API changes easier to manage.
- **Code splitting via Vite:** Improves initial load performance by loading application chunks on demand.

### Backend Scalability

- **MVC architecture:** Provides a clear separation of concerns, which simplifies development and maintenance as the codebase grows.
- **Middleware-based security & logging:** Centralizes cross-cutting concerns (authentication, logging, rate limiting) for efficient management.
- **Ready for deployment on Render/Railway:** Configured for cloud deployment on scalable, modern hosting platforms.
- **MongoDB Atlas for auto-scaling:** Utilizes a managed, cloud-based database service that can automatically handle traffic spikes.



