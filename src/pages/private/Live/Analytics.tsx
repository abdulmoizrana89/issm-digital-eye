import { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

import TableComponent from "../Analytics/Table";
import { SearchField, SplineChartComponent } from "../../../components";

const Analytics = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState([
    {
      objectDetected: "Car",
      objectCount: 3,
      timestamp: "2023-09-01T12:00:00Z",
    },
    {
      objectDetected: "Bike",
      objectCount: 5,
      timestamp: "2023-09-01T12:05:00Z",
    },
    {
      objectDetected: "Bus",
      objectCount: 2,
      timestamp: "2023-09-01T12:10:00Z",
    },
    {
      objectDetected: "Truck",
      objectCount: 1,
      timestamp: "2023-09-01T12:15:00Z",
    },
    {
      objectDetected: "Scooter",
      objectCount: 4,
      timestamp: "2023-09-01T12:20:00Z",
    },
    {
      objectDetected: "Pedestrian",
      objectCount: 6,
      timestamp: "2023-09-01T12:25:00Z",
    },
    {
      objectDetected: "Cyclist",
      objectCount: 3,
      timestamp: "2023-09-01T12:30:00Z",
    },
    {
      objectDetected: "Van",
      objectCount: 2,
      timestamp: "2023-09-01T12:35:00Z",
    },
    {
      objectDetected: "Motorbike",
      objectCount: 5,
      timestamp: "2023-09-01T12:40:00Z",
    },
    {
      objectDetected: "Trolley",
      objectCount: 1,
      timestamp: "2023-09-01T12:45:00Z",
    },
  ]);

  return (
    <VStack gap={5}>
      <SearchField searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <Box
        w="full"
        border="1px"
        borderColor="gray.100"
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
