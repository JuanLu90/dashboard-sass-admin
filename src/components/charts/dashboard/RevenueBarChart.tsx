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
import { useEffect, useState } from "react";
import RevenueBarChartSkeleton from "./RevenueBarChartSkeleton";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type RevenuePerMonth = {
  month: string;
  revenue: number;
};

type RevenueBarChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
};

export default function RevenueBarChart() {
  const [data, setData] = useState<RevenueBarChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mock-revenue-per-month")
      .then((res) => res.json())
      .then((data: RevenuePerMonth[]) => {
        setData({
          labels: data.map((d) => d.month),
          datasets: [
            {
              label: "Revenue",
              data: data.map((d) => d.revenue),
              backgroundColor: "#3b82f6",
              borderRadius: 8,
            },
          ],
        });
        setLoading(false);
      });
  }, []);

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

  if (loading || !data) return <RevenueBarChartSkeleton />;

  return (
    <div className="bg-gray-800 rounded-xl p-6 pb-16 h-72 flex flex-col">
      <div className="text-gray-300 font-bold mb-6">Monthly Revenue</div>
      <Bar data={data} options={options} />
    </div>
  );
}
