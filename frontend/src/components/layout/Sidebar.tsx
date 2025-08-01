"use client";

import { LayoutDashboard, Users, CreditCard, Lock } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const arrayLinks = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, isLocked: false },
  { name: "Users", href: "/users", icon: Users, isLocked: false },
  { name: "Plans", href: "/plans", icon: CreditCard, isLocked: true },
];

export default function Sidebar({ open, isLogged }: { open: boolean; isLogged: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleProtectedClick = (e: React.MouseEvent, link: { href: string; isLocked: boolean }) => {
    if (link.isLocked && !isLogged) {
      e.preventDefault();
      router.push("/login");
    }
  };

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
          <TooltipProvider key={link.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  onClick={(e) => handleProtectedClick(e, link)}
                  className={`hover:bg-gray-700 rounded flex items-center gap-3 p-2 transition ${
                    pathname === link.href ? "font-bold bg-gray-700" : ""
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                  {link.isLocked && !isLogged && <Lock size={16} className="ml-auto opacity-70" />}
                </Link>
              </TooltipTrigger>
              {link.isLocked && !isLogged && (
                <TooltipContent side="right">
                  <p>You need to log in</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>

      <div className="border-t border-gray-700 my-6" />
      <div className="mt-auto ml-auto flex flex-col gap-2">
        <Link
          href="https://github.com/JuanLu90/dashboard-sass-admin/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-700 rounded flex items-center gap-3 p-2 text-white"
          title="See code on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
          In GitHub
        </Link>
      </div>
    </aside>
  );
}
