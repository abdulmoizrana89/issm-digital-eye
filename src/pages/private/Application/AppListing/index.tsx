import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import roundEdit from "@iconify/icons-ic/round-edit";
import searchIcon from "@iconify/icons-carbon/search";

import {
  CustomModal,
  CustomIcon,
  DataTable,
  AppListing,
  CustomBtn,
} from "./../../../../components";

import { mockAppListingsData, AppListingsColumns } from "../../../../constants";
import { EditApplicationForm, AddApplicationForm } from "../forms";

const AppListings = () => {
  //   const [rowID, setRowID] = useState<number>();
  const [rowInfo, setRowInfo] = useState<{
    name: string;
    category: string;
    description: string;
    model: string;
  }>({ name: "", category: "", description: "", model: "" });

  const {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();

  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure();

  const handleAdd = () => {
    addOnOpen();
  };

  const handleEdit = (row: any) => {
    setRowInfo({
      name: row.getValue("name"),
      description: "Lorem Ipsum",
      category: "Facial Detection",
      model: row.getValue("model"),
    });
    console.log(rowInfo);
    editOnOpen();
  };

  const editCol: ColumnDef<AppListing> = {
    id: "icons",

    cell: ({ row }) => (
      <div className="flex gap-x-2">
        <CustomIcon
          icon={roundEdit}
          fontSize="20px"
          color="#C5C5C5"
          onClick={() => {
            handleEdit(row);
          }}
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  };

  const newColumns = [...AppListingsColumns, editCol];

  return (
    <div className="pt-10 px-10">
      <CustomModal
        title="Add New Application"
        isOpen={addIsOpen}
        onClose={addOnClose}
      >
        <AddApplicationForm onClose={addOnClose} />
      </CustomModal>
      <CustomModal
        title="Edit Application"
        isOpen={editIsOpen}
        onClose={editOnClose}
      >
        <EditApplicationForm onClose={editOnClose} rowInfo={rowInfo} />
      </CustomModal>

      <Text className="text-2xl font-bold text-[#4F5D75] pb-5">
        Application Listing
      </Text>

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
          bgColor="#F9FAFC"
          color="slate-200"
          borderColor="#d7d7d7"
          textColor="#696969"
          height="38px"
          width="120px"
          isLoading={false}
        />
        <CustomBtn
          title="Add Application"
          color="secondaryBtn"
          borderColor="secondary.10"
          bgColor="secondary.10"
          textColor="#fff"
          height="38px"
          width="140px"
          isLoading={false}
          onClick={() => handleAdd()}
        />
      </Flex>

      <DataTable
        data={mockAppListingsData}
        columns={newColumns}
        onRowSelect={(row) => {
          console.log(row);
        }}
      />
    </div>
  );
};

export default AppListings;
