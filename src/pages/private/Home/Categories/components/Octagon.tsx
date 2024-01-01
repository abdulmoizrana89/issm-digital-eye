import { Flex } from "@chakra-ui/react";

const Octagon: React.FC<any> = ({ width = 30, children, ...props }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={`${width}px`}
      h={`${width}px`}
      bg="gray.300"
      clipPath="polygon(30% 0, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Octagon;
