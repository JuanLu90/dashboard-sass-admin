// import HomeLineChart from "@/components/charts/HomeLineChart";
import HomeDoughnutChart from "@/components/charts/HomeDoughnutChart";
// import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
// import { ShoppingCart, DollarSign, Users, CreditCard } from "lucide-react";
import RecentUsersTable from "@/components/tables/RecentUsersTable";
import KpiCardsGrid from "@/components/charts/KpiCardsGrid";

export const metadata: Metadata = {
  title: "Dashboard Sass Admin",
  description: "Dashboard Sass Admin",
};

// const stats = [
//   {
//     title: "Sales",
//     value: "2,382",
//     icon: <ShoppingCart className="w-5 h-5" />,
//     change: "-3.65%",
//     changeType: "down",
//     caption: "Since last week",
//   },
//   {
//     title: "Earnings",
//     value: "$21,300",
//     icon: <DollarSign className="w-5 h-5" />,
//     change: "6.65%",
//     changeType: "up",
//     caption: "Since last week",
//   },
//   {
//     title: "Visitors",
//     value: "14,212",
//     icon: <Users className="w-5 h-5" />,
//     change: "5.25%",
//     changeType: "up",
//     caption: "Since last week",
//   },
//   {
//     title: "Orders",
//     value: "64",
//     icon: <CreditCard className="w-5 h-5" />,
//     change: "-2.25%",
//     changeType: "down",
//     caption: "Since last week",
//   },
// ];

export default function Home() {
  return (
    <div className="grid gap-6">
      <div className="text-md font-medium text-gray-400">Analytics</div>
      <div className="grid gap-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="bg-gray-800 border-none shadow-none p-0"
            >
              <CardContent className="flex justify-between items-center p-4 h-40">
                <div>
                  <div className="text-gray-300 font-medium">{stat.title}</div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        stat.changeType === "up"
                          ? "bg-green-900 text-green-400"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-400">
                      {stat.caption}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-full p-3 flex items-center justify-center">
                  {stat.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <KpiCardsGrid />
        {/* <div className="bg-gray-800 rounded-xl p-2">
          <HomeLineChart />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-4 col-span-3">
          <RecentUsersTable />
        </div>
        <div className="bg-gray-800 rounded-xl p-2">
          <div className="text-md font-medium text-gray-400">Analytics</div>

          <HomeDoughnutChart />
        </div>
      </div>
    </div>
  );
}
