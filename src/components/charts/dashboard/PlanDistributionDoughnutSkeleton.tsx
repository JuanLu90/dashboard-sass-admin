import { Skeleton } from "@/components/ui/skeleton";

export default function PlanDistributionDoughnutSkeleton() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 h-72 flex flex-col items-center justify-center">
      <Skeleton className="h-7 w-32 mb-8" />
      <div className="relative">
        <Skeleton className="rounded-full w-36 h-36" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Skeleton className="rounded-full w-20 h-20 bg-gray-900" />
        </div>
      </div>
    </div>
  );
}
