import { Skeleton } from "@/components/ui/skeleton";
interface TableSkeletonProps {
  rows?: number;
  cols?: number;
}

export default function UsersTableSkeleton({ rows = 5, cols = 5 }: TableSkeletonProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-2 pb-0 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {Array.from({ length: cols }).map((_, i) => (
              <th key={i} className="px-4 py-2">
                <Skeleton className="h-5 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-700">
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <Skeleton className="h-7 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-2 mt-3">
        <Skeleton className="h-8 w-16 rounded" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-16 rounded" />
      </div>
    </div>
  );
}
