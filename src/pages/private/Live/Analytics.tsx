import { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

import TableComponent from "../Analytics/Table";
import { SearchField, SplineChartComponent } from "../../../components";

const Analytics = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState([
    {
      objectDetected: "Cement Type 1",
      objectCount: 3,
      timestamp: "2023-09-01T12:00:00Z",
    },
    {
      objectDetected: "Cement Type 2",
      objectCount: 5,
      timestamp: "2023-09-01T12:05:00Z",
    },
    {
      objectDetected: "Cement Type 3",
      objectCount: 2,
      timestamp: "2023-09-01T12:10:00Z",
    },
    {
      objectDetected: "Cement Type 4",
      objectCount: 3,
      timestamp: "2023-09-01T12:10:00Z",
    },
    {
      objectDetected: "Cement Type 4",
      objectCount: 1,
      timestamp: "2023-09-01T12:10:00Z",
    },
    {
      objectDetected: "Cement Type 5",
      objectCount: 8,
      timestamp: "2023-09-01T12:10:00Z",
    },
  ]);

  return (
    <VStack gap={5}>
      <SearchField searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <Box
        w="full"
        border="4px"
        borderColor="gray.100"
        borderTopColor="#4E5C73"
        borderRadius={5}
        overflow="hidden"
      >
        <TableComponent data={data} />
      </Box>

      <Box
        w="full"
        border="1px"
        borderColor="gray.100"
        borderRadius={5}
        overflow="hidden"
        className="flex w-full flex-wrap"
      >
        <Box className="flex w-[50%] justify-between items-center px-2">
          <Text className="text-[18px] text-[#13465B] font-bold">Date</Text>
          <Text className="text-[17px] text-[#13465B] ">29/08/2023</Text>
        </Box>
        <Box className="flex w-[50%] justify-between items-center  px-2">
          <Text className="text-[18px] text-[#13465B] font-bold">
            Starting Time
          </Text>
          <Text className="text-[17px] text-[#13465B] ">09:00:00 AM</Text>
        </Box>
        <Box className="flex w-[50%] justify-between items-center px-2">
          <Text className="text-[18px] text-[#13465B] font-bold">End Time</Text>
          <Text className="text-[17px] text-[#13465B] ">--</Text>
        </Box>
      </Box>

      <Box
        w="full"
        border="1px"
        borderColor="gray.100"
        borderRadius={5}
        overflow="hidden"
      >
        <SplineChartComponent month="September 2023" />
      </Box>
    </VStack>
  );
};

export default Analytics;
