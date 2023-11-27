import { useEffect, useMemo, useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import collapseIcon from "@iconify/icons-ic/arrow-drop-up";
import expandIcon from "@iconify/icons-ic/arrow-drop-down";
import lineIcon from "@iconify/icons-pepicons-pencil/line-y";

import { CustomIcon, SearchField } from "../../../components";
import DeviceListingMainSection from "./MainSection";

export type menuItem = {
  label: string;
  id?: number;
  children?: menuItem[];
};

export const getDefaultMenuItem = (menuItems: menuItem): menuItem => {
  if (!menuItems.children) return menuItems;
  return getDefaultMenuItem(menuItems.children[0]);
};

const DeviceListing = () => {
  const [selectedItem, setSelectedItem] = useState<menuItem | null>(null);
  // TODO: replace this with the api data
  const deviceListingMenu = useMemo(
    () => [
      {
        label: "Office 1",
        children: [
          {
            label: "Category 1",
            children: [
              { label: "First Floor", id: 1 },
              { label: "Second Floor", id: 2 },
              { label: "Third Floor", id: 3 },
            ],
          },
          {
            label: "Category 2",
            children: [
              { label: "First Floor", id: 4 },
              { label: "Second Floor", id: 5 },
              { label: "Third Floor", id: 6 },
            ],
          },
        ],
      },
      {
        label: "Office 2",
        children: [
          {
            label: "Category 1",
            children: [
              { label: "First Floor", id: 7 },
              { label: "Second Floor", id: 8 },
              { label: "Third Floor", id: 9 },
            ],
          },
        ],
      },
      {
        label: "Office 3",
        children: [
          {
            label: "Category 1",
            children: [
              { label: "First Floor", id: 10 },
              { label: "Second Floor", id: 11 },
              { label: "Third Floor", id: 12 },
            ],
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const defaultMenuItem = getDefaultMenuItem(deviceListingMenu[0]);
    if (!!defaultMenuItem) {
      setSelectedItem(defaultMenuItem);
    }
  }, [deviceListingMenu]);

  const onMenuItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <Grid templateColumns="2fr 10fr" minH="full">
      <GridItem>
        <DeviceListingSideBar
          listingMenu={deviceListingMenu}
          item={selectedItem}
          accessorKey="id"
          onItemClick={onMenuItemClick}
        />
      </GridItem>
      <GridItem>
        <DeviceListingMainSection item={selectedItem} />
      </GridItem>
    </Grid>
  );
};

export default DeviceListing;

// TODO: will replace this with the layout sidebar after adding dropdown for children element
type DeviceListingSideBarProps = {
  listingMenu: menuItem[];
  item: menuItem | null;
  accessorKey: string;
  onItemClick: (menuItem: menuItem) => void;
  searchFn?: () => void;
};
export const DeviceListingSideBar: React.FC<DeviceListingSideBarProps> = ({
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
    <Box className="h-full w-full bg-gray-100 border-r-2 px-2 py-10 sticky">
      {searchFn ? (
        <SearchField searchTerm="" onSearchTermChange={() => {}} />
      ) : null}
      <Box className={`px-1 py-2 rounded-lg`}>{getMenu(listingMenu)}</Box>
    </Box>
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

  const handleItemCick = () => {
    if (hasChildren) {
      setIsCollapse(!isCollapse);
      return;
    }
    onClick(menuItem);
  };

  const isSelected =
    selectedItem && selectedItem?.[accessorKey] === menuItem[accessorKey];

  let bgColor = depth === 1 ? "gray.200" : "transparent";
  bgColor = isSelected ? "white" : bgColor;

  return (
    <Box>
      <Box
        onClick={handleItemCick}
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
          {menuItem.label}
        </Flex>
      </Box>
      {hasChildren && !isCollapse ? (
        <Box
          bg={depth === 1 ? "gray.200" : "transparent"}
          borderBottomRadius={5}
        >
          <Box ml={3}>{children}</Box>
        </Box>
      ) : null}
    </Box>
  );
};
