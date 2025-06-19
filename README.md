## Implementation Notes

- The sidebar navigation uses the Next.js `<Link>` component instead of `<a>` to enable client-side routing and preserve React state. To do this, we had to add 'use client' to the Sidebar.tsx component. This is because, by default, all components are SSR (server-side rendering), and we don't have access to the pathname, since it is on the client side.
