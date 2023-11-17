import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "../../../components/ui/checkbox";
import { Employee } from "@/src/components/ExampleTable/data/schema";
import { DataTableColumnHeader } from "../../../components/ExampleTable/components/data-table-column-header";
// import { DataTableRowActions } from "@/src/components/ExampleTable/components/data-table-row-actions";

export const employeeColumns: ColumnDef<Employee>[] = [
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
      <DataTableColumnHeader column={column} title="NAME" />
    ),
    cell: ({ row }) => (
      <div className="w-full capitalize">
        {row.getValue("name") ? row.getValue("name") : "N/A"}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EMAIL" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("email")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="USERNAME" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("username")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "role_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ROLE" />
    ),
    cell: ({ row }) => (
      <div className="w-full">
        {row.getValue("role_id") == 1
          ? "Admin"
          : row.getValue("role_id") == 2
          ? "Reviewer"
          : "Annotator"}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "signup_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SIGNUP STATUS" />
    ),
    cell: ({ row }) => (
      <div
        className={`w-full flex p-1 justify-center items-center ${
          row.getValue("signup_status")
            ? "bg-[#4CAF50] bg-opacity-30"
            : "bg-[#FAE080]"
        } `}
      >
        {row.getValue("signup_status") ? "Complete" : "Pending"}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userActivity",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="USER ACTIVITY"
        className="w-full flex justify-center items-center"
      />
    ),
    cell: ({ row }) => (
      <div className="w-full flex justify-center items-center">
        {row.getValue("userActivity")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   id: "reset",
  //   cell: ({ row }) => (
  //     <CustomBtn
  //       title="Reset Password"
  //       textSize="10px"
  //       color="white"
  //       textColor="#616161"
  //       borderColor="#616161"
  //       width="100px"
  //       height="25px"
  //       borderRadius="3px"
  //       isLoading={false}
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   id: "delete",
  //   cell: ({ row }) => (
  //     <CustomIcon icon={trashOutline} fontSize="24px" color="#EB5160" />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
];
