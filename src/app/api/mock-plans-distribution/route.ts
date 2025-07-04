import { randomDelay } from "@/lib/utils";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  const plansDistribution = [
    { plan: "Free", count: 730 },
    { plan: "Basic", count: 560 },
    { plan: "Pro", count: 940 },
    { plan: "Enterprise", count: 152 },
  ];

  const data = {
    labels: plansDistribution.map((d) => d.plan),
    datasets: [
      {
        data: plansDistribution.map((d) => d.count),
        backgroundColor: ["#3b82f6", "#6366f1", "#06b6d4", "#a21caf"],
        borderWidth: 0,
      },
    ],
  };

  return Response.json(data);
}
