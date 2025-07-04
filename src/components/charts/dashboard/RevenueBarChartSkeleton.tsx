import { Skeleton } from "../../ui/skeleton";

export default function RevenueBarChartSkeleton() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 h-72 flex flex-col justify-center">
      <Skeleton className="h-6 w-2/3 mb-6" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}
