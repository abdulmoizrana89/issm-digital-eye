import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import collapseIcon from "@iconify/icons-ic/arrow-drop-up";
import expandIcon from "@iconify/icons-ic/arrow-drop-down";
import lineIcon from "@iconify/icons-pepicons-pencil/line-y";
import expandIconSidebar from "@iconify/icons-material-symbols/chevron-left";

import { CustomIcon, SearchField } from "../../../../components";
import { menuItem } from "..";

// TODO: will replace this with the layout sidebar after adding dropdown for children element
type DeviceListingSideBarProps = {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  listingMenu: menuItem[];
  item: menuItem | null;
  accessorKey: string;
  onItemClick: (menuItem: menuItem) => void;
  searchFn?: () => void;
};

export const DeviceListingSideBar: React.FC<DeviceListingSideBarProps> = ({
  isCollapsed,
  setIsCollapsed,
  listingMenu,
  item,
  accessorKey,
  onItemClick,
  searchFn,
}) => {
  const getMenu = (menu: any, depth = 0) => {
    return menu.map((listingItem: any, index: number) => {
      return getMenuItem(listingItem, index, depth);
    });
  };

  const getMenuItem = (menuItem: any, index: number, depth: number) => {
    const hasChildren = menuItem.children;
    const subMenu = hasChildren ? getMenu(menuItem.children, depth + 1) : "";

    return (
      <MenuItem
        accessorKey={accessorKey}
        selectedItem={item}
        menuItem={menuItem}
        depth={depth}
        key={`${depth}-${index}`}
        onClick={onItemClick}
      >
        {subMenu}
      </MenuItem>
    );
  };

  return (
    <>
      <CustomIcon
        icon={expandIconSidebar}
        className={`absolute w-6 h-6 top-2 right-0 z-50 bg-white border-2 rounded-full transition-all duration-500 ${
          isCollapsed ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Box className="h-full border-r-2 px-2 py-10 overflow-hidden">
        {/* conditionally hiding search field on collapse to avoid access it through keyboard */}
        <Box
          ml={2}
          {...(isCollapsed ? { visibility: "hidden" } : "")}
          className="transition-all duration-150"
        >
          <SearchField searchTerm="" onSearchTermChange={() => {}} />
        </Box>

        <Box overflowX="hidden" className={`ml-2 py-2 rounded-lg`}>
          {getMenu(listingMenu)}
        </Box>
      </Box>
    </>
  );
};

type MenuItemProps = {
  menuItem: menuItem | any;
  depth: number;
  children: any;
  onClick: (menuItem: menuItem) => void;
  selectedItem: menuItem | null | any;
  accessorKey: string;
};
const MenuItem: React.FC<MenuItemProps> = ({
  menuItem,
  depth,
  children,
  onClick,
  selectedItem,
  accessorKey,
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const hasChildren = !!children;

  const handleItemClick = () => {
    if (hasChildren) {
      setIsCollapse(!isCollapse);
      return;
    }
    onClick(menuItem);
  };

  const isSelected =
    selectedItem && selectedItem?.[accessorKey] === menuItem[accessorKey];

  let bgColor = depth === 1 ? "#F1F4F7" : "transparent";
  bgColor = isSelected ? "white" : bgColor;

  return (
    <>
      <Box
        onClick={handleItemClick}
        className="cursor-pointer"
        bg={bgColor}
        borderTopRadius={5}
        p={1}
        mt={depth === 1 ? 1 : 0}
        _last={{ borderBottomRadius: 5 }}
      >
        <Flex alignItems="center" gap={1}>
          {hasChildren ? (
            <CustomIcon icon={isCollapse ? collapseIcon : expandIcon} />
          ) : (
            <CustomIcon icon={lineIcon} fontSize="xl" />
          )}
          <Text whiteSpace="nowrap">{menuItem.label}</Text>
        </Flex>
      </Box>
      {hasChildren && !isCollapse ? (
        <Box
          bg={depth === 1 ? "#F1F4F7" : "transparent"}
          borderBottomRadius={5}
        >
          <Box ml={3} pr={3}>
            {depth === 1 ? (
              <Text className="text-sm text-[#696969]">{children}</Text>
            ) : (
              <Text>{children}</Text>
            )}
          </Box>
        </Box>
      ) : null}
    </>
  );
};
