import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

interface CustomModalProps {
  title: string;
  isOpen: boolean;
  size?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({
  title,
  isOpen,
  size,
  onClose,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
      size={size ? size : "3xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="text-[#4F5D75]">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
