import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import roundEdit from "@iconify/icons-ic/round-edit";

import {
  CustomModal,
  CustomIcon,
  DataTable,
  AppDeployment,
  CustomBtn,
} from "./../../../../components";

import {
  mockAppDeploymentsData,
  AppDeploymentsColumns,
} from "../../../../constants";
import { EditCategoryForm, AddDeploymentForm } from "../forms";

const AppDeployments = () => {
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

  const editCol: ColumnDef<AppDeployment> = {
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

  const newColumns = [...AppDeploymentsColumns, editCol];

  return (
    <div className="pt-10 px-10">
      <CustomModal
        title="Add New Deployment"
        size="5xl"
        isOpen={addIsOpen}
        onClose={addOnClose}
      >
        <AddDeploymentForm onClose={addOnClose} />
      </CustomModal>
      <CustomModal
        title="Edit Deployment"
        isOpen={editIsOpen}
        onClose={editOnClose}
      >
        <EditCategoryForm onClose={editOnClose} rowInfo={rowInfo} />
      </CustomModal>
      <Flex className="justify-between w-full">
        <Text className="font-semibold text-[26px]">
          Application Deployments
        </Text>
        <CustomBtn
          title="Add"
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
        data={mockAppDeploymentsData}
        columns={newColumns}
        onRowSelect={(row) => {
          console.log(row);
        }}
      />
    </div>
  );
};

export default AppDeployments;
