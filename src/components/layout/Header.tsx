import { Menu } from "lucide-react";

type HeaderProps = {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
};

export default function Header({ toggleSidebar, sidebarOpen }: HeaderProps) {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b px-6 py-3 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="text-gray-800 dark:text-gray-200 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <Menu size={24} />
      </button>
      <span className="font-semibold">Dashboard SaaS</span>
      <span>Perfil</span>
    </header>
  );
}
