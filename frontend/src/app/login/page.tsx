"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Credenciales incorrectas");

      router.replace("/");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-slate-950 to-slate-900 px-4">
      <div className="mb-8 flex flex-col items-center">
        <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-semibold text-4xl">
          D
        </div>
        <h1 className="text-xl font-semibold text-white mt-2">My SaaS Admin</h1>
        <p className="text-slate-400 text-sm">Access your administrative panel</p>
      </div>

      <Card className="w-full max-w-sm border border-slate-800 bg-slate-900 text-white shadow-lg">
        <CardHeader className="text-center space-y-2 pb-2">
          <CardTitle className="text-xl font-bold">Log in</CardTitle>
          <CardDescription className="text-slate-400">
            Use your credentials to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                className="bg-slate-800 border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="bg-slate-800 border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Loading..." : "Log in"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={async () => {
                setLoading(true);
                try {
                  const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: "test@example.com", password: "123456" }),
                  });

                  if (!res.ok) throw new Error("Could not log in demo session");

                  router.replace("/");
                  router.refresh();
                } catch (err) {
                  setError((err as Error).message);
                } finally {
                  setLoading(false);
                }
              }}
            >
              Login as a demo user
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="text-slate-500 text-xs mt-6">
        © {new Date().getFullYear()} My SaaS Admin. All rights reserved.
      </p>
    </div>
  );
}
