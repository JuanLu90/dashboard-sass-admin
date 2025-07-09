import { generateDays, randomDelay } from "@/lib/utils";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  return Response.json(generateDays());
}
