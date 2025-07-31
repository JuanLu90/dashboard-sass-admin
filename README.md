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

## 📂 Folder structure

```plaintext
dashboard-saas-admin/
├── backend/                   # FastAPI backend
│   ├── app/
│   │   ├── models/            # SQLAlchemy models
│   │   ├── routes/            # API routes (auth, users, etc.)
│   │   ├── schemas/           # Pydantic schemas
│   │   ├── services/          # Business logic
│   │   ├── utils/             # Security, helpers
│   │   ├── db.py              # Database connection
│   ├── main.py                # FastAPI entrypoint
│   ├── requirements.txt       # Backend dependencies
│   └── README.md              # Backend-specific documentation
│
├── frontend/                  # Next.js 14 frontend
│   ├── .vscode/
│   │   └── settings.json      # VSCode workspace config
│   ├── public/                # Static files, icons, images
│   ├── src/
│   │   ├── app/               # App Router: pages and routes
│   │   │   ├── api/           # API routes (proxy to backend, auth endpoints)
│   │   │   ├── login/         # Login page (with demo user support)
│   │   │   ├── plans/         # Protected route: Plans view
│   │   │   ├── settings/      # Protected route: Settings view
│   │   │   ├── users/         # Public route: Users view
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── page.tsx       # Public dashboard homepage
│   │   ├── components/
│   │   │   ├── charts/        # Charts & skeleton loaders
│   │   │   │   ├── dashboard/
│   │   │   │   ├── plans/
│   │   │   │   ├── users/
│   │   │   ├── layout/        # Header, Sidebar, Wrapper, AppLayout
│   │   │   ├── ui/            # UI primitives (button, card, table, badge, tooltip, skeleton, etc.)
│   │   ├── data/              # Local mock data (fallback when backend is offline)
│   │   ├── lib/               # Utilities (colors, fetch helpers, token management)
│   │   ├── types/             # TypeScript types and interfaces
│   ├── .editorconfig
│   ├── .gitignore
│   ├── .prettierrc
│   ├── eslint.config.mjs
│   ├── jest.config.ts
│   ├── jest.setup.js
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── README.md              # Frontend-specific documentation
│
├── README.md                  # Main project documentation (fullstack overview)
└── venv-dashboard-saas-admin/ # Python virtual environment (recommended outside repo)
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

---

## 👤 Demo user

```makefile
email: test@example.com
password: 123456
```

This unlocks protected paths (Plans) and removes the lock on the sidebar.
