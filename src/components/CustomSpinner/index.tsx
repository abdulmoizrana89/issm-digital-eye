import { Flex, Spinner } from "@chakra-ui/react";

interface CustomSpinnerProps {
  thickness: string;
  color: string;
  speed: string;
  emptyColor: string;
  size: string;
}

const CustomSpinner = ({
  thickness,
  color,
  speed,
  emptyColor,
  size,
}: CustomSpinnerProps) => {
  return (
    // <Flex className=" justify-center items-center h-screen ">
      <Spinner
        thickness={thickness}
        color={color}
        speed={speed}
        emptyColor={emptyColor}
        size={size}
      />
    // </Flex
  );
};

export default CustomSpinner;
