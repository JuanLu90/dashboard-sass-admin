# 🚀 Dashboard SaaS Admin (Monorepo)

Full-stack project created as a portfolio-quality example for technical interviews and recruiter showcases.
It demonstrates a real-world SaaS architecture using Next.js 14 (frontend) and FastAPI (backend) with PostgreSQL, following modern best practices and clean, scalable code organization.

---

## 🌐 Live Demo

- Frontend: https://dashboard-sass-admin.vercel.app
- API Docs: https://dashboard-sass-admin.onrender.com/docs

---

## 👤 Demo user

```makefile
email: test@example.com
password: 123456
```

This unlocks protected paths (Plans) and removes the lock on the sidebar.

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
- **Database:** SQLite (development) / PostgreSQL (production-ready on Render)
- **Auth:** JWT (access token), password hashing (bcrypt)
- **ORM:** SQLAlchemy
- **Schemas:** Pydantic
- **Seed script:** seed_data.py to initialize a demo user and data

---

## ✨ Main features

- ✅ **True authentication:** login/logout with secure HttpOnly cookies.
- ✅ **Protected routes:** (`/plans`) redirect unauthenticated users to login.
- ✅ **Demo user:** for instant access without registration.
- ✅ **Public dashboard:** charts and tables accessible without login
- ✅ **Professional design:** consistent design with dark mode default.
- ✅ **Monorepo architecture:** clean separation between frontend and backend.
- ✅ **Deploy-ready:** Vercel (frontend) + Render (backend + PostgreSQL).

---

## 🏗️ Setup & Run Locally

### 1️⃣ Clone repository
```bash
git clone https://github.com/JuanLu90/dashboard-sass-admin.git
cd dashboard-sass-admin
```

### 2️⃣ Backend setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Create .env.development**
```php-template
DATABASE_URL=postgresql+psycopg2://<user>:<password>@<host>:5432/<db>
```

**Run migrations & seed demo data:**
```bash
python seed_data.py
uvicorn main:app --reload
```

### 3️⃣ Frontend setup
```bash
cd ../frontend
npm install
```

**Create .env:**
```ìni
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

**Start development:**
```bash
npm run dev
```

---

## 🌐 Deployment

- Frontend: Vercel → set NEXT_PUBLIC_API_URL=https://dashboard-sass-admin.onrender.com
- Backend: Render → configure DATABASE_URL and run seed script if needed.
---

## 📂 Folder structure

```plaintext
dashboard-saas-admin/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── db.py
│   │   └── __init__.py
│   ├── tests/
│   ├── seed_data.py
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── .vscode/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/
│   │   │   ├── login/
│   │   │   ├── plans/
│   │   │   ├── users/
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── layout/
│   │   │   ├── ui/
│   │   ├── data/
│   │   ├── lib/
│   │   ├── types/
│   │   ├── tests/
│   ├── .editorconfig
│   ├── .gitignore
│   ├── ...
│   └── README.md
│
├── README.md
└── venv-dashboard-saas-admin/

```

---

## ⚙️ Installation and execution

### 1️⃣ Backend

```bash
cd backend
python3 -m venv ../venv-dashboard-saas-admin
source ../venv-dashboard-saas-admin/bin/activate
pip install -r requirements.txt
```
**1. Create .env.development file (needed for DB connection):**
```env
DATABASE_URL=sqlite:///./app.db  # or your PostgreSQL connection URL
```

**2. (Optional) Seed demo data:**
```bash
python seed_data.py
```
**3. Run the backend server:**
```bash
uvicorn main:app --reload
```
- Backend available at: http://127.0.0.1:8000
- Swagger Docs: http://127.0.0.1:8000/docs

### 2️⃣ Frontend

```bash
cd frontend
npm install
```

**1. Create .env.local file:**
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

**2. Run the development server:**
```bash
npm run dev
```
- Frontend available at: http://localhost:3000

---

## 🧪 Tests (unit + e2e)

### ✅ Unit tests

- **Framework:** Jest + React Testing Library
- **Location:** frontend/src/**/__test__/*.test.tsx
- **Execution:**
```bash
cd frontend
npm run test
```

### 🚀 End-to-End (e2e) tests

- **Framework:** Playwright
- **Location:**: frontend/tests/e2e/*.spec.ts
- **Installation Playwright:**
```bash
cd frontend
npx playwright install
```

- **Execution** (requires active locale):

```bash
cd frontend
npm run dev          # in other term
npx playwright test
```

Make sure you have the backend running as well (uvicorn main:app --reload from /backend).
