import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "../../../components/ui/checkbox";
import { AppDeployment } from "@/src/components/";
import { DataTableColumnHeader } from "../../../components/ExampleTable/components/data-table-column-header";
import { Badge } from "@chakra-ui/react";
// import { DataTableRowActions } from "@/src/components/ExampleTable/components/data-table-row-actions";

export const AppDeploymentsColumns: ColumnDef<AppDeployment>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="w-full capitalize">{row.getValue("name")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "appName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Application Name" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("appName")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created On" />
    ),
    cell: ({ row }) => (
      <div className="w-full">{row.getValue("createdOn")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "implementedOn",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="w-full flex justify-center"
        title="Implemented On"
      />
    ),
    cell: ({ row }) => (
      <div className="w-full flex justify-center">
        <Badge 
            py="2px" 
            px="20px" 
            rounded="10px" 
            colorScheme="green"
        >
          {row.getValue("implementedOn")}
        </Badge>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "videoFeed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Video Feed" />
    ),
    cell: ({ row }) => (
      <div className="w-full">{row.getValue("videoFeed")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
