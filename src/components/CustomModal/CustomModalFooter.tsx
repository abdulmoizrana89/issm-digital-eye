import { ReactNode } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

type CustomModalFooterProps = {
  closeBtnText?: "Close" | "Cancel";
  submitBtnText?: "Submit" | "Save";
  submitBtnProps?: {};
  cancelBtnProps?: {};
  onClose?: () => void;
  onSubmit?: () => void;
};

const CustomModalFooter = ({
  closeBtnText = "Close",
  submitBtnText = "Submit",
  submitBtnProps = {},
  cancelBtnProps = {},
  onClose,
  onSubmit,
}: CustomModalFooterProps): ReactNode => {
  return (
    <ButtonGroup gap={2}>
      {onClose && (
        <Button
          onClick={onClose}
          variant="outline"
          border="0.452px solid #FF5574"
          color="#FF5574"
          fontSize={14}
          fontWeight="normal"
          {...cancelBtnProps}
        >
          {closeBtnText}
        </Button>
      )}
      {onSubmit && (
        <Button
          bgGradient="linear(161deg, #FF5574, #EF5350)"
          borderRadius={5}
          fontSize={14}
          fontWeight="normal"
          color="#FFFFFF"
          onClick={onSubmit}
          {...submitBtnProps}
        >
          {submitBtnText}
        </Button>
      )}
    </ButtonGroup>
  );
};

export default CustomModalFooter;
