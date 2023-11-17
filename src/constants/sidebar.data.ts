export const sidebarData = [
  {
    key: 1,
    component: "Button",
    label: "Button",
    description:
      "Displays a button or a component that looks like a button. Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.",
    icon: "radix-icons:button",
    code: `
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
        `,
  },
  {
    key: 2,
    component: "Icon",
    label: "Icon",
    description:
      "Displays an icon from any icon library. A wrapper around Iconify.",
    icon: "tdesign:icon",
    code: `
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
    `,
  },
];
