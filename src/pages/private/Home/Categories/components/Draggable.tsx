import { Box } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const DraggableBox: React.FC<any> = ({
  children,
  item,
  index,
  ...props
}: any) => {
  const [collected, dragRef, dragPreview] = useDrag({
    type: "element",
    item: { ...item, index },
  });

  return (
    <Box ref={dragRef} cursor="pointer" {...props}>
      {children}
    </Box>
  );
};

export default DraggableBox;
