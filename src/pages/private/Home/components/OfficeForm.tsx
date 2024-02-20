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
  Divider,
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
    description: { type: "text", label: "Description", required: true },
  },
];

const OfficeForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: (data: any) => void;
  onClose: () => void;
}) => {
  const { handleSubmit, register, control, getValues, ...restFormMethods } =
    useForm<FormValues>({
      defaultValues: {
        name: "",
        address: "",
        description: "",
        categories: [],
      },
    });
  const { fields, remove, prepend, update } = useFieldArray({
    control,
    name: "categories",
  });

  const handleAddCategory = () => {
    prepend({ name: "" });
  };

  const handleAddSubCategory = (index: any) => {
    const category = getValues("categories")[index].name;
    update(index, { name: category, subCategory: [{ name: "" }] });
  };

  const deleteSubCategory = (index: any) => {
    const category = getValues("categories")[index].name;
    update(index, {
      name: category,
    });
  };

  return (
    <FormProvider
      {...{ handleSubmit, register, control, getValues, ...restFormMethods }}
    >
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
            + Add category
          </Button>
        </Flex>

        <Divider />

        <VStack gap={2} w="full">
          {fields.map((item, index) => (
            <Box key={item.id} bg="#F1F4F7" w="full" p="5">
              <HStack alignItems="flex-start">
                <VStack>
                  <FormControl id={item.id} isRequired={true} w="max">
                    <FormLabel>Category</FormLabel>
                    <Input
                      bg="white"
                      {...register(`categories.${index}.name` as const)}
                    />
                  </FormControl>
                  <HStack justifyContent="flex-end" w="full">
                    {/* TODO: discuss, how to delete a category */}
                    {/* <Button
                      key={`delete-category-${index}`}
                      mt={2}
                      variant="outline"
                      color="#FF5574"
                      borderColor="#FF5574"
                      fontWeight="normal"
                      size="sm"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </Button> */}
                    {item.subCategory?.length ? (
                      <Button
                        key={`delete-sub-category-${index}`}
                        mt={2}
                        variant="ghost"
                        color="#FF5574"
                        borderColor="#FF5574"
                        size="sm"
                        onClick={() => deleteSubCategory(index)}
                      >
                        - delete Sub-Category
                      </Button>
                    ) : (
                      <Button
                        key={`add-sub-category-${index}`}
                        mt={2}
                        variant="ghost"
                        color="#FF5574"
                        borderColor="#FF5574"
                        size="sm"
                        onClick={() => handleAddSubCategory(index)}
                      >
                        + add Sub-Category
                      </Button>
                    )}
                  </HStack>
                </VStack>
                <SubCategory
                  categoryIndex={index}
                  control={control}
                  register={register}
                />
              </HStack>
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
      {fields.length ? <Text>Sub-Category</Text> : null}
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
