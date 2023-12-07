import { useRef } from "react";
import { Box, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import lineIcon from "@iconify/icons-pepicons-pencil/line-x";

import DroppableBox from "./Droppable";
import DraggableBox from "./Draggable";
import { useMeasure } from "../../../../../hooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../components/ui/popover";
import { CustomIcon } from "../../../../../components";
import useStore from "../../../../../store";

const getElementPosition = (index: any, totalItems: any, radius: any) => {
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
  const containerRef = useRef<HTMLDialogElement>();
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
    <Box
      ref={containerRef}
      id="circularContainer"
      position="relative"
      w="full"
      maxW="container.sm"
      height={`${bounds.width}px`}
      borderRadius="full"
      border="2px dashed"
      borderColor="gray.300"
    >
      <HeaderArcElement bounds={bounds}>{category.label}</HeaderArcElement>
      {subCategories.map((item: any, index: number) => {
        const { x, y } = getElementPosition(index + 1, numItems + 1, radius);
        return (
          <DroppableBox
            key={index}
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
              <SubCategoryEle item={item} index={index} />
            </DraggableBox>
          </DroppableBox>
        );
      })}
    </Box>
  );
};

export default Circle;

const SubCategoryEle: React.FC<any> = ({ item, index }) => {
  const removeEventLogs = useStore((state: any) => state.removeEventLogs);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnPopoverChange = () => {
    if (isOpen) {
      removeEventLogs(index);
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box>
      <Text>{item.label}</Text>
      {item.eventLogs.length ? (
        <Box
          position="absolute"
          right="0"
          bottom="0"
          transform="translate(50%, 50%)"
          onClick={(e) => e.stopPropagation()}
        >
          <PopoverNotification
            isOpen={isOpen}
            eventLogs={item.eventLogs}
            handleOnPopoverChange={handleOnPopoverChange}
          />
        </Box>
      ) : null}
    </Box>
  );
};

const PopoverNotification: React.FC<any> = ({
  isOpen,
  eventLogs,
  handleOnPopoverChange,
}) => {
  return (
    <Popover open={isOpen} onOpenChange={handleOnPopoverChange}>
      <PopoverTrigger>
        <Box
          className=" text-white text-xs"
          bg="#FF5574"
          w="5"
          h="5"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
        >
          {eventLogs.length}
        </Box>
      </PopoverTrigger>
      <PopoverContent align="start" className="border-red-300 w-full">
        <VStack w="full" alignItems="flex-start">
          <Text className="font-bold text-gray-500 text-sm">
            Events Triggered
          </Text>
          {eventLogs.map(({ event, timestamp }: any, index: number) => {
            return (
              <Flex
                key={`event-${index}`}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                gap={5}
              >
                <Flex gap={2} alignItems="center">
                  <CustomIcon
                    icon={lineIcon}
                    fontSize="lg"
                    className="text-red-800 cursor-not-allowed"
                  />
                  <Text className="text-gray-500 text-sm">{event}</Text>
                </Flex>
                <Box>
                  <Text className="text-gray-500 text-sm">{timestamp}</Text>
                </Box>
              </Flex>
            );
          })}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

const HeaderArcElement: React.FC<any> = ({ children, bounds }) => {
  const { width } = bounds;
  const headerItemPosition = getElementPosition(0, 1, width / 2);
  return (
    <Box
      bg="gray.100"
      border="1px"
      borderColor="gray.200"
      borderRadius={5}
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
      {children}
    </Box>
  );
};
