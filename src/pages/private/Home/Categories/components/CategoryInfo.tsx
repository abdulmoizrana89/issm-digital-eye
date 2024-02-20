import { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";

import { CustomBtn, SearchField } from "../../../../../components";
import TableComponent from "../../components/Table";

const AddDeviceModal = lazy(() => import("../../components/AddDeviceModal"));

const tableData = [
  {
    id: "1",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "2",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "3",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "4",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "5",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "6",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "7",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
  {
    id: "8",
    deviceName: "First cam",
    ip: "192.168.12.28",
    streamURL: "",
  },
];

const CategoryInfo = ({ subCategory }: { subCategory: any }) => {
  const { label, id } = subCategory;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, onSearchTermChange] = useState<string>("");

  return (
    <Box h="full" w="full">
      <VStack p={2}>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Text className="font-semibold text-[#4F5D75] text-lg">{label}</Text>
          <Button
            bgGradient="linear(161deg, #FF5574, #EF5350)"
            borderRadius={5}
            fontSize={14}
            fontWeight="normal"
            color="#FFFFFF"
            w="20%"
            onClick={onOpen}
          >
            Add Device
          </Button>
        </Flex>

        <SearchField
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
        />
        <Box w="full" h="35vh" overflow="auto">
          <TableComponent data={tableData} />
        </Box>
      </VStack>
      <Flex justifyContent="center" p={2}>
        <CustomBtn
          bgColor="#FFF"
          width="full"
          color="#696969"
          borderColor="#D7D7D7"
          textColor="#696969"
          title="View All Devices"
          onClick={() => {
            navigate(`/device-listing?id=${id}`);
          }}
        />
      </Flex>
      <Divider mt={2} />
      <Box w="full" p={2}>
        <video className="w-full" controls />
      </Box>
      {isOpen ? (
        <AddDeviceModal mode="add" isOpen={isOpen} onClose={onClose} />
      ) : null}
    </Box>
  );
};

export default CategoryInfo;
