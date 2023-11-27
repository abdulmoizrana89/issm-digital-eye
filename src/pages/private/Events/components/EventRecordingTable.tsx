import { useMemo } from "react";

import { Checkbox } from "../../../../components/ui/checkbox";
import { DataTable } from "../../../../components/ExampleTable/components/data-table";
import { DataTableColumnHeader } from "../../../../components/ExampleTable/components/data-table-column-header";
import { CustomIconButton } from "../../../../components";

const columns: any = [
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
      <DataTableColumnHeader column={column} title="S.NO" />
    ),
    cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start TIME" />
    ),
    // cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="END TIME" />
    ),
    // cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DATE" />
    ),
    // cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "device",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DEVICE" />
    ),
    // cell: ({ row }) => <div className="w-full">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
];

const dummyDataSource = [
  {
    id: 0,
    startTime: "06:41 PM",
    endTime: "07:41 PM",
    date: "12/08/2023",
  },
];
const EventRecordingsTable: React.FC<any> = ({ data = dummyDataSource }) => {
  const tableColumns = useMemo(
    () => [
      {
        id: "view",
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Show Camera" />
        ),
        cell: () => <div className="w-full flex">View</div>,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "edit",
        cell: () => (
          <CustomIconButton icon="iconamoon:edit-light" onClick={() => {}} />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    ],
    []
  );

  const eventRecordingsTableColumns = useMemo(
    () => [...columns, ...tableColumns],
    [tableColumns]
  );
  return (
    <DataTable
      data={data}
      columns={eventRecordingsTableColumns}
      onRowSelect={() => {}}
    />
  );
};

export default EventRecordingsTable;
