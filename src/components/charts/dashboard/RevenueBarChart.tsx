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
import { RevenueBarChartData, RevenuePerMonth } from "@/types/dashboard";
import { COLOR_BLUE_500, COLOR_GRAY_700, COLOR_WHITE } from "@/lib/colors";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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
              backgroundColor: COLOR_BLUE_500,
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
      y: { ticks: { color: COLOR_WHITE }, grid: { color: COLOR_GRAY_700 } },
      x: { ticks: { color: COLOR_WHITE }, grid: { display: false } },
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
