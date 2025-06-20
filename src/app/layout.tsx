"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body
        className={`dark bg-gray-900 text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Sidebar open={sidebarOpen} />
          <div
            className={`
      flex-1 flex flex-col transition-all duration-300
      ${sidebarOpen ? "ml-64" : "ml-0"}
    `}
          >
            <Header
              toggleSidebar={() => setSidebarOpen((prev) => !prev)}
              sidebarOpen={sidebarOpen}
            />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
