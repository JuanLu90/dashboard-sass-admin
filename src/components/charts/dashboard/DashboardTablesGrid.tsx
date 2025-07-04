"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardTablesGridSkeleton from "./DashboardTablesGridSkeleton";
import { DashboardTableGrid } from "@/types/dashboard";

const statusColors: Record<string, string> = {
  Active: "bg-green-900 text-green-400",
  Pending: "bg-yellow-900 text-yellow-400",
  Closed: "bg-gray-700 text-gray-300",
  Open: "bg-blue-900 text-blue-400",
};

const priorityColors: Record<string, string> = {
  Low: "bg-gray-700 text-gray-200",
  Medium: "bg-yellow-900 text-yellow-400",
  High: "bg-orange-900 text-orange-400",
  Critical: "bg-red-900 text-red-400",
};

export default function DashboardTablesGrid() {
  const [data, setData] = useState<DashboardTableGrid | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mock-recent-grid")
      .then((res) => res.json())
      .then((data: DashboardTableGrid) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading || !data) return <DashboardTablesGridSkeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gray-800 border-none shadow-none">
        <CardContent className="px-6">
          <div className="text-gray-300 font-bold mb-4">Recent Users</div>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Name
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Plan
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.recentUsers.map((u) => (
                <tr key={u.id}>
                  <td className="py-1 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`${u.avatar}&format=png`}
                        alt={u.name}
                        width={30}
                        height={30}
                        className="rounded-full border border-gray-700 object-cover"
                      />
                      <span>{u.name}</span>
                    </div>
                  </td>

                  <td className="py-1 text-gray-300">{u.plan}</td>
                  <td className="py-1">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        statusColors[u.status] || "bg-gray-700 text-gray-200"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-none shadow-none">
        <CardContent className="px-6">
          <div className="text-gray-300 font-bold mb-4">
            Recent Subscriptions
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-normal text-gray-400 pb-1">
                  User
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Plan
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.recentSubscriptions.map((s) => (
                <tr key={s.id}>
                  <td className="py-1 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`${s.avatar}&format=png`}
                        alt={s.user}
                        width={30}
                        height={30}
                        className="rounded-full border border-gray-700 object-cover"
                      />
                      <span>{s.user}</span>
                    </div>
                  </td>
                  <td className="py-1 text-gray-300">{s.plan}</td>
                  <td className="py-1">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        statusColors[s.status] || "bg-gray-700 text-gray-200"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-none shadow-none">
        <CardContent className="px-6">
          <div className="text-gray-300 font-bold mb-4">Recent Incidents</div>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-normal text-gray-400 pb-1">
                  User
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Subject
                </th>
                <th className="text-left font-normal text-gray-400 pb-1">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.recentIncidents.map((i) => (
                <tr key={i.id}>
                  <td className="py-1 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`${i.avatar}&format=png`}
                        alt={i.user}
                        width={30}
                        height={30}
                        className="rounded-full border border-gray-700 object-cover"
                      />
                      <span>{i.user}</span>
                    </div>
                  </td>
                  <td className="py-1 text-gray-300">{i.subject}</td>
                  <td className="py-1">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        priorityColors[i.priority] ||
                        "bg-gray-700 text-gray-200"
                      }`}
                    >
                      {i.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
