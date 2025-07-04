import randomDelay from "@/app/utils/randomDelay";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  const revenuePerMonth = [
    { month: "Jul", revenue: 19500 },
    { month: "Aug", revenue: 20800 },
    { month: "Sep", revenue: 22000 },
    { month: "Oct", revenue: 19800 },
    { month: "Nov", revenue: 21300 },
    { month: "Dec", revenue: 23200 },
    { month: "Jan", revenue: 24500 },
    { month: "Feb", revenue: 23800 },
    { month: "Mar", revenue: 25300 },
    { month: "Apr", revenue: 25900 },
    { month: "May", revenue: 26700 },
    { month: "Jun", revenue: 27300 },
  ];

  return Response.json(revenuePerMonth);
}
