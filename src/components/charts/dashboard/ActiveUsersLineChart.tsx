"use client";

import { useEffect, useState } from "react";
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
import ActiveUsersLineChartSkeleton from "./ActiveUsersLineChartSkeleton";
import { ActiveUserDay, LineChartData } from "@/types/dashboard";
import { COLOR_BLUE_500, COLOR_GRAY_700, COLOR_WHITE } from "@/lib/colors";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function ActiveUsersLineChartCSR() {
  const [data, setData] = useState<LineChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mock-active-users")
      .then((res) => res.json())
      .then((days: ActiveUserDay[]) => {
        setData({
          labels: days.map((d) => d.date),
          datasets: [
            {
              label: "Active Users",
              data: days.map((d) => d.users),
              borderColor: COLOR_BLUE_500,
              backgroundColor: COLOR_BLUE_500,
              fill: true,
              tension: 0.4,
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

  if (loading || !data) return <ActiveUsersLineChartSkeleton />;

  return (
    <div className="bg-gray-800 rounded-xl p-6 pb-18 h-72">
      <div className="text-gray-300 font-bold mb-8">
        Active Users (last 30 days)
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
