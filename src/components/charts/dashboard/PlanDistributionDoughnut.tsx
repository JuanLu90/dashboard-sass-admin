"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: "#fff" } },
  },
};

type PlansDistributionDataset = {
  data: number[];
  backgroundColor: string[];
  borderWidth: number;
};

type PlansDistributionChartData = {
  labels: string[];
  datasets: PlansDistributionDataset[];
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

  if (loading || !data) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 h-72 flex flex-col items-center justify-center">
        <Skeleton className="h-7 w-32 mb-8" />
        <div className="relative">
          <Skeleton className="rounded-full w-36 h-36" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Skeleton className="rounded-full w-20 h-20 bg-gray-900" />
          </div>
        </div>
      </div>
    );
  }

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
