"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import PlanDistributionDoughnutSkeleton from "./PlanDistributionDoughnutSkeleton";
// import { PlansDistributionChartData } from "@/types/dashboard";
import { COLOR_WHITE } from "@/lib/colors";
import { apiFetch } from "@/lib/apiClient";
import { COLOR_BLUE_500, COLOR_INDIGO_500, COLOR_CYAN_500, COLOR_PURPLE_800 } from "@/lib/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: COLOR_WHITE } },
  },
};

const COLORS = [COLOR_BLUE_500, COLOR_INDIGO_500, COLOR_CYAN_500, COLOR_PURPLE_800];

type PlanData = {
  plans: { plan: string; count: number }[];
};

export default function PlanDistributionDoughnut() {
  const [data, setData] = useState<PlanData | null>(null);

  useEffect(() => {
    apiFetch<PlanData>("/api/dashboard/plans-distribution").then(setData).catch(console.error);
  }, []);

  const chartData = {
    labels: data?.plans.map((p) => p.plan),
    datasets: [
      {
        data: data?.plans.map((p) => p.count),
        backgroundColor: COLORS,
        borderWidth: 0,
      },
    ],
  };

  if (!data) return <PlanDistributionDoughnutSkeleton />;

  return (
    <div className="bg-gray-800 rounded-xl p-6 h-72 flex flex-col">
      <div className="text-gray-300 font-bold mb-2">Plan Distribution</div>
      <div className="flex-1 flex items-center justify-center">
        <div className="h-52">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
