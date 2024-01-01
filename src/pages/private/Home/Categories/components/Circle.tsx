import { useRef } from "react";
import { Flex } from "@chakra-ui/react";

import DroppableBox from "./Droppable";
import DraggableBox from "./Draggable";
import { useMeasure } from "../../../../../hooks";
import InnerCircle from "./InnerCircle";
import ArcHeader from "./ArcHeader";
import ArcElement from "./ArcElement";

export const getElementPosition = (
  index: any,
  totalItems: any,
  radius: any
) => {
  const angle = (index / totalItems) * 2 * Math.PI;
  // -Math.cos to place element from the left middle instead of right middle
  const x = radius * -Math.cos(angle) + radius;
  const y = radius * -Math.sin(angle) + radius;

  return { x, y };
};

const Circle: React.FC<any> = ({
  category,
  subCategories,
  onSelectSubCategory,
  updateSubCategoryList,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bounds = useMeasure(containerRef);
  const numItems = subCategories.length;
  const radius = bounds?.width / 2;

  const handleDrop = (source: any, destination: any) => {
    const { id: sourceId, index: sourceIndex } = source;
    const { id: destinationId, index: destinationIndex } = destination;

    subCategories.splice(destinationIndex, 1);
    subCategories.splice(sourceIndex, 0, destination);
    updateSubCategoryList([...subCategories]);
  };

  return (
    <Flex
      ref={containerRef}
      id="circularContainer"
      position="relative"
      w="full"
      maxW="container.sm"
      height={`${bounds.width}px`}
      borderRadius="full"
      border="2px dashed"
      borderColor="gray.300"
      justifyContent="center"
      alignItems="center"
    >
      <ArcHeader bounds={bounds}>{category.label}</ArcHeader>
      {subCategories.map((item: any, index: number) => {
        const { x, y } = getElementPosition(index + 1, numItems + 1, radius);
        return (
          <DroppableBox
            key={`droppable-box-${index}`}
            position={{ x, y }}
            index={index}
            item={item}
            onDrop={handleDrop}
          >
            <DraggableBox
              key={index}
              index={index}
              item={item}
              onClick={() => onSelectSubCategory(item)}
            >
              <ArcElement
                item={item}
                index={index}
                position={{ x, y }}
                circleRadius={radius}
              />
            </DraggableBox>
          </DroppableBox>
        );
      })}
      <InnerCircle height={bounds.height / 1.5} width={bounds.width / 1.5} />
    </Flex>
  );
};

export default Circle;
