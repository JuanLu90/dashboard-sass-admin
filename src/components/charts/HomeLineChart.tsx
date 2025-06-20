"use client";

import { homeLineChartData } from "@/data/charts/homeLineChartData";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

export default function HomeLineChart() {
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Line data={homeLineChartData} options={options} />;
}
