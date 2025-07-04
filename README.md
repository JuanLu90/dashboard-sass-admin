This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Implementation Notes
- The sidebar navigation uses the Next.js <Link> component instead of <a> to enable client-side routing and preserve React state. To do this, we had to add 'use client' to the Sidebar.tsx component. This is because, by default, all components are SSR (server-side rendering), and we don't have access to the pathname, since it is on the client side.


## 📊 Charts Integration

- Switched from recharts to react-chartjs-2 (Chart.js) for improved performance and smoother UI animations.
- Chart.js provides more efficient and responsive rendering, especially when animating layouts (like sidebar transitions), which eliminates UI lag present with Recharts in this context.
- All chart mock data remains separated under /data/charts/, following best practices for testability and future migration to real API data.
- Chart components are still defined as "use client" components, as required for any interactive chart library in Next.js App Router.
- Components and data are isolated for clarity, reusability, and maintainability.
- This structure demonstrates separation of concerns and scalability, reflecting professional standards even in small projects.


