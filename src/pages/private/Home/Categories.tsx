import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MainSection } from "../../../layout";
import {
  DeviceListingSideBar,
  getDefaultMenuItem,
  menuItem,
} from "../DeviceListing";
import CategoryInfo from "./components/CategoryInfo";

const categoryMap = [
  [
    { label: "First Floor", id: 0 },
    { label: "Second Floor", id: 1 },
    { label: "Third Floor", id: 2 },
    { label: "Four Floor", id: 3 },
  ],
  [
    { label: "Meeting Room 1", id: 0 },
    { label: "Meeting Room 2", id: 1 },
    { label: "Meeting Room 3", id: 2 },
    { label: "Meeting Room 4", id: 3 },
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
    <Grid templateColumns="2fr 7fr 3fr" columnGap={4} minH="full">
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
          <DragNDropMainSection
            category={selectedItem}
            subCategories={subCategories}
            onSelectSubCategory={onSelectSubCategory}
            updateSubCategoryList={updateSubCategoryList}
          />
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

const DragNDropMainSection: React.FC<any> = ({
  category,
  subCategories,
  onSelectSubCategory,
  updateSubCategoryList,
}) => {
  return (
    <MainSection>
      <Flex justifyContent="center" alignItems="center" h="container.md">
        <DndProvider backend={HTML5Backend}>
          <CircleContainer
            category={category}
            subCategories={subCategories}
            onSelectSubCategory={onSelectSubCategory}
            updateSubCategoryList={updateSubCategoryList}
          />
        </DndProvider>
      </Flex>
    </MainSection>
  );
};

const CircleContainer: React.FC<any> = ({
  category,
  subCategories,
  onSelectSubCategory,
  updateSubCategoryList,
}) => {
  const numItems = subCategories.length;
  const radius = 250;
  const getElementPosition = (index: any, totalItems: any) => {
    const angle = (index / totalItems) * 2 * Math.PI;
    // -Math.cos to place element from the left middle instead of right middle
    const x = radius * -Math.cos(angle) + radius;
    const y = radius * -Math.sin(angle) + radius;

    return { x, y };
  };

  const handleDrop = (source: any, destination: any) => {
    const { id: sourceId } = source;
    const { id: destinationId } = destination;
    const updatedList = subCategories.map((item: any) => {
      if (item.id === sourceId) {
        return { ...destination };
      }
      if (item.id === destinationId) {
        return { ...source };
      }
      return item;
    });
    updateSubCategoryList(updatedList);
  };

  const headerItemPosition = getElementPosition(0, 1);
  return (
    <Box
      id="circularContainer"
      position="relative"
      width="500px"
      height="500px"
      borderRadius="full"
      border="2px dashed"
      borderColor="gray.300"
    >
      <Box
        bg="gray.100"
        border="1px"
        borderColor="gray.200"
        borderRadius={2}
        position="absolute"
        top={`${headerItemPosition.y}px`}
        left={`${headerItemPosition.x}px`}
        py={3}
        px={7}
        fontWeight="bold"
        fontSize="xl"
        textColor="gray.600"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {category.label}
      </Box>
      {subCategories.map((item: any, index: number) => {
        const { x, y } = getElementPosition(index + 1, numItems + 1);
        return (
          <DroppableBox
            key={index}
            position={{ x, y }}
            item={item}
            onDrop={handleDrop}
          >
            <DraggableBox key={index} position={{ x, y }} item={item}>
              <Box
                w="max-content"
                px={5}
                py={2}
                bg="gray.100"
                border="1px"
                borderColor="gray.200"
                borderRadius={2}
                fontSize="sm"
                textColor="gray.500"
                onClick={() => onSelectSubCategory(item)}
              >
                <Text>{item.label}</Text>
              </Box>
            </DraggableBox>
          </DroppableBox>
        );
      })}
    </Box>
  );
};
const DroppableBox: React.FC<any> = ({
  children,
  position,
  item: source,
  onDrop,
}) => {
  const { x, y } = position;
  const [collectedProps, drop] = useDrop({
    accept: "element",
    drop(item, monitor) {
      onDrop(source, item);
      return {};
    },
    canDrop(item, monitor) {
      return source.id !== item?.id;
    },
    collect(monitor) {
      return { canDrop: monitor.canDrop() };
    },
  });

  const { canDrop } = collectedProps;
  return (
    <Box
      ref={drop}
      position="absolute"
      left={`${x}px`}
      top={`${y}px`}
      transform={"translate(-50%, -50%)"}
      p={5}
      {...(canDrop ? { bg: "gray.300" } : null)}
    >
      {children}
    </Box>
  );
};
const DraggableBox: React.FC<any> = ({ children, item }: any) => {
  const [collected, dragRef, dragPreview] = useDrag({
    type: "element",
    item: { ...item },
  });

  return collected.isDragging ? (
    <Box ref={dragPreview} />
  ) : (
    <Box
      ref={dragRef}
      {...collected}
      sx={{
        opacity: collected.isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </Box>
  );
};
