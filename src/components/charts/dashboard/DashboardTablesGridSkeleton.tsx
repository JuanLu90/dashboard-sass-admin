import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function DashboardTablesGridSkeleton() {
  const rowCount = 3;
  const headerCount = 3;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[0, 1, 2].map((cardIdx) => (
        <Card key={cardIdx} className="bg-gray-800 border-none shadow-none">
          <CardContent className="px-6">
            <Skeleton className="h-6 w-40 mb-4" />
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {[...Array(headerCount)].map((_, thIdx) => (
                    <th key={thIdx} className="text-left font-normal text-gray-400 pb-1">
                      <Skeleton className="h-4 w-16" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(rowCount)].map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="py-1">
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-[30px] h-[30px] rounded-full border border-gray-700" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </td>
                    <td className="py-1">
                      <Skeleton className="h-4 w-16" />
                    </td>
                    <td className="py-1">
                      <Skeleton className="h-5 w-14 rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
