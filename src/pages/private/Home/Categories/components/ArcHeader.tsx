import { Box } from "@chakra-ui/react";

import Octagon from "./Octagon";
import { getElementPosition } from "./Circle";

const ArcHeader: React.FC<any> = ({ children, bounds }) => {
  const { width } = bounds;
  const headerItemPosition = getElementPosition(0, 1, width / 2);
  return (
    <Box
      bg="white"
      position="absolute"
      top={`${headerItemPosition.y}px`}
      left={`${headerItemPosition.x}px`}
      py={7}
      px={7}
      fontWeight="bold"
      fontSize="xl"
      textColor="gray.600"
      sx={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <Octagon width={15} bg="#E1E1E1" position="absolute" top={-1} left="46%">
        <Octagon width={13} bg="#8BA4C8" />
      </Octagon>
      {children}
      <Octagon
        width={15}
        bg="#E1E1E1"
        position="absolute"
        bottom={-1}
        left="46%"
      >
        <Octagon width={13} bg="#8BA4C8" />
      </Octagon>
    </Box>
  );
};

export default ArcHeader;
