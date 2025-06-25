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
        display: false,
      },
    },
  };

  const labels = [
    {
      label: "Chrome",
      color: "#4285f4",
      value: 4306,
      badge: "+12%",
      badgeType: "up",
    },
    {
      label: "Firefox",
      color: "#fbbc05",
      value: 3801,
      badge: "-3%",
      badgeType: "down",
    },
    { label: "Edge", color: "#ea4335", value: 1689 },
    { label: "Other", color: "#3ED05B", value: 3251 },
  ];

  return (
    <div className="mt-15">
      <div>
        <Doughnut data={homeDoughnutChart} options={options} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          margin: 25,
        }}
      >
        {labels.map(({ label, color, value, badge, badgeType }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: "1px solid #343f50",
              paddingBottom: 6,
              paddingTop: 6,
              fontSize: 14,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 14,
                height: 14,
                background: color,
                borderRadius: "50%",
                marginRight: 8,
              }}
            />
            <span style={{ color: "#fff", minWidth: 70 }}>{label}</span>
            {badge && (
              <span
                style={{
                  background: badgeType === "up" ? "#14b8a6" : "#ef4444",
                  color: "#fff",
                  fontSize: 12,
                  borderRadius: 5,
                  padding: "1px 7px",
                  marginRight: 8,
                  marginLeft: 2,
                  fontWeight: 600,
                  opacity: 0.85,
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </span>
            )}
            <span
              style={{
                color: "#fff",
                marginLeft: "auto",
                fontWeight: 500,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
