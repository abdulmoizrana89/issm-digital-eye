import { useRef } from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";

import EventPopoverNotification from "./EventPopoverNotification";
import Octagon from "./Octagon";
import { useMeasure } from "../../../../../hooks";
import useStore from "../../../../../store";

const octagonWidth = 30;
const labelGapFromPolygon = 10;

const ArcElement: React.FC<any> = ({ item, index, position, circleRadius }) => {
  const removeEventLogs = useStore((state: any) => state.removeEventLogs);
  const labelBoxRef = useRef<HTMLDivElement | null>(null);
  const bounds = useMeasure(labelBoxRef);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnPopoverChange = () => {
    if (isOpen) {
      removeEventLogs(index);
      onClose();
    } else {
      if (item.eventLogs.length) {
        onOpen();
      }
    }
  };

  const labelPositionProps = {
    top: 0,
    left: 0,
  };
  // label x, y position calculations
  if (Math.floor(position.x) === Math.floor(circleRadius)) {
    labelPositionProps.left = -(bounds.width / 2) + octagonWidth / 2;
    labelPositionProps.top =
      position.y > circleRadius
        ? octagonWidth * (2 / 3)
        : -(octagonWidth * (2 / 3));
  } else {
    labelPositionProps.left =
      position.x < circleRadius
        ? -(bounds.width + labelGapFromPolygon)
        : octagonWidth + labelGapFromPolygon;
  }

  // Y Position Adjustment
  const diff = Math.abs(position.y - circleRadius);
  const diffRadiusInPercent = (diff / circleRadius) * 100;

  labelPositionProps.top +=
    position.y > circleRadius
      ? (octagonWidth / 2 / diffRadiusInPercent) * 100
      : -(diffRadiusInPercent / 100);

  return (
    <Flex position="relative" justifyContent="center" alignItems="center">
      <Box
        ref={labelBoxRef}
        w="max-content"
        position="absolute"
        top={`${labelPositionProps.top}px`}
        left={`${labelPositionProps.left}px`}
      >
        <Text color="#4F5D75">{item.label}</Text>
      </Box>

      <EventPopoverNotification
        isOpen={isOpen}
        eventLogs={item.eventLogs}
        handleOnPopoverChange={handleOnPopoverChange}
        trigger={
          <Octagon width={octagonWidth} bg="#E1E1E1">
            <Octagon
              width={octagonWidth - 3}
              bg={item.eventLogs.length ? "#FF5574" : "#8BA4C8"}
            />
          </Octagon>
        }
      />
    </Flex>
  );
};

export default ArcElement;
