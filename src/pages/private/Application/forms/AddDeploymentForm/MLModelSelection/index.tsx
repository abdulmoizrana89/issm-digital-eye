import { Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const MLModelSelection = () => {
  const [appName, setAppName] = useState<string>("");
  return (
    <Flex className="p-[30px] flex-col gap-y-5">
      <Flex className="w-[61%] justify-between items-center">
        <Text>Name</Text>
        <Select
          bg="#F9F9F9"
          borderRadius="4px"
          focusBorderColor="#ABACAC"
          width="400px"
          placeholder="Application Name"
          onChange={(event) => {
            setAppName(event.target.value);
          }}
        >
          <option value="Mask Detection">Mask Detection</option>
        </Select>
      </Flex>
      {appName != "" && (
        <>
          <Flex className="w-[61%] justify-between items-center">
            <Text>Application Category</Text>
            <Input width="400px" />
          </Flex>
          <Flex className="w-[61%] justify-between items-center">
            <Text>Model Name</Text>
            <Input width="400px" />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default MLModelSelection;
