import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import CustomBtn from "../CustomBtn";
import CustomIcon from "../CustomIcon";
import warningOutline from "@iconify/icons-material-symbols/warning-outline";

interface CustomDialogProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CustomDialog = ({
  title,
  description,
  isOpen,
  onClose,
  onClick,
  children,
}: CustomDialogProps) => {
  const cancelRef = useRef<any>(null);

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            className="flex items-center gap-x-2"
            fontWeight="semibold"
            fontSize="2xl"
          >
            <CustomIcon
              icon={warningOutline}
              fontSize="30px"
              color="tertiary.0"
            />
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{children ? children : description}</AlertDialogBody>

          {!children && (
            <AlertDialogFooter className="border-t-[1px] gap-x-2 mt-5">
              <CustomBtn
                title="No"
                color="secondaryBtn"
                textColor="primary.110"
                borderColor="primary.110"
                width="100px"
                isLoading={false}
                onClick={onClose}
              />
              <CustomBtn
                title="Yes"
                color="primaryBtn"
                textColor="white"
                borderColor="#D9D9D9"
                width="100px"
                isLoading={false}
                onClick={onClick}
              />
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CustomDialog;
