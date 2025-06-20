"use client";

import { homeBarChartData } from "@/data/charts/homeBarChartData";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

export default function HomeBarChart() {
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

  return <Line data={homeBarChartData} options={options} />;
}
