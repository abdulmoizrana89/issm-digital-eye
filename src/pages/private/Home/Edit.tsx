import { Box, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import OfficeForm from "./components/OfficeForm";
import { MainSection } from "../../../layout";

const EditOffice = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const onSubmit = (data: any) => {
    console.log("data=> ", data);
  };

  const onClose = () => navigate("/home", { replace: true });

  return (
    <MainSection>
      <VStack w="full" gap={5} alignItems="flex-start">
        <Box w="full">
          <Text fontSize="xl" fontWeight="bold">
            Edit Office
          </Text>
        </Box>
        <Box w="3xl" border="1px" borderColor="#F1F4F7" padding={2}>
          <OfficeForm {...{ onClose, onSubmit }} />
        </Box>
      </VStack>
    </MainSection>
  );
};

export default EditOffice;
