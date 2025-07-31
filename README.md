# 🚀 Dashboard SaaS Admin (Monorepo)

Full-stack project created as a professional example for portfolios and technical interviews.
It features a modern architecture with **Next.js 14 (frontend)** and **FastAPI (backend)**, following best practices and a true SaaS product style.

---

## 📦 Tech Stack

### **Frontend**
- **Framework:** Next.js 14 (App Router, Server Components, TypeScript)
- **UI:** TailwindCSS, [shadcn/ui](https://ui.shadcn.com/), lucide-react
- **State Management:** Cookies httpOnly + props server-side
- **Tables:** TanStack Table
- **Charts:** Chart.js vía react-chartjs-2
- **Testing:** Jest + React Testing Library

### **Backend**
- **Framework:** FastAPI (Python 3.13)
- **DB:** SQLite (dev) / PostgreSQL (prod-ready)
- **Auth:** JWT (access token), password hashing (bcrypt)
- **ORM:** SQLAlchemy
- **Schemas:** Pydantic

---

## ✨ Main features

- ✅ **True authentication:** login/logout with JWT stored in an httpOnly cookie.
- ✅ **Protected routes** (`/plans`, `/settings`) with automatic redirection to login if not logged in.
- ✅ **Demo user** for recruiters to test the system without registration.
- ✅ **Public dashboard** (mock charts and tables) accessible without logging in.
- ✅ **Professional design** with `shadcn/ui` and a dark theme by default.
- ✅ **Monorepo** architecture with clear frontend/backend separation.

---

## 📂 Monorepo structure

```plaintext
dashboard-saas-admin/
├── frontend/ # App Next.js 14
│ ├── src/app/ # Rutas y páginas
│ ├── components/ # Layout, Sidebar, Header, UI...
│ └── README.md
│
├── backend/ # API FastAPI
│ ├── app/ # Routes, models, schemas, utils
│ ├── main.py
│ └── README.md
│
└── README.md
```

---

## ⚙️ Installation and execution

### 1️⃣ Backend

```bash
cd backend
python3 -m venv ../venv-dashboard-saas-admin
source ../venv-dashboard-saas-admin/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

### 👤 Demo user

```makefile
email: test@example.com
password: 123456
```

This unlocks protected paths (Plans) and removes the lock on the sidebar.
