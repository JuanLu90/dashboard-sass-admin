import { plansPricing, featureList } from "../../../data/plans/plansPricingMock";
import { Check, X } from "lucide-react";

export default function PricingFeatureComparison() {
  return (
    <div className="overflow-x-auto bg-gray-900 rounded-xl border border-gray-700">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-300">Features</th>
            {plansPricing.map((plan) => (
              <th key={plan.name} className="px-4 py-3 font-semibold text-gray-300">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureList.map((feature) => (
            <tr key={feature} className="border-t border-gray-700 last:border-b">
              <td className="px-4 py-2 font-medium text-gray-400">{feature}</td>
              {plansPricing.map((plan) => (
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
