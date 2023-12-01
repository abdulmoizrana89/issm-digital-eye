import { useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import optionsVertical from "@iconify/icons-mi/options-vertical";
import searchIcon from "@iconify/icons-carbon/search";

import {
  CustomIcon,
  ColumnChartComponent,
  PackageTypeBreakdownChart,
  SplineChartComponent,
  PieChartComponent,
} from "../../../components";
import { Random } from "../../../assets";
import TableComponent from "./Table";

const Analytics = () => {
  const chartData = [
    {
      name: "",
      data: [
        120, 150, 180, 170, 110, 130, 160, 140, 110, 130, 150, 180, 170, 110,
        130, 160, 140, 110, 130, 150,
      ],
    },
  ];

  const percentageChartData = [
    { name: "CD 5672", data: [80, 10, 40] },
    { name: "CD 5673", data: [65, 30, 70] },
    { name: "CD 5674", data: [75, 55, 10] },
  ];

  const pieChartData = {
    name: "Orientation",
    data: [
      { name: "Perfectly Oriented", y: 60, color: "#4DFFDF" },
      { name: "Slightly Misaligned", y: 25, color: "#F178B6" },
      { name: "Significantly Misaligned", y: 15, color: "#4DBEF5" },
    ],
  };

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
    <div className="flex pt-10 px-10">
      <div className="flex-[60%]">
        <Text className="font-semibold text-[26px]">Analytics</Text>
        <div className="w-[80%] mt-10 flex flex-col gap-y-1">
          <Text>Application Name</Text>
          <Select
            bg="#F9F9F9"
            borderRadius="4px"
            focusBorderColor="#ABACAC"
            placeholder="Application Name"
          >
            {/* <option value="Alpha">Alpha</option> */}
          </Select>
          <Flex className="justify-between mt-5">
            <Box className="border-[1px] h-[160px] w-[32%]">
              <Flex className="justify-end p-1">
                <CustomIcon
                  icon={optionsVertical}
                  fontSize="24px"
                  color="#C5C5C5"
                  //   onClick={() => { }}
                />
              </Flex>
              <div className="px-5">
                <Text className="font-semibold text-[50px]">100</Text>
                <Text className="font-semibold text-[16px]">
                  Production Pre Minute
                </Text>
              </div>
            </Box>

            <Box className="border-[1px] h-[160px] w-[32%]">
              <Flex className="justify-end p-1">
                <CustomIcon
                  icon={optionsVertical}
                  fontSize="24px"
                  color="#C5C5C5"
                  //   onClick={() => { }}
                />
              </Flex>
              <div className="px-5">
                <Text className="text-[50px] text-[#13465B]">6000</Text>
                <Text className="font-semibold text-[16px]">
                  Avg. Production Per Day
                </Text>
              </div>
            </Box>

            <Box className="border-[1px] h-[160px] w-[32%]">
              <Flex className="justify-end p-1">
                <CustomIcon
                  icon={optionsVertical}
                  fontSize="24px"
                  color="#C5C5C5"
                  //   onClick={() => { }}
                />
              </Flex>
              <div className="px-5">
                <Flex className="items-end h-fit">
                  <Text className="text-[50px] text-[#13465B]">
                    89<sub>%</sub>
                  </Text>
                </Flex>
                <Text className="font-semibold text-[16px]">
                  Production Rate
                </Text>
              </div>
            </Box>
          </Flex>
        </div>
        <Box className="my-[3%] flex justify-evenly">
          <Box className="w-[59%]">
            <ColumnChartComponent title="Sales and Revenue" data={chartData} />
          </Box>
          <Box className="w-[39%]">
            <PackageTypeBreakdownChart data={percentageChartData} />
          </Box>
        </Box>

        <Box className="my-[3%] flex justify-evenly">
          <Box className="w-[59%]">
            <SplineChartComponent month="September 2023" />
          </Box>
          <Box className="w-[39%]">
            <PieChartComponent data={pieChartData} />
          </Box>
        </Box>
      </div>
      <div className="flex-[40%] mt-[82px] border-2 p-4 h-full w-full overflow-hidden flex flex-col items-center justify-center gap-y-3">
        <video width="640px" height="360px" autoPlay loop muted>
          <source src={Random} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Divider />
        <Flex className="flex-col gap-y-2">
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<CustomIcon icon={searchIcon} />}
            />
            <Input type="text" placeholder="Search" className="rounded-[3px]" />
          </InputGroup>
          <TableComponent data={data} />
        </Flex>
        <Divider />

        <Box className="flex w-full flex-wrap">
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
            <Text className="text-[18px] text-[#13465B] font-bold">
              End Time
            </Text>
            <Text className="text-[17px] text-[#13465B] ">--</Text>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Analytics;
