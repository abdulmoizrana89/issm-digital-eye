import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { CustomBtn } from "../../../../../../components";

const EventSelection = () => {
  return (
    <Flex className="py-[30px] flex-col gap-y-5">
      <Flex className="px-[30px] justify-between">
        <Flex className="w-[86%] justify-between items-center">
          <Text>Select Event</Text>
          <Input width="680px" placeholder="Search" />
        </Flex>
        <CustomBtn
          title="Add"
          color="secondaryBtn"
          borderColor="secondary.10"
          bgColor="secondary.10"
          textColor="#fff"
          height="40px"
          width="120px"
          isLoading={false}
        />
      </Flex>
      <Box className="bg-[#F1F4F7] rounded-[3px] overflow-y-scroll h-[300px]">
        <Box className="bg-[#F1F4F7] rounded-[3px] p-[30px] flex flex-col gap-y-3 ">
          <Box>
            <Text>Event Name</Text>
            <Input backgroundColor="white" />
          </Box>
          <Box>
            <Text>Event Notification</Text>
            <Textarea height="150px" backgroundColor="white" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default EventSelection;
