import { IconButton } from "@chakra-ui/react";

import { CustomIcon } from "..";

interface ICustomIconButton {
  icon: string;
  onClick: () => void;
}

const CustomIconButton = ({ icon, onClick }: ICustomIconButton) => {
  return (
    <IconButton
      bg="#FFF"
      borderColor="#D7D7D7"
      variant="outline"
      aria-label={`${icon} button`}
      onClick={onClick}
      icon={<CustomIcon color="#696969" icon={icon} />}
    />
  );
};

export default CustomIconButton;
