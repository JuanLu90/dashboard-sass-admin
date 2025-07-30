"use client";

import { HeaderProps } from "@/types/header";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({ toggleSidebar, sidebarOpen, isLogged }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b py-3 px-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <Menu size={32} />
      </button>
      <div className="flex items-center">
        {isLogged && (
          <Image
            src="https://ui-avatars.com/api/?name=Juan+Luis&format=png"
            alt="Juan Luis"
            width={35}
            height={35}
            className="rounded-full border border-gray-700 object-cover"
          />
        )}
        {isLogged ? (
          <Button variant="destructive" onClick={handleLogout} className="mx-3">
            Log out
          </Button>
        ) : (
          <Link
            href={"/login"}
            className="hover:bg-gray-700 rounded flex items-center gap-3 p-2 transition"
          >
            <Button> Log in </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
