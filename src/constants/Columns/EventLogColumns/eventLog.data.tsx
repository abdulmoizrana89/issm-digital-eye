import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "../../../components/ui/checkbox";
import { EventLog } from "@/src/components/ExampleTable/data/schema";
import { DataTableColumnHeader } from "../../../components/ExampleTable/components/data-table-column-header";
// import { DataTableRowActions } from "@/src/components/ExampleTable/components/data-table-row-actions";

export const eventLogColumns: ColumnDef<EventLog>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] border-primary-110"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] border-primary-110"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SR NO" />
    ),
    cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "eventName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event Name" />
    ),
    cell: ({ row }) => (
      <div className="w-full capitalize">{row.getValue("eventName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "eventTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event Time" />
    ),
    cell: ({ row }) => (
      <div className="w-full">{row.getValue("eventTime")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("date")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "device",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("device")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
];
