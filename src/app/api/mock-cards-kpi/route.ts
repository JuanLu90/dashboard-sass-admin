import { dashboardKpis } from "@/data/dashboard/kpiCardsMock";
import { randomDelay } from "@/lib/utils";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  return Response.json(dashboardKpis);
}
