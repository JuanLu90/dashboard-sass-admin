import { HeaderProps } from "@/types/header";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header({ toggleSidebar, sidebarOpen }: HeaderProps) {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b py-3 px-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <Menu size={32} />
      </button>
      <Image
        src="https://ui-avatars.com/api/?name=Juan+Luis&format=png"
        alt="Juan Luis"
        width={35}
        height={35}
        className="rounded-full border border-gray-700 object-cover"
      />
    </header>
  );
}
