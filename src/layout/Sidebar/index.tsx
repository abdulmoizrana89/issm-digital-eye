import { useMemo, useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import expandIcon from "@iconify/icons-material-symbols/chevron-left";

import { sidebarData } from "../../constants/sidebar.data";
import { CustomIcon } from "../../components";
import useStore from "../../store";

type Menu = {
  key: string;
  component: string;
  label: string;
  icon: string;
  path: string;
  subMenu: {
    key: string;
    component: string;
    label: string;
    icon: string;
    path: string;
  }[];
};

const Sidebar = ({ depth = 0 }: any) => {
  const [selected, setSelected] = useState<Menu>();
  const location = useLocation();
  const navigate = useNavigate();
  const isCollapsed = useStore((state) => state.isCollapsed);
  const toggleCollapsed = useStore((state) => state.toggleCollapse);

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
    <>
      <CustomIcon
        icon={expandIcon}
        className={`absolute w-6 h-6 top-2 right-0 z-50 bg-white border-2 rounded-full transition-all duration-500 ${
          isCollapsed ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleCollapsed}
      />
      <Box
        bg="gray.100"
        className="h-full border-r-2 px-2 py-10"
        overflowX="hidden"
      >
        {sidebarData.map((item, index) => {
          const isSelected = selectedItem === item.key;
          return (
            <Box key={`${item.key}-${index}`}>
              <Flex
                className={`px-5 py-2 items-center gap-2 rounded-lg cursor-pointer border-2 border-transparent hover:bg-white ${
                  isSelected ? "bg-white border-2 border-gray-200" : ""
                }`}
                onClick={() => {
                  setSelected(item);
                  handleSelectDrawerItem(item);
                }}
              >
                <Box>
                  <CustomIcon
                    icon={item.icon}
                    className="text-xl text-gray-600"
                  />
                </Box>
                <Text
                  overflow="hidden"
                  whiteSpace="nowrap"
                  className={`font-Inter text-gray-600 text-lg ${
                    isSelected ? "text-[#4F5D75]" : ""
                  }`}
                >
                  {item.label}
                </Text>
              </Flex>
              {selected == item &&
                selected?.subMenu.map((subItem, subIndex) => {
                  const isSelected = selectedItem === subItem.key;
                  return (
                    <Box
                      key={`${item.key}-${index}-${subItem.key}-${subIndex}`}
                      className={`ml-7 px-5 py-2 rounded-lg cursor-pointer border-2 border-transparent hover:bg-white ${
                        isSelected ? "bg-white border-2 border-gray-200" : ""
                      }`}
                      onClick={() => handleSelectDrawerItem(subItem)}
                    >
                      <Flex className={`flex flex-end items-center gap-2`}>
                        <Text
                          overflow="hidden"
                          whiteSpace="nowrap"
                          className="font-Inter text-gray-600 text-lg"
                        >
                          {subItem.label}
                        </Text>
                      </Flex>
                    </Box>
                  );
                })}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Sidebar;
