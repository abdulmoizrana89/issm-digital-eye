import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  chakra,
} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import {
  CustomModal,
  CustomModalFooter,
  FormFields,
} from "../../../../components";
import {
  customResolver,
  requiredValidation,
} from "../../../../utils/validations";

const formFields = [
  {
    name: { type: "text", label: "Office Name", required: true },
    description: { type: "text", label: "Description", required: true },
  },
  {
    ip: { type: "text", label: "IP Number", required: true },
    category: { type: "text", label: "Category", required: true },
  },
];

type FormValues = {
  name: string;
  description: string;
  ip: string;
  category: string;
  streamURL: string;
};
type AddDeviceModalProps = {
  mode: string;
  isOpen: boolean;
  onClose: () => void;
  data?: FormValues;
};

const fieldValidations = {
  name: [["required", requiredValidation]],
  description: [["required", requiredValidation]],
  ip: [["required", requiredValidation]],
  category: [["required", requiredValidation]],
  streamURL: [["required", requiredValidation]],
};
const AddDeviceModal: React.FC<AddDeviceModalProps> = ({
  mode = "add",
  isOpen,
  onClose,
  data,
}) => {
  const isEditMode = mode === "edit";
  const [streamURL, setStreamURL] = useState<string>("");
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, ...formState },
    ...formMethods
  } = useForm<FormValues>({
    defaultValues: data,
    resolver: customResolver(fieldValidations),
  });

  const handleCloseModal = () => {
    onClose();
  };

  const onSubmit = (data: any) => {
    console.log("data=> ", data);
  };

  const handleTestStreamURL = () => {
    const streamURL = getValues("streamURL");
    console.log("streamURL=> ", streamURL);
    if (!!streamURL) {
      setStreamURL(streamURL);
    }
  };

  return (
    <CustomModal
      size="4xl"
      title={`${isEditMode ? "Edit" : "Add New"} Device`}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <Box>
        <FormProvider
          handleSubmit={handleSubmit}
          register={register}
          getValues={getValues}
          formState={{ errors, ...formState }}
          {...formMethods}
        >
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <FormFields fields={formFields} />

            <Flex mt={2} gap={2} alignItems="flex-end">
              <FormControl
                id="streamURL"
                isRequired={true}
                isInvalid={!!errors.streamURL}
              >
                <FormLabel>Stream URL</FormLabel>
                <Input {...register("streamURL")} />
                <FormErrorMessage>
                  {!!errors?.streamURL ? errors.streamURL.message : ""}
                </FormErrorMessage>
              </FormControl>

              <Button
                {...(!!errors?.streamURL && { mb: 6 })}
                bgGradient="linear(161deg, #FF5574, #EF5350)"
                borderRadius={5}
                fontSize={14}
                fontWeight="normal"
                color="#FFFFFF"
                w="20%"
                onClick={handleTestStreamURL}
              >
                Test
              </Button>
            </Flex>

            {!!streamURL ? (
              <Box
                w="full"
                h="full"
                p={2}
                mt={2}
                border="1px"
                borderColor="gray.100"
              >
                <video className="w-full h-full" src={streamURL} controls />
              </Box>
            ) : null}
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
      </Box>
    </CustomModal>
  );
};

export default AddDeviceModal;
