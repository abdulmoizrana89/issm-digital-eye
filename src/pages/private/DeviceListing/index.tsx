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
          {
            label: "First Floor",
            id: 1,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Meeting 1",
                ip: "192.168.10.28",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Meeting 2",
                ip: "192.168.10.29",
              },
              {
                id: "3",
                thumbnail: "",
                name: "Meeting 3",
                ip: "192.168.10.30",
              },
              {
                id: "4",
                thumbnail: "",
                name: "Meeting 4",
                ip: "192.168.10.31",
              },
              {
                id: "5",
                thumbnail: "",
                name: "Meeting 5",
                ip: "192.168.10.32",
              },
            ],
          },
          {
            label: "Second Floor",
            id: 2,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Hall 1",
                ip: "192.168.10.34",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Hall 2",
                ip: "192.168.10.33",
              },
            ],
          },
          {
            label: "Third Floor",
            id: 3,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Room 1",
                ip: "192.168.10.35",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Room 2",
                ip: "192.168.10.36",
              },
              {
                id: "3",
                thumbnail: "",
                name: "Room 3",
                ip: "192.168.10.37",
              },
              {
                id: "4",
                thumbnail: "",
                name: "Room 4",
                ip: "192.168.10.38",
              },
              {
                id: "5",
                thumbnail: "",
                name: "Room 5",
                ip: "192.168.10.39",
              },
            ],
          },
        ],
      },
      {
        label: "Category 2",
        children: [
          {
            label: "First Floor",
            id: 4,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Offices 1",
                ip: "192.168.18.28",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Offices 2",
                ip: "192.168.18.29",
              },
            ],
          },
          {
            label: "Second Floor",
            id: 5,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Class 1",
                ip: "192.168.20.30",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Class 2",
                ip: "192.168.20.28",
              },
              {
                id: "3",
                thumbnail: "",
                name: "Class 3",
                ip: "192.168.20.32",
              },
              {
                id: "4",
                thumbnail: "",
                name: "Class 1",
                ip: "192.168.91.28",
              },
              {
                id: "5",
                thumbnail: "",
                name: "Class 2",
                ip: "192.168.91.29",
              },
            ],
          },
          {
            label: "Third Floor",
            id: 6,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Manager Room 1",
                ip: "192.168.15.28",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Manager Room 2",
                ip: "192.168.15.221",
              },
              {
                id: "3",
                thumbnail: "",
                name: "Manager Room 3",
                ip: "192.168.15.340",
              },
            ],
          },
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
          {
            label: "First Floor",
            id: 7,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "Developer Room 1",
                ip: "192.168.10.28",
              },
              {
                id: "2",
                thumbnail: "",
                name: "Developer Room 2",
                ip: "192.168.10.22",
              },
              {
                id: "3",
                thumbnail: "",
                name: "Developer Room 3",
                ip: "192.168.10.29",
              },
              {
                id: "4",
                thumbnail: "",
                name: "Developer Room 4",
                ip: "192.168.10.44",
              },
              {
                id: "5",
                thumbnail: "",
                name: "Developer Room 5",
                ip: "192.168.10.55",
              },
            ],
          },
          {
            label: "Second Floor",
            id: 8,
            devices: [
              {
                id: "1",
                thumbnail: "",
                name: "HR Room 1",
                ip: "192.168.37.33",
              },
              {
                id: "2",
                thumbnail: "",
                name: "HR Room 2",
                ip: "192.168.37.35",
              },
              {
                id: "3",
                thumbnail: "",
                name: "HR Room 3",
                ip: "192.168.37.201",
              },
              {
                id: "4",
                thumbnail: "",
                name: "HR Room 4",
                ip: "192.168.37.268",
              },
              {
                id: "5",
                thumbnail: "",
                name: "HR Room 5",
                ip: "192.168.37.224",
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   label: "Office 3",
  //   children: [
  //     {
  //       label: "Category 1",
  //       children: [
  //         { label: "First Floor", id: 10 },
  //         { label: "Second Floor", id: 11 },
  //         { label: "Third Floor", id: 12 },
  //       ],
  //     },
  //   ],
  // },
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
