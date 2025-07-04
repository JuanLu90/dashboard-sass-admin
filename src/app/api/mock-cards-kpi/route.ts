import { randomDelay } from "@/lib/utils";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  const dashboardKpis = [
    {
      title: "Active Users",
      value: 2382,
      icon: "users",
      change: -3.65,
      caption: "Since last month",
    },
    {
      title: "New Subscriptions",
      value: 154,
      icon: "plus-circle",
      change: 6.21,
      caption: "Since last month",
    },
    {
      title: "Revenue",
      value: 21300,
      icon: "dollar-sign",
      change: 4.83,
      caption: "Since last month",
      prefix: "$",
    },
    {
      title: "Retention Rate",
      value: 92.4,
      icon: "refresh-cw",
      change: 1.2,
      caption: "Since last month",
      suffix: "%",
    },
  ];

  return Response.json(dashboardKpis);
}
