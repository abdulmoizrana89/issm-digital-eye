import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import DeviceListingMainSection from "./MainSection";
import { DeviceListingSideBar } from "./components/DeviceListingSidebar";

export type menuItem = {
  label: string;
  id?: number;
  children?: menuItem[];
};
// TODO: replace this with the api data
const deviceListingMenu = [
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
];

const getMenuItemById = (id: number, items: any): menuItem | null => {
  for (const element of items) {
    if (element.children) {
      const result = getMenuItemById(id, element.children);
      if (result) {
        return result;
      }
    } else {
      if (element?.id === id) return element;
    }
  }
  return null;
};

export const getDefaultMenuItem = (menuItems: menuItem): menuItem => {
  if (!menuItems.children) return menuItems;
  return getDefaultMenuItem(menuItems.children[0]);
};

const DeviceListing = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<menuItem | null>(null);

  useEffect(() => {
    // TODO: not sure, whats will be the best way to handle the below scenario
    // when user visit device listing page directly from side drawer
    // and when user visits it from category info view all devices button
    const id = searchParams.get("id");
    if (id) {
      setSelectedItem(getMenuItemById(+id, deviceListingMenu));
    } else {
      setSelectedItem(getDefaultMenuItem(deviceListingMenu[0]));
    }
  }, [deviceListingMenu]);

  const onMenuItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <Grid
      templateColumns={isCollapsed ? "0.20fr 11.80fr" : "2.5fr 9.5fr"}
      transition={"grid-template-columns 0.5s"}
      minH="full"
      className="bg-white"
    >
      <GridItem position="relative" pr={3} overflowX="hidden">
        <DeviceListingSideBar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          searchFn={() => {}}
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
