import { useToast, Text, Flex } from "@chakra-ui/react";
import CustomIcon from "../CustomIcon";
import tickCircleOutline from "@iconify/icons-teenyicons/tick-circle-outline";
import closeIcon from "@iconify/icons-material-symbols/close";
import errorOutline from "@iconify/icons-material-symbols/error-outline";

interface CustomToastProps {
  title: string;
  description: string;
  status: any;
}

const CustomToast = () => {
  const toast = useToast();

  const addToast = ({ title, description, status }: CustomToastProps) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true,
      render: ({ onClose }) => (
        <Flex
          className={`${
            status == "error"
              ? "bg-error-tertiary-10 border-error-0"
              : "bg-primary-0 border-primary-110/50"
          }  border-[1px] px-4 py-5 gap-2 w-[550px] justify-between items-center rounded-[5px] mb-16 z-20`}
        >
          <Flex className="gap-2 justify-start items-center">
            <CustomIcon
              icon={status == "error" ? errorOutline : tickCircleOutline}
              color={`${status == "error" ? "error.0" : "primary.110 "}`}
              fontSize="22px"
            />
            <Text
              className={`${
                status == "error" ? "text-error-0" : "text-primary-110 "
              } text-[16px]`}
            >
              {title}
            </Text>
          </Flex>
          <CustomIcon
            icon={closeIcon}
            color="#888888"
            onClick={() => {
              onClose();
            }}
          />
        </Flex>
      ),
    });
  };

  return { addToast };
};

export default CustomToast;
