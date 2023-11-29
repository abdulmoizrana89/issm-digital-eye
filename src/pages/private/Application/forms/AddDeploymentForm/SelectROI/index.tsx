import { ROI } from "../../../../../../assets";
import { CustomBtn } from "../../../../../../components";
import {
  Box,
  Checkbox,
  Flex,
  Input,
  Select,
  Text,
  Image,
} from "@chakra-ui/react";

const SelectROI = () => {
  return (
    <Flex className="p-[30px] justify-between">
      <Box className=" w-[50%] flex flex-col gap-y-3 h-[300px]">
        <Flex className="justify-between items-center">
          <Text className=" ">Name</Text>
          <Input width="360px" />
        </Flex>
        <Flex className="justify-between items-center">
          <Text>Region Type</Text>
          <Select
            bg="#F9F9F9"
            borderRadius="4px"
            focusBorderColor="#ABACAC"
            width="360px"
            placeholder="Select"
          >
            <option value="Rectangle / line">Rectangle / line</option>
          </Select>
        </Flex>
        <Flex className="justify-end">
          <Checkbox>Crop ROI</Checkbox>
        </Flex>
      </Box>
      <Box className="w-[48%] h-[300px]">
        <Image src={ROI} alt="image" objectFit="cover" />
        <Flex className="flex-wrap justify-between gap-y-2 mt-5">
          <CustomBtn
            title="Get Live View"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
          <CustomBtn
            title="Fetch"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
          <CustomBtn
            title="Clear"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
          <CustomBtn
            title="Done"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default SelectROI;
