"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  PlusCircle,
  DollarSign,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const iconMap = {
  users: Users,
  "plus-circle": PlusCircle,
  "dollar-sign": DollarSign,
  "refresh-cw": RefreshCw,
};

type DashboardKpisSet = {
  title: string;
  value: number;
  icon: string;
  change: number;
  caption: string;
  prefix?: string;
  suffix?: string;
};

export default function KpiCardsGrid() {
  const [data, setData] = useState<DashboardKpisSet[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mock-cards-kpi")
      .then((res) => res.json())
      .then((data: DashboardKpisSet[]) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="bg-gray-800 border-none shadow-none flex flex-col justify-between"
          >
            <CardContent className="flex justify-between items-center">
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-10 w-28 mb-4" />
                <div className="flex items-center gap-2 mt-3">
                  <Skeleton className="h-5 w-16 rounded" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <div className="bg-gray-700 rounded-full p-3 flex items-center justify-center ml-6">
                <Skeleton className="w-6 h-6 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

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
                  {typeof kpi.value === "number"
                    ? kpi.value.toLocaleString()
                    : kpi.value}
                  {kpi.suffix}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                      ${
                        isPositive
                          ? "bg-green-900 text-green-400"
                          : "bg-red-900 text-red-400"
                      }`}
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
