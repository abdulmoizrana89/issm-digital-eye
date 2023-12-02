import { Box } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const DraggableBox: React.FC<any> = ({ children, item, ...props }: any) => {
  const [collected, dragRef, dragPreview] = useDrag({
    type: "element",
    item: { ...item },
  });

  return (
    <Box
      ref={dragRef}
      w="max-content"
      px={5}
      py={2}
      bg="gray.100"
      border="1px"
      borderColor="gray.300"
      borderRadius={2}
      fontSize="sm"
      textColor="gray.500"
      cursor="pointer"
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

export default DraggableBox;
