"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { revenuePerMonth } from "@/data/dashboard/revenuePerMonth";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: revenuePerMonth.map((d) => d.month),
  datasets: [
    {
      label: "Revenue",
      data: revenuePerMonth.map((d) => d.revenue),
      backgroundColor: "#3b82f6",
      borderRadius: 8,
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

export default function RevenueBarChart() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 pb-16 h-72 flex flex-col">
      <div className="text-gray-300 font-bold mb-6">Monthly Revenue</div>
      <Bar data={data} options={options} />
    </div>
  );
}
