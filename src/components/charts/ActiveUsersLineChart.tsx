// /components/charts/ActiveUsersLineChart.tsx

"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { activeUsersPerDay } from "@/data/charts/activeUsersPerDay";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: activeUsersPerDay.map((d) => d.date),
  datasets: [
    {
      label: "Active Users",
      data: activeUsersPerDay.map((d) => d.users),
      borderColor: "#3b82f6", // Tailwind blue-500
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { ticks: { color: "#fff" }, grid: { color: "#334155" } },
    x: { ticks: { color: "#fff" }, grid: { display: false } },
  },
};

export default function ActiveUsersLineChart() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 pb-18 h-72">
      <div className="text-gray-300 font-bold mb-8">
        Active Users (last 30 days)
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
