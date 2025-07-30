import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const res = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Login failed" }, { status: 401 });
  }

  const { access_token } = await res.json();

  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("token", access_token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return response;
}
