import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";

import {
  CustomIconButton,
  CustomModalFooter,
  FormFields,
} from "../../../../components";

type FormValues = {
  name: string;
  address: string;
  description: string;
  categories:
    | {
        name: string;
        subCategory: { name: string }[];
      }[]
    | [];
};

const formFields = [
  {
    name: { type: "text", label: "Office Name", required: true },
    address: { type: "text", label: "Location", required: true },
  },
  {
    description: { type: "text", label: "description", required: true },
  },
];

const OfficeForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: (data: any) => void;
  onClose: () => void;
}) => {
  const { handleSubmit, register, control, ...restFormMethods } =
    useForm<FormValues>({
      defaultValues: {
        name: "",
        address: "",
        description: "",
        categories: [],
      },
    });
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: "categories",
  });

  const handleAddCategory = () => {
    prepend({ name: "", subCategory: [{ name: "" }] });
  };

  return (
    <FormProvider {...{ handleSubmit, register, control, ...restFormMethods }}>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <FormFields fields={formFields} />

        <Flex justifyContent="flex-end" my={2}>
          <Button
            variant="ghost"
            _hover={{}}
            _active={{}}
            color="#FF5574"
            onClick={handleAddCategory}
          >
            + add category
          </Button>
        </Flex>

        <VStack gap={2} w="full">
          {fields.map((item, index) => (
            <Box key={item.id} bg="gray.100" w="full" p="5">
              <HStack alignItems="flex-start" justifyContent="flex-start">
                <FormControl id={item.id} isRequired={true} w="max">
                  <FormLabel>Category</FormLabel>
                  <Input
                    bg="white"
                    {...register(`categories.${index}.name` as const)}
                  />
                </FormControl>
                <SubCategory
                  categoryIndex={index}
                  control={control}
                  register={register}
                />
              </HStack>
              <Button
                mt={2}
                variant="outline"
                color="#FF5574"
                borderColor="#FF5574"
                fontWeight="normal"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </VStack>

        <Flex mt={5} justify={"flex-end"}>
          <CustomModalFooter
            onClose={onClose}
            closeBtnText="Cancel"
            // cancelBtnProps={{ isDisabled: isLoading }}
            submitBtnProps={{
              type: "submit",
              // isDisabled: isLoading,
              // isLoading,
            }}
            onSubmit={handleSubmit(onSubmit)}
          />
        </Flex>
      </chakra.form>
    </FormProvider>
  );
};

export default OfficeForm;

type SubCategoryProps = {
  categoryIndex: number;
  control: any;
  register: any;
};
const SubCategory = ({
  categoryIndex,
  control,
  register,
}: SubCategoryProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.subCategory`,
  });

  const handleAdd = () => {
    prepend({ name: "" });
  };

  return (
    <Box w="full">
      <Text>Sub-Category</Text>
      {fields.map((item, index) => (
        <Flex key={item.id} mt={2} gap={2}>
          <FormControl id={item.id}>
            <Input
              bg="white"
              {...register(
                `categories.${categoryIndex}.subCategory.${index}.name`
              )}
            />
          </FormControl>
          {!!index ? (
            <CustomIconButton
              aria-label="delete sub category"
              onClick={() => remove(index)}
              icon="mdi:delete-outline"
            />
          ) : (
            <CustomIconButton
              aria-label="add sub category"
              onClick={handleAdd}
              icon="mdi:plus-thick"
            />
          )}
        </Flex>
      ))}
    </Box>
  );
};
