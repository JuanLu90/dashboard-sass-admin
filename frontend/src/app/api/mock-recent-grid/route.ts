import { randomDelay } from "@/lib/utils";
import { dashboardTablesData } from "@/data/dashboard/dashboardTablesMock";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  return Response.json(dashboardTablesData);
}
