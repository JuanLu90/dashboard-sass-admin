import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function KpiCardsGridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
      data-testid="kpi-skeleton"
    >
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="bg-gray-800 border-none shadow-none flex flex-col justify-between">
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
