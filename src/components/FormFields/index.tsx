import { Box, Flex, VStack } from "@chakra-ui/react";

import Field from "./Field";

const FormFields = ({ fields }) => {
  return (
    <VStack gap={2}>
      {fields.map((fieldGroup, index) => {
        return (
          <Box w="full" key={`field-group-${index}`}>
            <Flex gap={2}>
              {Object.entries(fieldGroup).map(
                ([fieldName, fieldProps], index) => (
                  <Field
                    key={`field-${fieldName}-${index}`}
                    name={fieldName}
                    {...fieldProps}
                  />
                )
              )}
            </Flex>
          </Box>
        );
      })}
    </VStack>
  );
};

export default FormFields;
