import { Flex, Box, Text, GridItem } from "@chakra-ui/react";
import { sidebarData } from "../../constants/sidebar.data";
import { CustomIcon } from "../../components";
import useStore from "../../store";

const Sidebar = () => {
  const { setSelectedComponent } = useStore();

  const handleSelectedComponent = (component: any) => {
    setSelectedComponent(component);
  };

  return (
    <GridItem>
      <Box className=" h-full border-r-2 p-10 fixed">
        {sidebarData.map((item, index) => {
          return (
            <Flex
              key={index}
              className="flex items-center gap-10 cursor-pointer hover:bg-gray-200 rounded-lg"
              onClick={() => handleSelectedComponent(item)}
            >
              <Flex>
                <CustomIcon icon={item.icon} fontSize="30px" color="black" />
              </Flex>
              <Text className=" text-[20px] font-Inter">{item.label}</Text>
            </Flex>
          );
        })}
      </Box>
    </GridItem>
  );
};

export default Sidebar;
