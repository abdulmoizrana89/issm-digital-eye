import {
  Input,
  chakra,
  Box,
  Flex,
  Text,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { CustomBtn } from "../../../../../components";

interface EditApplicationFormProps {
  onClose: () => void;
  rowInfo: {
    name: string;
    description: string;
    category: string;
    model: string;
  };
}
const EditApplicationForm = ({
  onClose,
  rowInfo,
}: EditApplicationFormProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const returnData = {
      name: data.name,
      description: data.description,
      category: data.category,
      model: data.model,
    };
    console.log(returnData);
  };

  return (
    <div className="my-5">
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Box className="bg-[#F1F4F7] rounded-[3px] p-[30px] flex flex-col gap-y-5 ">
          <Box>
            <Text>Application Name</Text>
            <Input
              backgroundColor="white"
              defaultValue={rowInfo.name}
              {...register("name")}
            />
          </Box>
          <Box>
            <Text>Description</Text>
            <Textarea
              backgroundColor="white"
              placeholder="Description"
              defaultValue={rowInfo.description}
              {...register("description")}
            />
          </Box>
          <Box>
            <Text>Application Category</Text>
            <Select
              bg="#F9F9F9"
              borderRadius="4px"
              focusBorderColor="#ABACAC"
              placeholder="check"
              defaultValue={rowInfo.category}
              {...register("category")}
            >
              <option value={rowInfo.category}>{rowInfo.category}</option>
            </Select>
          </Box>
          <Box>
            <Text>Model</Text>
            <Select
              bg="#F9F9F9"
              borderRadius="4px"
              focusBorderColor="#ABACAC"
              placeholder="Search"
              defaultValue={rowInfo.model}
              {...register("model")}
            >
              <option value={rowInfo.model}>{rowInfo.model}</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
              <option value="Model 3">Model 3</option>
            </Select>
          </Box>
        </Box>
        <Flex className="justify-end mt-10 pt-5 gap-3 px-5">
          <CustomBtn
            title="Cancel"
            color="secondaryBtn"
            borderColor="secondary.10"
            textColor="secondary.10"
            height="40px"
            width="120px"
            isLoading={false}
            onClick={onClose}
          />
          <CustomBtn
            title="Save"
            color="secondaryBtn"
            borderColor="secondary.10"
            bgColor="secondary.10"
            textColor="#fff"
            height="40px"
            width="120px"
            isLoading={false}
          />
        </Flex>
      </chakra.form>
    </div>
  );
};

export default EditApplicationForm;
