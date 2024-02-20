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
  AppDeployment,
  CustomBtn,
} from "./../../../../components";

import {
  mockAppDeploymentsData,
  AppDeploymentsColumns,
} from "../../../../constants";
import { AddDeploymentForm } from "../forms";

const AppDeployments = () => {
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
        <div></div>
      </CustomModal>

      <Text className="text-2xl font-bold text-[#4F5D75] pb-5">
        Application Deployments
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
