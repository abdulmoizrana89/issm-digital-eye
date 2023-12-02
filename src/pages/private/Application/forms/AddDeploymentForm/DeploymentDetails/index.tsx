import { Flex, Input, Text, Textarea } from "@chakra-ui/react";

const DeploymentDetails = () => {
  return (
    <Flex className="p-[30px] flex-col gap-y-5">
      <Flex className="w-[55%] justify-between items-center">
        <Text>Name</Text>
        <Input width="400px" placeholder="Name" />
      </Flex>
      <Flex className="w-[55%] justify-between">
        <Text>Description</Text>
        <Textarea height="150px" width="400px" placeholder="Description" />
      </Flex>
    </Flex>
  );
};

export default DeploymentDetails;
