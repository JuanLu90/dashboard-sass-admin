"use client";

import { homeBarChartData } from "@/data/charts/homeBarChartData";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

export default function HomeBarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Bar data={homeBarChartData} options={options} />;
}
