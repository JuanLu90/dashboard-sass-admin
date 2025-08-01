"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { apiFetch } from "@/lib/apiClient";
import { PlansResponse } from "@/types/plans";
import PricingFeatureComparisonSkeleton from "./PricingFeatureComparisonSkeleton";

export default function PricingFeatureComparison() {
  const [data, setData] = React.useState<PlansResponse | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    apiFetch<PlansResponse>("/api/plans")
      .then((plans) => setData(plans))
      .catch((err) => console.error("Failed to fetch plans", err))
      .finally(() => setLoading(false));
  }, []);

  if (!data || loading) return <PricingFeatureComparisonSkeleton />;

  return (
    <div className="overflow-x-auto bg-gray-900 rounded-xl border border-gray-700">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-300">Features</th>
            {data?.plans.map((plan) => (
              <th key={plan.name} className="px-4 py-3 font-semibold text-gray-300">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.featureList.map((feature) => (
            <tr key={feature} className="border-t border-gray-700 last:border-b">
              <td className="px-4 py-2 font-medium text-gray-400">{feature}</td>
              {data.plans.map((plan) => (
                <td key={plan.name} className="px-4 py-2 text-center">
                  {plan.features[feature as keyof typeof plan.features] ? (
                    <Check className="text-green-400 mx-auto" size={18} />
                  ) : (
                    <X className="text-gray-500 mx-auto" size={18} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
