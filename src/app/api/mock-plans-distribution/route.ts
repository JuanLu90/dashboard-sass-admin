import { COLOR_BLUE_500, COLOR_CYAN_500, COLOR_INDIGO_500, COLOR_PURPLE_800 } from "@/lib/colors";
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
        backgroundColor: [COLOR_BLUE_500, COLOR_INDIGO_500, COLOR_CYAN_500, COLOR_PURPLE_800],
        borderWidth: 0,
      },
    ],
  };

  return Response.json(data);
}
