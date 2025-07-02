"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  open: boolean;
};

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();

  const arrayLinks = [
    { name: "Users", href: "/users" },
    { name: "Plans", href: "/plans" },
    { name: "Support", href: "/support" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <aside
      className={`
        w-64 bg-gray-800 text-white h-full flex flex-col p-4
        fixed z-40 top-0 left-0
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="mb-4 text-lg">
        <Link
          href="/"
          className={`hover:bg-gray-800 rounded p-2 ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          Dashboard
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
