"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { usersRecentMock } from "@/data/dashboard/usersRecentMock";
import { MoreVertical } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const statusColor: Record<string, string> = {
  Active: "bg-green-900 text-green-400",
  Inactive: "bg-red-900 text-red-400",
  Pending: "bg-yellow-900 text-yellow-400",
};

type User = (typeof usersRecentMock)[number];

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
            width={35}
            height={35}
            className="rounded-full object-cover border border-gray-700"
          />
          <span className="font-medium">{row.name}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "signup",
    header: "Signup Date",
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
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
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <button className="ml-auto bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
        <MoreVertical size={18} className="text-gray-300" />
      </button>
    ),
  },
];

export default function RecentUsersTable() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const pageSize = 5;

  const table = useReactTable({
    data: usersRecentMock,
    columns,
    state: { pagination: { pageIndex, pageSize } },
    getCoreRowModel: getCoreRowModel(),
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
    pageCount: Math.ceil(usersRecentMock.length / pageSize),
  });

  return (
    <div className="bg-gray-800 rounded-xl p-4 w-full">
      <div className="text-sm font-medium text-gray-400 mb-2">Recent Users</div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
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
      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-3">
        <button
          className="px-3 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>
        <span className="text-xs text-gray-400">
          Page {pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          className="px-3 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
