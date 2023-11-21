import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex className="w-full h-full px-4 bg-black items-center justify-between">
      <Flex className="items-center gap-3">
        <Text className="text-white text-lg font-Inter">Digital Eye</Text>
      </Flex>
      <Text className="text-white text-3xl font-Inte text-center">
        Frontend Boilerplate
      </Text>
    </Flex>
  );
};

export default Navbar;
