
import { Button, Text, Box } from "@chakra-ui/react";

interface CustomBtnProps {
  title: string;
  width?: string;
  height?: string;
  color: string;
  borderRadius?: string;
  textColor?: string;
  textSize?: string;
  bgColor?: string;
  isLoading?: boolean;
  borderColor?: string;
  visible?: boolean;
  hide?: boolean;
  onClick?: () => void;
}

const CustomBtn = ({
  title,
  width,
  height,
  color,
  textColor,
  textSize,
  bgColor,
  isLoading = false,
  borderColor,
  visible = true,
  hide = false,
  borderRadius,
  onClick,
}: CustomBtnProps) => {
  return (
    <Box
      bgColor={bgColor ? bgColor : "white"}
      borderRadius={borderRadius ? borderRadius : "4px"}
      width={width ? width : ""}
    >
      <Button
        colorScheme={color}
        borderRadius={borderRadius ? borderRadius : "5px"}
        isLoading={isLoading}
        width={width ? width : "100%"}
        height={height ? height : "40px"}
        border={"1px solid "}
        borderColor={borderColor}
        onClick={onClick}
        type={onClick ? "button" : "submit"}
        cursor="pointer"
        visibility={visible ? "visible" : "hidden"}
        hidden={hide ? true : false}
      >
        <Text
          className=" text-center "
          color={textColor ? textColor : "white"}
          fontSize={textSize ? textSize : "15px"}
          paddingX="10px"
        >
          {title}
        </Text>
      </Button>
    </Box>
  );
};

export default CustomBtn;
