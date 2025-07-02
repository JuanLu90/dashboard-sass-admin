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

export default function Home() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
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
