import Logo from "../../assets/images/ISSMlogo.png";

import { Flex, Text, Image } from "@chakra-ui/react";


const Navbar = () => {





  return (
    <Flex className="w-full p-8 bg-black items-center justify-center fixed ">
      <Flex className="items-center gap-3 left-2 fixed">
        <Image src={Logo} alt="ISSM Logo" className=" w-[20px]" />
        <Text className="text-white text-lg font-Inter">ISSM AI</Text>
      </Flex>
      <Text className="text-white text-3xl font-Inte text-center">Frontend Boilerplate</Text>
    </Flex>
  );
};

export default Navbar;
