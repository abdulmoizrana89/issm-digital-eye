import { Flex, Text } from "@chakra-ui/react";
import CustomIcon from "../CustomIcon";
import errorOutline from "@iconify/icons-material-symbols/error-outline";
import warningOutline from "@iconify/icons-material-symbols/warning-outline";

interface CustomErrorPromptProps {
  icon?: any;
  iconSize?: string;
  error?: string;
  fontSize?: string;
}

const CustomErrorPrompt = ({
  icon,
  error,
  iconSize,
  fontSize,
}: CustomErrorPromptProps) => {
  switch (icon) {
    case "errorCircle":
      icon = errorOutline;
      break;

    case "errorTriangle":
      icon = warningOutline;
      break;

    default:
  }

  return (
    <Flex className="justify-start items-center gap-2 mt-2 mb-2">
      <CustomIcon icon={icon} color="error.0" fontSize={iconSize} />
      <Text className={`text-error-0 text-[${fontSize}]

      `}>{error}</Text>
    </Flex>
  );
};

export default CustomErrorPrompt;
