import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { usersMock } from "../../../tests/mocks/users/usersMock";
import { COLOR_BLUE_500, COLOR_GRAY_700, COLOR_WHITE } from "@/lib/colors";

const planStats = Object.entries(
  usersMock.reduce((acc, user) => {
    acc[user.plan] = (acc[user.plan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
);

const data = {
  labels: planStats.map(([plan]) => plan),
  datasets: [
    {
      label: "Users by Plan",
      data: planStats.map(([, count]) => count),
      backgroundColor: COLOR_BLUE_500,
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { ticks: { color: COLOR_WHITE }, grid: { color: COLOR_GRAY_700 } },
    x: { ticks: { color: COLOR_WHITE }, grid: { display: false } },
  },
};

export default function UsersByPlanBar() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  return (
    <div className="bg-gray-800 rounded-xl p-4 h-64">
      <div className="text-sm font-medium text-gray-400 mb-2">Users by Plan</div>
      <Bar data={data} options={options} />
    </div>
  );
}
