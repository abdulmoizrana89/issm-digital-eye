import { CustomModal } from "../../../../components";
import OfficeForm from "./OfficeForm";

const CreateOfficeModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const onSubmit = (data: any) => {
    console.log("data=> ", data);
  };

  const onModalClose = () => {
    onClose();
  };

  return (
    <CustomModal title="Create Office" isOpen={isOpen} onClose={onModalClose}>
      <OfficeForm onSubmit={onSubmit} onClose={onClose} />
    </CustomModal>
  );
};

export default CreateOfficeModal;
