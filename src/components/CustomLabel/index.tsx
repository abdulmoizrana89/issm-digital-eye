
import { Flex, Text } from "@chakra-ui/react";

interface CustomLabelProps {
  labelText: string;
  color: string;
}

const CustomLabel = ({ labelText, color }: CustomLabelProps) => {
  return (
    <Flex
      position="relative"
      width="260px"
      height="30px"
      mr="3"
      textColor="black"
      color="black"
      _before={{
        content: "''",
        width: "12px",
        height: "30px",
        backgroundColor: `${color}`,
      }}
      _after={{
        content: "''",
        width: "250px",
        height: "30px",
        backgroundColor: `${color}`,
        opacity: "0.2",
      }}
    >
      <Text className="text-[16px] ml-5 mt-[3px] flex text-center absolute">
        {labelText}
      </Text>
    </Flex>
  );
};

export default CustomLabel;
