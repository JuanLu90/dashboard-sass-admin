# Dashboard SaaS Admin

A modern admin dashboard template focused on **best practices, modular architecture, and realistic UI/UX**, ideal for portfolios, technical interviews, and SaaS prototypes.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **UI:** TailwindCSS, [shadcn/ui](https://ui.shadcn.com/), [lucide-react](https://lucide.dev/)
- **Charts:** [react-chartjs-2](https://react-chartjs-2.js.org/) (Chart.js)
- **Tables:** [TanStack Table](https://tanstack.com/table/v8) (Users view)
- **Mock Data:** API routes with simulated latency (CSR/SSR)
- **Tooling:** ESLint (Flat Config), Prettier, EditorConfig

---

## 🎯 Principles & Best Practices

### 🏗️ Modular and scalable architecture
- Clear domain-based structure (charts, tables, data, types, layouts…) for maintainability and scalability.
- Ready to integrate with a real API (FastAPI) or fallback to mock data for development and testing.
- Reusable, isolated components with clear separation of concerns and loading states.

### 📊 Charts & Tables
- Modular charts (Line, Doughnut, Bar) with centralized color and config management in `/lib/colors.ts` for visual consistency.
- Advanced data tables with pagination, user avatars, status badges, and action menus.
- Mixed data sources (mock + real API) to simulate a functional SaaS environment and demonstrate backend integration.

### 🔒 Authentication and protected routes
- Real authentication powered by FastAPI backend with JWT stored in httpOnly cookies.
- Protected sections (`Plans`, `Settings`) only accessible to logged-in users, with automatic redirection to `/login`.
- Demo user available (`demo@demo.com / 123456`) for recruiters to test the full experience without registering.

### 🧠 Strong typing and code quality
- Strict TypeScript types for all major entities (users, metrics, plans).
- ESLint configuration for linting and Prettier for consistent formatting (with VSCode setup included).
- Semantic commit convention (`feat:`, `fix:`, `refactor:`) for a clean and professional Git history.

### 🖥️ Professional UI/UX
- Default dark theme with a minimalist, responsive design.
- Fixed sidebar with icons (`lucide-react`) and dynamic states (lock icon on restricted routes).
- Decoupled skeleton loaders for smooth asynchronous data loading and improved user experience.

### 📈 Features included
- KPI cards showing key metrics with percentage variation.
- Charts and tables with realistic asynchronous loading and isolated components.
- Architecture prepared for SSR/ISR and ready for production deployment.


---

## 🖥️ UI/UX

- Default dark mode.
- Sidebar: Fixed, responsive, with icons (lucide-react).
- Header: Minimalist, with avatar and sidebar toggle.
- Clean interactions and immediate visual feedback.

---

🛠️ Code Quality

- Linting: ESLint Flat Config (Next.js + TypeScript presets).
- Formatting: Prettier (auto-format on save via VSCode).
- Folder and type conventions.
- Commit convention: Use semantic, atomic commits (feat:, fix:, refactor:, chore:, etc.).

---

## 📈 Features Included

- KPI Cards: Metric cards with icons and percentage change.

- Charts:
  - Line chart (active users, last 30 days)
  - Doughnut chart (plans distribution)
  - Bar chart (monthly revenue)

- Tables:
  - Recent users, subscriptions, incidents. Includes avatars, status badges.
  - Mock API: All dashboard data fetched from mocked endpoints with randomized delays.
  - Custom skeleton loaders for each chart/table.
  - Architecture ready for SSR/ISR or backend integration.
 
---

## 🧪 Testing & Mock Data

- **Test coverage:**  
  ![Coverage Badge](https://img.shields.io/badge/coverage-94%25-brightgreen)
- **Coverage summary:**  
  - Statements: **95%**
  - Branches: **90%**
  - Functions: **72%**
  - Lines: **95%**

- **Mock data** for dashboards, charts, and tables is centralized in `/src/data`. Both API routes and tests import from these files, ensuring consistency and no duplication.
- **Unit and integration tests** are included, covering all core dashboard components, business flows, and user navigation using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).
    - **Unit tests:** Validate rendering, edge cases, and UI states for individual components.
    - **Integration tests:** Simulate user flows, table pagination, sidebar navigation, and full dashboard interaction.
- **How to run:**
    ```bash
    npm run test
    # or, for watch mode:
    npm run test -- --watch
    ```
- To check coverage:
    ```bash
    npm run test -- --coverage
    ```


---
 
⚙️ Local Setup & Development
```
git clone https://github.com/YOUR_USERNAME/dashboard-saas-admin.git
npm install
npm run dev
```

And go to http://localhost:3000



