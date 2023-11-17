import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from "../ui/tooltip";
import CustomIcon from "../CustomIcon";
import errorOutline from "@iconify/icons-material-symbols/error-outline";
import { Flex,Text } from "@chakra-ui/react";

interface CustomToolTipProps {
  text?: string;
  children?: React.ReactNode;
}

const CustomToolTip = ({ text, children }: CustomToolTipProps) => {
  return (
    <TooltipProvider
    
    >
      <Tooltip
      
      >
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent asChild side="bottom"
        >
          <Flex 
            className="justify-center items-center gap-2 w-[200px] bg-primary-110"
          >
            <CustomIcon icon={errorOutline} color="white" fontSize="26px"/>
            <Text className="ml-2 text-white">{text}</Text>
          </Flex>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomToolTip;
