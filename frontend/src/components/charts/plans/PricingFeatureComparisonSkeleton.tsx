import { Skeleton } from "@/components/ui/skeleton";

export default function PricingFeatureComparisonSkeleton() {
  return (
    <div className="overflow-x-auto bg-gray-900 rounded-xl border border-gray-700 p-4">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-300">Features</th>
            {[...Array(3)].map((_, i) => (
              <th key={i} className="px-4 py-3">
                <Skeleton className="h-6 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-700">
              <td className="px-4 py-2">
                <Skeleton className="h-5 w-32" />
              </td>
              {[...Array(3)].map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-center">
                  <Skeleton className="h-5 w-5 mx-auto rounded-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
