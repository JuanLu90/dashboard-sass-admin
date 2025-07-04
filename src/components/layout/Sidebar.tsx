import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const arrayLinks = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Plans", href: "/plans", icon: CreditCard },
];

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  return (
    <aside
      className={`
        w-64 bg-gray-800 text-white h-full flex flex-col p-4
        fixed z-40 top-0 left-0
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center gap-2 mb-8 font-bold text-xl tracking-tight">
        <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">
          D
        </div>
        <span>Dashboard SaaS</span>
      </div>
      <nav className="flex flex-col gap-2">
        {arrayLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:bg-gray-700 rounded flex items-center gap-3 p-2 transition ${
              pathname === link.href ? "font-bold bg-gray-700" : ""
            }`}
          >
            <link.icon className="w-5 h-5" />
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-700 my-6" />
      <div className="mt-auto">
        <Link
          href="/settings"
          className="hover:bg-gray-700 rounded flex items-center gap-3 p-2 text-gray-400"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
