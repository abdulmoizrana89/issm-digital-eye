// import React from 'react'
import { ColumnDef } from "@tanstack/react-table";
import { Text } from "@chakra-ui/react";
import roundEdit from "@iconify/icons-ic/round-edit";

import { CustomIcon, DataTable, AppCategory } from "./../../../../components";

import { mockAppCategoryData, AppCategoryColumns } from "../../../../constants";

const AppCategories = () => {
  const iconsCol: ColumnDef<AppCategory> = {
    id: "icons",

    cell: ({ row }) => (
      <div className="flex gap-x-2">
        <CustomIcon
          icon={roundEdit}
          fontSize="24px"
          color="#C5C5C5"
          onClick={() => {
            // handleEdit(row);
          }}
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  };

  const newColumns = [...AppCategoryColumns, iconsCol];

  return (
    <div className="pt-10 px-10">
      <Text className="font-semibold text-[26px]">Event Logs</Text>
      <DataTable
        data={mockAppCategoryData}
        columns={newColumns}
        onRowSelect={(row) => {
          console.log(row);
        }}
      />
    </div>
  );
};

export default AppCategories;
