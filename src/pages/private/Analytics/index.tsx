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
import { Random, CEMENT_BAGS, BREADS } from "../../../assets";
import TableComponent from "./Table";

const Analytics = () => {
  const [video, setVideo] = useState(Random);
  const [chartData, setChartData] = useState([
    {
      name: "Avg. Daily Traffic Flow",
      data: [
        90, 80, 130, 140, 110, 60, 160, 140, 110, 190, 100, 150, 120, 140, 110,
        100, 110, 90, 80, 50,
      ],
    },
  ]);

  const [percentageChartData, setPercentageChartData] = useState({
    name: "Average Monthly Flow",
    data: [
      { name: "CD 5672", data: [80, 10, 40] },
      { name: "CD 5673", data: [65, 30, 70] },
      { name: "CD 5674", data: [75, 55, 10] },
    ],
  });

  const [pieChartData, setPieChartData] = useState({
    name: "Flow Ratio",
    data: [
      { name: "Perfectly Oriented", y: 60, color: "#4DFFDF" },
      { name: "Slightly Misaligned", y: 25, color: "#F178B6" },
      { name: "Significantly Misaligned", y: 15, color: "#4DBEF5" },
    ],
  });

  const [generalStats, setGeneralStats] = useState([
    {
      title: "Flow Per Minute",
      value: "10",
    },
    {
      title: "Avg. Flow Per Day",
      value: "10000",
    },
    {
      title: "Flow Rate",
      value: "46",
    },
  ]);

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

  const handleChange = (e) => {
    const { value } = e.target;
    if (value == 1) {
      setVideo(Random);
      setChartData([
        {
          name: "Avg. Daily Traffic Flow",
          data: [
            90, 80, 130, 140, 110, 60, 160, 140, 110, 190, 100, 150, 120, 140,
            110, 100, 110, 90, 80, 50,
          ],
        },
      ]);
      setPercentageChartData({
        data: [
          { name: "CD 6673", data: [50, 60, 20] },
          { name: "CD 1671", data: [61, 44, 90] },
          { name: "CD 1672", data: [11, 25, 80] },
        ],
        name: "Average Monthly Flow",
      });
      setPieChartData({
        name: "Flow Ratio",
        data: [
          { name: "Perfectly Oriented", y: 60, color: "#4DFFDF" },
          { name: "Slightly Misaligned", y: 25, color: "#F178B6" },
          { name: "Significantly Misaligned", y: 15, color: "#4DBEF5" },
        ],
      });
      setGeneralStats([
        {
          title: "Flow Per Minute",
          value: "10",
        },
        {
          title: "Avg. Flow Per Day",
          value: "10000",
        },
        {
          title: "Flow Rate",
          value: "46",
        },
      ]);
      setData([
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
    } else if (value == 2) {
      setVideo(CEMENT_BAGS);
      setChartData([
        {
          name: "Avg. Daily Production",
          data: [
            120, 150, 180, 170, 110, 130, 160, 140, 110, 130, 150, 180, 170,
            110, 130, 160, 140, 110, 130, 150,
          ],
        },
      ]);
      setPercentageChartData({
        data: [
          { name: "CD 5672", data: [80, 10, 40] },
          { name: "CD 5673", data: [65, 30, 70] },
          { name: "CD 5674", data: [75, 55, 10] },
        ],
        name: "Average Monthly Production",
      });
      setPieChartData({
        name: "Production Ratio",
        data: [
          { name: "Perfectly Oriented", y: 40, color: "#4DFFDF" },
          { name: "Slightly Misaligned", y: 15, color: "#F178B6" },
          { name: "Significantly Misaligned", y: 45, color: "#4DBEF5" },
        ],
      });
      setGeneralStats([
        {
          title: "Production Per Minute",
          value: "50",
        },
        {
          title: "Avg. Production Per Day",
          value: "7000",
        },
        {
          title: "Production Rate",
          value: "79",
        },
      ]);
      setData([
        {
          objectDetected: "Cement bag type 1",
          objectCount: 3,
          timestamp: "2023-09-01T12:00:00Z",
        },
        {
          objectDetected: "Cement bag type 2",
          objectCount: 5,
          timestamp: "2023-09-01T12:05:00Z",
        },
        {
          objectDetected: "Cement bag type 3",
          objectCount: 2,
          timestamp: "2023-09-01T12:10:00Z",
        },
        {
          objectDetected: "Cement bag type 4",
          objectCount: 2,
          timestamp: "2023-09-01T12:10:00Z",
        },
      ]);
    } else if (value == 3) {
      setVideo(BREADS);
      setChartData([
        {
          name: "Avg. Daily Production",
          data: [
            180, 120, 100, 90, 20, 190, 110, 190, 120, 100, 120, 140, 120, 100,
            110, 80, 90, 20, 10, 80,
          ],
        },
      ]);
      setPercentageChartData({
        data: [
          { name: "CD 5672", data: [10, 20, 30] },
          { name: "CD 5673", data: [85, 10, 20] },
          { name: "CD 5674", data: [15, 45, 90] },
        ],
        name: "Average Monthly Production",
      });
      setPieChartData({
        name: "Production Ratio",
        data: [
          { name: "Perfectly Oriented", y: 70, color: "#4DFFDF" },
          { name: "Slightly Misaligned", y: 10, color: "#F178B6" },
          { name: "Significantly Misaligned", y: 20, color: "#4DBEF5" },
        ],
      });
      setGeneralStats([
        {
          title: "Production Per Minute",
          value: "100",
        },
        {
          title: "Avg. Production Per Day",
          value: "6000",
        },
        {
          title: "Production Rate",
          value: "89",
        },
      ]);
      setData([
        {
          objectDetected: "Breads",
          objectCount: 1,
          timestamp: "2023-09-01T12:45:00Z",
        },
        {
          objectDetected: "Biscuits",
          objectCount: 1,
          timestamp: "2023-09-01T12:45:00Z",
        },
        {
          objectDetected: "Pizza Bread",
          objectCount: 10,
          timestamp: "2023-09-01T12:45:00Z",
        },
        {
          objectDetected: "Sandwich",
          objectCount: 10,
          timestamp: "2023-09-01T12:45:00Z",
        },
      ]);
    }
  };

  return (
    <div className="flex pt-10 px-10">
      <div className="flex-[60%]">
        <Text className="text-2xl font-bold text-[#4F5D75] pb-5">
          Analytics
        </Text>
        <div className="w-[80%] mt-10 flex flex-col gap-y-1">
          <Text>Application Name</Text>
          <Select
            bg="#F9F9F9"
            borderRadius="4px"
            focusBorderColor="#ABACAC"
            // placeholder="Application 1"
            onChange={handleChange}
          >
            <option value={1}>Application Car</option>
            <option value={2}>Application Cement</option>
            <option value={3}>Application Bakery</option>
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
                <Text className="text-[50px] text-[#13465B]">
                  {generalStats[0]?.value}
                </Text>
                <Text className="font-semibold text-[16px]">
                  {generalStats[0]?.title}
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
                <Text className="text-[50px] text-[#13465B]">
                  {generalStats[1]?.value}
                </Text>
                <Text className="font-semibold text-[16px]">
                  {generalStats[1]?.title}
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
                    {generalStats[2]?.value}
                    <sub>%</sub>
                  </Text>
                </Flex>
                <Text className="font-semibold text-[16px]">
                  {generalStats[2]?.title}
                </Text>
              </div>
            </Box>
          </Flex>
        </div>
        <Box className="my-[3%] flex justify-evenly">
          <Box className="w-[59%]">
            <ColumnChartComponent
              title="Sales and Revenue"
              data={chartData}
              name={chartData[0]?.name}
            />
          </Box>
          <Box className="w-[39%]">
            <PackageTypeBreakdownChart
              data={percentageChartData.data}
              name={percentageChartData.name}
            />
          </Box>
        </Box>

        <Box className="my-[3%] flex justify-evenly">
          <Box className="w-[59%]">
            <SplineChartComponent month="September 2023" />
          </Box>
          <Box className="w-[39%]">
            <PieChartComponent data={pieChartData} name={pieChartData.name} />
          </Box>
        </Box>
      </div>
      <div className="flex-[40%] mt-[82px] border-2 p-4 h-full w-full overflow-hidden flex flex-col items-center justify-center gap-y-3">
        <video key={video} width="640px" height="360px" autoPlay loop muted>
          <source src={video} type="video/mp4" />
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
