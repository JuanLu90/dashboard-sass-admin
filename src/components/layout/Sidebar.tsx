"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const arrayLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/users" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-full flex flex-col p-4">
      <div className="mb-4 text-lg">
        <Link
          href="/"
          className={`hover:bg-gray-800 rounded p-2 ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          Panel
        </Link>
      </div>
      <nav className="flex flex-col gap-2">
        {arrayLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:bg-gray-800 rounded p-2 ${
              pathname === link.href ? "font-bold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
