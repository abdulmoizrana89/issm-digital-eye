import { Flex, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { CustomIcon } from "../../components";
import bellOutline from "@iconify/icons-mdi/bell-outline";

const Navbar = () => {
  return (
    <Flex className="w-full bg-primary rounded-none px-8 py-3 justify-between items-center fixed z-50">
      <Text className="text-[18px] font-Inter text-white">Digital Eye</Text>
      <Flex className="items-center gap-3">
        <CustomIcon icon={bellOutline} fontSize="24px" color="white" />
        <Avatar
          size="sm"
          className="border-[1px] font-Inter"
          name="A"
          bg="none"
          w="35px"
          h="35px"
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
      </Flex>
    </Flex>
  );
};

export default Navbar;
