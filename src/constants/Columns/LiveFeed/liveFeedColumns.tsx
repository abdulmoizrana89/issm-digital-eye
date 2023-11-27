import { ColumnDef } from "@tanstack/react-table";

import { LiveFeed } from "@/src/components/ExampleTable/data/schema";
import { DataTableColumnHeader } from "../../../components/ExampleTable/components/data-table-column-header";

export const liveFeedColumns: ColumnDef<LiveFeed>[] = [
  {
    accessorKey: "object_detected",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Object Detected" />
    ),
    cell: ({ row }) => row.getValue("object_detected"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "object_count",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Object Count" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Stamp" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
