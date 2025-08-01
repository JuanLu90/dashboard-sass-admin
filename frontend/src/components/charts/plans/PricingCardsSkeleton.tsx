import { Skeleton } from "@/components/ui/skeleton";

export default function PricingCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-900 rounded-xl shadow-md border border-gray-700 flex flex-col items-center p-8"
        >
          <Skeleton className="h-12 w-12 mb-4 rounded-full" />
          <Skeleton className="h-6 w-24 mb-2" />
          <Skeleton className="h-4 w-62 mb-2" />
          <Skeleton className="h-4 w-40 mb-6" />
          <Skeleton className="h-8 w-20 mb-6" />
          <Skeleton className="h-4 w-32 mb-6" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      ))}
    </div>
  );
}
