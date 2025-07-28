import KpiCardsGrid from "@/components/charts/dashboard/KpiCardsGrid";
import ActiveUsersLineChart from "@/components/charts/dashboard/ActiveUsersLineChart";
import PlanDistributionDoughnut from "@/components/charts/dashboard/PlanDistributionDoughnut";
import RevenueBarChart from "@/components/charts/dashboard/RevenueBarChart";
import DashboardTablesGrid from "@/components/charts/dashboard/DashboardTablesGrid";

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
