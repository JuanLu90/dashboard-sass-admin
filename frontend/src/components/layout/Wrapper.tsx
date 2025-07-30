"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useState } from "react";

export default function Wrapper({
  children,
  isLogged,
}: {
  children: React.ReactNode;
  isLogged: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Sidebar open={sidebarOpen} isLogged={isLogged} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
          sidebarOpen={sidebarOpen}
          isLogged={isLogged}
        />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
