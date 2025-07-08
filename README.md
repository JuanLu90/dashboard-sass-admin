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

## 📂 Folder Structure

```plaintext
dashboard-saas-admin/
├── .vscode/
│   └── settings.json           # VSCode workspace config
├── public/                     # Static files, icons, images
├── src/
│   ├── app/                    # Next.js pages and routing (App Router)
│   │   ├── api/                # Mock API endpoints for data fetching
│   │   ├── plans/              # Plans view
│   │   ├── users/              # Users view
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Main dashboard page
│   ├── components/
│   │   ├── charts/             # All chart components and skeletons
│   │   │   ├── dashboard/
│   │   │   ├── plans/
│   │   │   ├── users/
│   │   ├── layout/             # Header, Sidebar, layout components
│   │   ├── ui/                 # UI primitives (card, table, badge, skeleton, etc.)
│   ├── data/                   # Local mock data, split by domain
│   ├── lib/                    # Helpers, utilities, constants (colors, delays, etc.)
│   ├── types/                  # TypeScript types and interfaces (by domain)
├── .editorconfig
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── jest.config.ts
├── jest.setup.js
├── next-env.d.ts
├── next.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🎯 Principles & Best Practices

Modular and scalable architecture: Clear domain-based separation (charts, data, types, layouts…).
- Charts & Tables:
  - All charts use CSR (Client Side Rendering) with fetch to mock API endpoints and custom skeleton loaders.
  - Each skeleton is isolated in its own file and rendered only when loading or when data is unavailable.
  - Chart colors and config are centralized in `/lib/colors.ts` for visual consistency.

- User Table:
  - Advanced paginated table, user avatars, status badges, action dropdowns, etc.
  - Mock data decoupled from UI; can be easily swapped for real API calls.

- Realistic latency simulation:
  - Mock endpoints use randomized timeouts (randomDelay) to mimic microservices and independent widget loading.
  - Each chart/table loads and appears asynchronously for realistic SaaS UX.

- Strong TypeScript types:
  - All major interfaces and types live in /types.

- Decoupled skeletons and loading states:
  - Each loading component is separated from its main component for easy testing and reusability.

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

📈 Features Included

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

## 🧪 Testing and Mock Data

- All mock data used for dashboards, charts, and tables is centralized in the `/src/data` directory.
- API routes and tests both import their data from these mock files, ensuring consistency and maintainability.
- This approach avoids data duplication and keeps both the application and the tests in sync.

---
 
⚙️ Local Setup & Development
```
git clone https://github.com/YOUR_USERNAME/dashboard-saas-admin.git
npm install
npm run dev
```

And go to http://localhost:3000



