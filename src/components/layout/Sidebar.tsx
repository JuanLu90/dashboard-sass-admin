import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full flex flex-col p-4">
      <div className="mb-4 font-bold text-lg">Panel</div>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-gray-800 rounded p-2">
          Dashboard
        </Link>
        <Link href="/users" className="hover:bg-gray-800 rounded p-2">
          Users
        </Link>
        <Link href="/settings" className="hover:bg-gray-800 rounded p-2">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
