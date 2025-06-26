import { Metadata } from "next";
import KpiCardsGrid from "@/components/charts/KpiCardsGrid";
import ActiveUsersLineChart from "@/components/charts/ActiveUsersLineChart";
import PlanDistributionDoughnut from "@/components/charts/PlanDistributionDoughnut";
import RevenueBarChart from "@/components/charts/RevenueBarChart";
import DashboardTablesGrid from "@/components/charts/DashboardTablesGrid";

export const metadata: Metadata = {
  title: "Dashboard Sass Admin",
  description: "Dashboard Sass Admin",
};
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
        <KpiCardsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ActiveUsersLineChart />
          </div>
          <div className="lg:col-span-1">
            <PlanDistributionDoughnut />
          </div>
        </div>
        <RevenueBarChart />
      </div>
      <DashboardTablesGrid />
    </div>
  );
}
