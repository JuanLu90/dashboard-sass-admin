"use client";

import { homeDoughnutChart } from "@/data/charts/homeDoughnutChart";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function HomeLineChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Doughnut data={homeDoughnutChart} options={options} />;
}
