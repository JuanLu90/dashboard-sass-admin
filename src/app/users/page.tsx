"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { usersMock } from "../../data/users/usersMock";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

const statusColor: Record<string, string> = {
  Active: "bg-green-900 text-green-400",
  Inactive: "bg-red-900 text-red-400",
  Pending: "bg-yellow-900 text-yellow-400",
};

type User = (typeof usersMock)[number];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => {
      const row = info.row.original as User;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={`${row.avatar}&format=png`}
            alt={row.name}
            width={30}
            height={30}
            className="w-8 h-8 rounded-full border border-gray-700 object-cover"
          />
          <span className="font-medium">{row.name}</span>
        </div>
      );
    },
  },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "signup", header: "Signup" },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const value = info.getValue() as string;
      return (
        <span
          className={`px-2 py-0.5 rounded text-xs font-semibold ${
            statusColor[value] || "bg-gray-700 text-gray-300"
          }`}
        >
          {value}
        </span>
      );
    },
  },
  { accessorKey: "plan", header: "Plan" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "lastActive", header: "Last Active" },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Button size="icon" variant="ghost" className="ml-auto">
        <MoreVertical size={18} className="text-gray-400" />
      </Button>
    ),
  },
];

export default function Users() {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string | undefined>();
  const [planFilter, setPlanFilter] = React.useState<string | undefined>();
  const [pageIndex, setPageIndex] = React.useState(0);
  const pageSize = 8;

  const filteredData = React.useMemo(() => {
    return usersMock.filter((user) => {
      const filterMatch =
        user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
        user.email.toLowerCase().includes(globalFilter.toLowerCase());
      const statusMatch = statusFilter ? user.status === statusFilter : true;
      const planMatch = planFilter ? user.plan === planFilter : true;
      return filterMatch && statusMatch && planMatch;
    });
  }, [globalFilter, statusFilter, planFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { pagination: { pageIndex, pageSize } },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const next = updater({ pageIndex, pageSize });
        setPageIndex(next.pageIndex);
      } else {
        setPageIndex(updater.pageIndex);
      }
    },
    manualPagination: false,
    pageCount: Math.ceil(filteredData.length / pageSize),
  });

  const statusOptions = Array.from(new Set(usersMock.map((u) => u.status)));
  const planOptions = Array.from(new Set(usersMock.map((u) => u.plan)));

  return (
    <div className="max-w-full w-full mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <div className="flex gap-2">
          <Input
            placeholder="Search name or email"
            value={globalFilter}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
              setPageIndex(0);
            }}
            className="w-52"
          />
          <Select
            value={statusFilter}
            onValueChange={(value: string) => {
              setStatusFilter(value === "all" ? undefined : value);
              setPageIndex(0);
            }}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {statusOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={planFilter}
            onValueChange={(value) => {
              setPlanFilter(value === "all" ? undefined : value);
              setPageIndex(0);
            }}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="All Plans" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
              {planOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="default" className="ml-2">
            New User
          </Button>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-2 overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-white">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end gap-2 mt-3">
          <Button
            variant="secondary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </Button>
          <span className="text-xs text-gray-400">
            Page {pageIndex + 1} of {table.getPageCount()}
          </span>
          <Button
            variant="secondary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
