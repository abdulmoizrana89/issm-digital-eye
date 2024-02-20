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
  AppCategory,
  CustomBtn,
} from "./../../../../components";

import { mockAppCategoryData, AppCategoryColumns } from "../../../../constants";
import { EditCategoryForm, AddCategoryForm } from "../forms";

const AppCategories = () => {
  //   const [rowID, setRowID] = useState<number>();
  const [rowInfo, setRowInfo] = useState<{
    category: string;
    description: string;
  }>({ category: "", description: "" });

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
      category: row.getValue("category"),
      description: row.getValue("description"),
    });
    console.log(rowInfo);
    editOnOpen();
  };

  const editCol: ColumnDef<AppCategory> = {
    id: "icons",

    cell: ({ row }) => (
      <div className="flex gap-x-2">
        <CustomIcon
          icon={roundEdit}
          fontSize="24px"
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

  const newColumns = [...AppCategoryColumns, editCol];

  return (
    <div className="pt-10 px-10">
      <CustomModal
        title="Add New Application Category"
        isOpen={addIsOpen}
        onClose={addOnClose}
      >
        <AddCategoryForm onClose={addOnClose} />
      </CustomModal>
      <CustomModal
        title="Edit Application Category"
        isOpen={editIsOpen}
        onClose={editOnClose}
      >
        <EditCategoryForm onClose={editOnClose} rowInfo={rowInfo} />
      </CustomModal>

      <Text className="text-2xl font-bold text-[#4F5D75] pb-5">
        Application Categories
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
          color="slate-200"
          borderColor="gray"
          textColor="gray"
          height="38px"
          width="120px"
          isLoading={false}
        />
        <CustomBtn
          title="Add Category"
          color="secondaryBtn"
          borderColor="secondary.10"
          bgColor="secondary.10"
          textColor="#fff"
          height="38px"
          width="120px"
          isLoading={false}
          onClick={() => handleAdd()}
        />
      </Flex>

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
