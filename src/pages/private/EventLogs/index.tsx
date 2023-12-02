import { ColumnDef } from "@tanstack/react-table";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import searchIcon from "@iconify/icons-carbon/search";

import {
  CustomBtn,
  CustomIcon,
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

      <Flex className="py-7 gap-x-2 items-center">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<CustomIcon icon={searchIcon} />}
          />
          <Input type="text" placeholder="Search" className="rounded-[3px]" />
        </InputGroup>
        <CustomBtn
          title="Filter"
          color="slate-200"
          borderColor="gray"
          textColor="gray"
          height="38px"
          width="120px"
          isLoading={false}
        />
      </Flex>

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
