"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { planDistribution } from "@/data/planDistribution";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: planDistribution.map((d) => d.plan),
  datasets: [
    {
      data: planDistribution.map((d) => d.count),
      backgroundColor: ["#3b82f6", "#6366f1", "#06b6d4", "#a21caf"],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: "#fff" } },
  },
};

export default function PlanDistributionDoughnut() {
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
