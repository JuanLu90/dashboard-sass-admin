"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import PlanDistributionDoughnutSkeleton from "./PlanDistributionDoughnutSkeleton";
import { PlansDistributionChartData } from "@/types/dashboard";
import { COLOR_WHITE } from "@/lib/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: COLOR_WHITE } },
  },
};

export default function PlanDistributionDoughnut() {
  const [data, setData] = useState<PlansDistributionChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mock-plans-distribution")
      .then((res) => res.json())
      .then((data: PlansDistributionChartData) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading || !data) return <PlanDistributionDoughnutSkeleton />;

  return (
    <div className="bg-gray-800 rounded-xl p-6 h-72 flex flex-col">
      <div className="text-gray-300 font-bold mb-2">Plan Distribution</div>
      <div className="flex-1 flex items-center justify-center">
        <div className="h-52">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
