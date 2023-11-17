import useStore from "../../../store";
import { Text, Box, Flex, Code } from "@chakra-ui/react";
import { CustomIcon } from "../../../components";

function Home() {
  const { selectedComponent } = useStore();

  const handleCopyCode = (code: any) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box className="w-full h-full">
      <Flex className="flex items-center mt-10">
        <Text className=" text-3xl font-Inter capitalize">
          {selectedComponent.label}
        </Text>
      </Flex>
      <Text className=" text-[16 px] font-Inter first-line mt-5 mb-10">
        {selectedComponent.description}
      </Text>

      <CustomIcon icon={selectedComponent.icon} fontSize="60px" color="black" />

      <Text className=" text-[20px] font-Inter">Code</Text>
      <Code className="font-Inter w-fit bg-black overflow-scroll h-[500px] flex-col">
        <pre className="bg-black text-white text-[14px] flex-col p-10 relative">
          <CustomIcon
            icon="bi:copy"
            fontSize="30px"
            color="white"
            className=" absolute right-1 top-1 cursor-pointer"
            onClick={() => handleCopyCode(selectedComponent.code)}
          />
          {selectedComponent.code}
        </pre>
      </Code>
    </Box>
  );
}

export default Home;
