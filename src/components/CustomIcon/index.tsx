
import { Icon } from "@iconify/react";
import { chakra } from "@chakra-ui/react";


const ChakraIcon = chakra(Icon);

interface CustomIconProps {
  icon: any;
  fontSize?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const CustomIcon = ({
  icon,
  fontSize,
  className,
  color,
  onClick,
}: CustomIconProps) => {
  return (
    <ChakraIcon
      icon={icon}
      fontSize={fontSize}
      className={className}
      color={color}
      onClick={onClick}
      cursor="pointer"
    />
  );
};

export default CustomIcon;
