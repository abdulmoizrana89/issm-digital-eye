import { Box } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

const DroppableBox: React.FC<any> = ({
  children,
  position,
  index,
  item: source,
  onDrop,
}) => {
  const { x, y } = position;
  const [collectedProps, drop] = useDrop({
    accept: "element",
    drop(item, monitor) {
      onDrop({ ...source, index }, item);
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
      {...(canDrop
        ? {
            bg: "gray.300",
            border: "1px",
            borderRadius: 2,
            borderColor: "gray.300",
          }
        : null)}
    >
      {children}
    </Box>
  );
};

export default DroppableBox;
