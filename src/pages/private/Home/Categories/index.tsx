import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useQuery } from "@tanstack/react-query";

import { getDefaultMenuItem, menuItem } from "../../DeviceListing";
import { DeviceListingSideBar } from "../../DeviceListing/components/DeviceListingSidebar";
import { MainSection } from "../../../../layout";
import Circle from "./components/Circle";
import CategoryInfo from "./components/CategoryInfo";
import useStore from "../../../../store";
import { useCategoriesSocket } from "../../../../hooks";
import { getCategories, CATEGORIES_QUERY_KEY } from "../../../../http";

const categoryMap = [
  [
    { events: [], label: "First Floor", id: 0 },
    { events: [], label: "Second Floor", id: 1 },
    { events: [], label: "Third Floor", id: 2 },
    { events: [], label: "Four Floor", id: 3 },
  ],
  [
    { events: [], label: "Meeting Room 1", id: 6 },
    { events: [], label: "Meeting Room 2", id: 7 },
    { events: [], label: "Meeting Room 3", id: 8 },
    { events: [], label: "Meeting Room 4", id: 9 },
  ],
];
const sidebarData = [
  {
    label: "Office 1",
    children: [
      { label: "Category 1", id: 0 },
      { label: "Category 2", id: 1 },
    ],
  },
];

const Categories = () => {
  const { id } = useParams();
  // Add socket handler inside useCategoriesSocket hook
  // const { sendData } = useCategoriesSocket();

  // sidebar data
  // TODO: get sidebar data from backend
  // const { data: _data, isLoading: _isLoading } = useQuery({
  //   queryKey: [CATEGORIES_QUERY_KEY, id],
  //   queryFn: () => getCategories(id),
  //   refetchOnWindowFocus: false,
  //   retry: 3,
  // });

  // TODO: resolve subcategories handling and socket channel on select different category
  const subCategoriess = useStore((state: any) => state.subCategories);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<menuItem | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState<any>([]);

  useEffect(() => {
    const defaultMenuItem = getDefaultMenuItem(sidebarData[0]);
    if (!!defaultMenuItem) {
      setSelectedItem(defaultMenuItem);

      const { id = 0 } = defaultMenuItem;
      setSubCategories(categoryMap[id]);
    }
  }, []);

  const onSelectItem = (item: any) => {
    const defaultSubCategories: any = categoryMap[item.id];
    setSelectedItem(item);
    setSubCategories(defaultSubCategories);
  };

  const onSelectSubCategory = (item: any) => {
    setSelectedSubCategory(item);
  };

  const updateSubCategoryList = (updatedList: any) => {
    setSubCategories(updatedList);
  };

  return (
    <Grid
      templateColumns={isCollapsed ? "0.2fr 7.3fr 4.5fr" : "2.5fr 5fr 4.5fr"}
      transition={"grid-template-columns 0.5s"}
      columnGap={4}
      minH="full"
    >
      <GridItem position="relative" pr={3} overflow="hidden">
        <DeviceListingSideBar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          searchFn={() => {}}
          listingMenu={sidebarData}
          accessorKey="id"
          item={selectedItem}
          onItemClick={onSelectItem}
        />
      </GridItem>
      <GridItem>
        {selectedItem ? (
          <MainSection>
            <Flex
              justifyContent="center"
              alignItems="center"
              h="container.md"
              flex={1}
              w="full"
              px={10}
            >
              <DndProvider backend={HTML5Backend}>
                <Circle
                  category={selectedItem}
                  // subCategories={subCategories}
                  subCategories={subCategoriess}
                  onSelectSubCategory={onSelectSubCategory}
                  updateSubCategoryList={updateSubCategoryList}
                />
              </DndProvider>
            </Flex>
          </MainSection>
        ) : null}
      </GridItem>

      <GridItem borderLeft="1px" borderColor="gray.100">
        {selectedSubCategory ? (
          <CategoryInfo subCategory={selectedSubCategory} />
        ) : null}
      </GridItem>
    </Grid>
  );
};

export default Categories;
