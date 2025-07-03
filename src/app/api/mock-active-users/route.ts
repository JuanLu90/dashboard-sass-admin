import randomDelay from "@/app/utils/randomDelay";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));
  const days = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(2, 10),
    users: 80 + Math.floor(Math.random() * 40),
  }));
  return Response.json(days);
}
