"use client";

import {
  Users,
  PlusCircle,
  DollarSign,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import KpiCardsGridSkeleton from "./KpiCardsGridSkeleton";
import { DashboardKpisSet } from "@/types/dashboard";
import { apiFetch } from "@/lib/apiClient";

const iconMap = {
  users: Users,
  "plus-circle": PlusCircle,
  "dollar-sign": DollarSign,
  "refresh-cw": RefreshCw,
};

export default function KpiCardsGrid() {
  const [data, setData] = useState<DashboardKpisSet[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<DashboardKpisSet[]>("/api/dashboard/kpis")
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) return <KpiCardsGridSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.map((kpi) => {
        const Icon = iconMap[kpi.icon as keyof typeof iconMap] || Users;
        const isPositive = kpi.change >= 0;
        return (
          <Card
            key={kpi.title}
            className="bg-gray-800 border-none shadow-none flex flex-col justify-between"
          >
            <CardContent className="flex justify-between items-center">
              <div>
                <div className="text-gray-300 font-bold mb-4">{kpi.title}</div>
                <div className="text-3xl font-bold text-white mt-2 flex items-center gap-2">
                  {kpi.prefix}
                  {typeof kpi.value === "number" ? kpi.value.toLocaleString() : kpi.value}
                  {kpi.suffix}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                      ${isPositive ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"}`}
                  >
                    {isPositive ? (
                      <ArrowUpRight size={14} className="mr-1" />
                    ) : (
                      <ArrowDownRight size={14} className="mr-1" />
                    )}
                    {Math.abs(kpi.change)}%
                  </span>
                  <span className="text-xs text-gray-400">{kpi.caption}</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded-full p-3 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-300" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
