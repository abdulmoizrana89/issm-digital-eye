import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  DeviceListingSideBar,
  getDefaultMenuItem,
  menuItem,
} from "../../DeviceListing";
import { MainSection } from "../../../../layout";
import Circle from "./components/Circle";
import CategoryInfo from "./components/CategoryInfo";

const categoryMap = [
  [
    { label: "First Floor", id: 0 },
    { label: "Second Floor", id: 1 },
    { label: "Third Floor", id: 2 },
    { label: "Four Floor", id: 3 },
  ],
  [
    { label: "Meeting Room 1", id: 4 },
    { label: "Meeting Room 2", id: 5 },
    { label: "Meeting Room 3", id: 6 },
    { label: "Meeting Room 4", id: 7 },
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
  const [selectedItem, setSelectedItem] = useState<menuItem | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const defaultMenuItem = getDefaultMenuItem(sidebarData[0]);
    if (!!defaultMenuItem) {
      setSelectedItem(defaultMenuItem);
      setSubCategories(categoryMap?.[defaultMenuItem?.id]);
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
    <Grid templateColumns="2.5fr 5fr 4.5fr" columnGap={4} minH="full">
      <GridItem>
        <DeviceListingSideBar
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
              px={10}
            >
              <DndProvider backend={HTML5Backend}>
                <Circle
                  category={selectedItem}
                  subCategories={subCategories}
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
