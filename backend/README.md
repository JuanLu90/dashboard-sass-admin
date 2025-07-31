# 🛠️ Dashboard SaaS Admin – Backend

This is the **backend service** of the **Dashboard SaaS Admin** project.  

It provides a **FastAPI-powered REST API** with authentication (JWT), user management, and database persistence using SQLAlchemy.

---

## 🚀 Tech Stack

- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.13)
- **Database:** SQLite (dev) / PostgreSQL (production-ready)
- **ORM:** SQLAlchemy
- **Authentication:** JWT tokens with secure password hashing (bcrypt)
- **Validation:** Pydantic models and schemas
- **Server:** Uvicorn (ASGI)

---

## ⚙️ Setup & Installation
### 1️⃣ Create and activate a virtual environment

```bash
cd backend
python3 -m venv ../venv-dashboard-saas-admin
source ../venv-dashboard-saas-admin/bin/activate
```

### 2️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Start the development server
```bash
uvicorn main:app --reload
```

---

## 🔐 Authentication
- JWT-based authentication (access_token stored as httpOnly cookie in frontend).
- Passwords are hashed with bcrypt before storage.
- Routes like /api/auth/me require a valid token to access.

---

## 📌 Main Endpoints

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| POST   | `/api/auth/register` | Register a new user             |
| POST   | `/api/auth/login`    | Authenticate and get JWT token  |
| GET    | `/api/auth/me`       | Get current logged-in user info |

