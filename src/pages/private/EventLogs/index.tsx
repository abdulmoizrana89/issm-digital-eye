// import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Text } from "@chakra-ui/react";

import {
  DataTable,
  DataTableColumnHeader,
  EventLog,
} from "./../../../components";

import { mockEventLogData, eventLogColumns } from "../../../constants";

const EventLogs = () => {
  const viewBtnCol: ColumnDef<EventLog> = {
    id: "view",
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recordings" />
    ),
    cell: () => <div className="w-full flex">View</div>,
    enableSorting: false,
    enableHiding: false,
  };

  const newColumns = [...eventLogColumns, viewBtnCol];

  return (
    <div className="pt-10 px-10">
      <Text className="font-semibold text-[26px]">Event Logs</Text>
      <DataTable
        data={mockEventLogData}
        columns={newColumns}
        onRowSelect={(row) => {
          console.log(row);
        }}
      />
    </div>
  );
};

export default EventLogs;
