import { Flex, Box, Text } from "@chakra-ui/react";
import { sidebarData } from "../../constants/sidebar.data";
import { CustomIcon } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Sidebar = ({ depth = 0 }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectDrawerItem = (item: any) => {
    const { path = "/" } = item;
    navigate(path);
  };

  const selectedItem = useMemo(() => {
    const pathname = location.pathname;
    const splitedPaths = pathname.split("/");
    return splitedPaths[depth + 1];
  }, [location, depth]);

  return (
    <Box className="h-full bg-gray-100 border-r-2 px-2 py-10 sticky">
      {sidebarData.map((item, index) => {
        const isSelected = selectedItem === item.key;
        return (
          <Box
            key={`${item.key}-${index}`}
            className={`px-5 py-2 rounded-lg cursor-pointer hover:bg-white ${
              isSelected ? "bg-white border-2" : ""
            }`}
            onClick={() => handleSelectDrawerItem(item)}
          >
            <Flex className={`flex items-center gap-2`}>
              <Flex>
                <CustomIcon
                  icon={item.icon}
                  className="text-lg text-gray-600"
                />
              </Flex>
              <Text className="font-Inter text-gray-600 text-lg">
                {item.label}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Sidebar;
