// UsersByPlanBar.tsx

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { usersMock } from "../../data/users/usersMock";

const planStats = Object.entries(
  usersMock.reduce((acc, user) => {
    acc[user.plan] = (acc[user.plan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
);

const data = {
  labels: planStats.map(([plan]) => plan),
  datasets: [
    {
      label: "Users by Plan",
      data: planStats.map(([, count]) => count),
      backgroundColor: "#3b82f6",
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { ticks: { color: "#fff" }, grid: { color: "#334155" } },
    x: { ticks: { color: "#fff" }, grid: { display: false } },
  },
};

export default function UsersByPlanBar() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  return (
    <div className="bg-gray-800 rounded-xl p-4 h-64">
      <div className="text-sm font-medium text-gray-400 mb-2">
        Users by Plan
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
